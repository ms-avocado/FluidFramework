/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */
import { TypedEventEmitter } from "@fluidframework/common-utils";
import { IEvent } from "@fluidframework/common-definitions";
import { IContainer } from "@fluidframework/container-definitions";
import { IFluidLoadable } from "@fluidframework/core-interfaces";

import { FluidClientDebugger } from "./FluidClientDebugger";
import { IFluidClientDebugger } from "./IFluidClientDebugger";
import {
	handleIncomingWindowMessage,
	ISourcedDebuggerMessage,
	InboundHandlers,
	MessageLoggingOptions,
	postMessagesToWindow,
	RegistryChangeMessage,
} from "./messaging";
import { VisualizeSharedObject } from "./data-visualization";

// TODOs:
// - Clear registry on `window.beforeunload`, to ensure we do not hold onto stale resources.

/**
 * Message logging options used by the registry.
 */
const registryMessageLoggingOptions: MessageLoggingOptions = {
	context: "DEBUGGER REGISTRY",
};

/**
 * Properties for configuring a {@link IFluidClientDebugger}.
 *
 * @public
 */
export interface FluidClientDebuggerProps {
	/**
	 * The Container with which the debugger will be associated.
	 */
	container: IContainer;

	/**
	 * The ID of the {@link FluidClientDebuggerProps.container | Container}.
	 */
	containerId: string;

	/**
	 * (optional) Distributed Data Structures (DDSs) associated with the
	 * {@link FluidClientDebuggerProps.container | Container}.
	 *
	 * @remarks
	 *
	 * Providing this data will enable associated tooling to visualize the Fluid data reachable from the provided
	 * objects.
	 *
	 * The debugger will not mutate this data.
	 *
	 * @privateRemarks TODO: rename this to make it more clear that this data does not *belong* to the Container.
	 */
	containerData?: Record<string, IFluidLoadable>;

	// TODO: Accept custom data visualizers.

	/**
	 * (optional) Nickname for the {@link FluidClientDebuggerProps.container | Container} / debugger instance.
	 *
	 * @remarks
	 *
	 * Associated tooling may take advantage of this to differentiate between debugger instances using
	 * semantically meaningful information.
	 *
	 * If not provided, the {@link FluidClientDebuggerProps.containerId} will be used for the purpose of distinguising
	 * debugger instances.
	 */
	containerNickname?: string;

	/**
	 * (optional) Configurations for generating visual representations of
	 * {@link @fluidframework/shared-object-base#ISharedObject}s under {@link FluidClientDebuggerProps.containerData}.
	 *
	 * @remarks
	 *
	 * If not specified, then only `SharedObject` types natively known by the system will be visualized, and using
	 * default visualization implementations.
	 *
	 * If a visualizer configuration is specified for a shared object type that has a default visualizer, the custom one will be used.
	 */
	dataVisualizers?: Record<string, VisualizeSharedObject>;
}

/**
 * Event to montor client debugger list change.
 * @internal
 */
export interface DebuggerRegistryEvents extends IEvent {
	/**
	 * Emitted when a {@link IFluidClientDebugger} is registered.
	 *
	 * @eventProperty
	 */
	(event: "debuggerRegistered", listener: (containerId: string) => void): void;

	/**
	 * Emitted when a {@link IFluidClientDebugger} is closed.
	 *
	 * @eventProperty
	 */
	(event: "debuggerClosed", listener: (containerId: string) => void): void;
}

/**
 * Contract for maintaining a global client debugger registry to store all registered client debugger.
 *
 * @remarks
 *
 * This class listens to incoming messages from the window (globalThis), and posts messages to it upon relevant
 * state changes and when requested.
 *
 * **Messages it listens for:**
 *
 * - {@link GetContainerListMessage}: When received, the registry will post {@link RegistryChangeMessage}.
 *
 * TODO: Document others as they are added.
 *
 * **Messages it posts:**
 *
 * - {@link RegistryChangeMessage}: The registry will post this whenever the list of registered
 * debuggers changes, or when requested (via {@link GetContainerListMessage}).
 *
 * TODO: Document others as they are added.
 *
 * @internal
 */
export class DebuggerRegistry extends TypedEventEmitter<DebuggerRegistryEvents> {
	private readonly registeredDebuggers: Map<string, FluidClientDebugger> = new Map();

	// #region Event handlers

	/**
	 * Handlers for inbound messages related to the registry.
	 */
	private readonly inboundMessageHandlers: InboundHandlers = {
		["GET_CONTAINER_LIST"]: () => {
			this.postRegistryChange();
			return true;
		},
	};

	/**
	 * Event handler for messages coming from the window (globalThis).
	 */
	private readonly windowMessageHandler = (
		event: MessageEvent<Partial<ISourcedDebuggerMessage>>,
	): void => {
		handleIncomingWindowMessage(
			event,
			this.inboundMessageHandlers,
			registryMessageLoggingOptions,
		);
	};

	/**
	 * Posts a {@link RegistryChangeMessage} to the window (globalThis).
	 */
	private readonly postRegistryChange = (): void => {
		postMessagesToWindow<RegistryChangeMessage>(registryMessageLoggingOptions, {
			type: "REGISTRY_CHANGE",
			data: {
				containers: [...this.registeredDebuggers.values()].map((clientDebugger) => ({
					id: clientDebugger.containerId,
					nickname: clientDebugger.containerNickname,
				})),
			},
		});
	};

	// #endregion

	public constructor() {
		super();

		// Register listener for inbound messages from the window (globalThis)
		globalThis.addEventListener?.("message", this.windowMessageHandler);

		// Initiate message posting of registry updates.
		// TODO: Only do this after some external request?
		this.on("debuggerRegistered", this.postRegistryChange);
		this.on("debuggerClosed", this.postRegistryChange);
	}

	/**
	 * Initializes a {@link IFluidClientDebugger} from the provided properties and binds it to the global context.
	 */
	public initializeDebugger(props: FluidClientDebuggerProps): void {
		const { containerId } = props;
		const existingDebugger = this.registeredDebuggers.get(containerId);
		if (existingDebugger !== undefined) {
			console.warn(
				`Active debugger registry already contains an entry for container ID "${containerId}". Override existing entry.`,
			);
			existingDebugger.dispose();
		}

		const clientDebugger = new FluidClientDebugger(props);
		console.log(`Add new debugger${clientDebugger.containerId}`);
		this.registeredDebuggers.set(containerId, clientDebugger);
		this.emit("debuggerRegistered", containerId, clientDebugger);
	}

	/**
	 * Closes ({@link IFluidClientDebugger.dispose | disposes}) a registered client debugger associated with the
	 * provided Container ID.
	 */
	public closeDebugger(containerId: string): void {
		if (this.registeredDebuggers.has(containerId)) {
			const clientDebugger = this.registeredDebuggers.get(containerId);
			if (clientDebugger === undefined) {
				console.warn(
					`No active client debugger associated with container ID "${containerId}" was found.`,
				);
			} else {
				clientDebugger.dispose();
				this.registeredDebuggers.delete(containerId);
				this.emit("debuggerClosed", containerId);
			}
		} else {
			console.warn(`Fluid Client debugger never been registered.`);
		}
	}

	/**
	 * Gets the registered client debugger associated with the provided Container ID if one is registered.
	 * @returns the client debugger or undefined if not found.
	 */
	public getRegisteredDebuggers(): Map<string, IFluidClientDebugger> {
		return this.registeredDebuggers;
	}
}

/**
 * Initializes a {@link IFluidClientDebugger} from the provided properties, binding it to the global context.
 *
 * @remarks
 *
 * If there is an existing debugger session associated with the provided {@link FluidClientDebuggerProps.containerId},
 * the existing debugger session will be closed, and a new one will be generated from the provided props.
 *
 * @public
 */
export function initializeFluidClientDebugger(props: FluidClientDebuggerProps): void {
	getDebuggerRegistry().initializeDebugger(props);
}

/**
 * Closes ({@link IFluidClientDebugger.dispose | disposes}) a registered client debugger associated with the
 * provided Container ID.
 *
 * @public
 */
export function closeFluidClientDebugger(containerId: string): void {
	getDebuggerRegistry().closeDebugger(containerId);
}

/**
 * Gets the registered client debugger associated with the provided Container ID if one is registered.
 *
 * @remarks Will return `undefined` if no such debugger is registered.
 *
 * @internal
 */
export function getFluidClientDebugger(containerId: string): IFluidClientDebugger | undefined {
	const debuggerRegistry = getDebuggerRegistry().getRegisteredDebuggers();
	return debuggerRegistry.get(containerId);
}

/**
 * Gets all registered client debuggers from the registry.
 *
 * @internal
 */
export function getFluidClientDebuggers(): IFluidClientDebugger[] {
	const debuggerRegistry = getDebuggerRegistry();

	const clientDebuggers: IFluidClientDebugger[] = [];
	for (const [, clientDebugger] of debuggerRegistry.getRegisteredDebuggers()) {
		clientDebuggers.push(clientDebugger);
	}

	return clientDebuggers;
}

/**
 * Gets the debugger registry from the window. Initializes it if one does not yet exist.
 *
 * @throws Throws an error if initialization / binding to the window object fails.
 *
 * @internal
 */
export function getDebuggerRegistry(): DebuggerRegistry {
	if (globalThis.fluidClientDebuggersRegistry === undefined) {
		// If no client debuggers have been bound, initialize list
		globalThis.fluidClientDebuggersRegistry = new DebuggerRegistry();
	}

	const debuggerRegistry = globalThis.fluidClientDebuggersRegistry as DebuggerRegistry;

	if (debuggerRegistry === undefined) {
		throw new Error("Fluid Client debugger registry initialization failed.");
	}

	return debuggerRegistry;
}

/**
 * Clears the debugger registry, disposing of any remaining debugger objects.
 *
 * @internal
 */
export function clearDebuggerRegistry(): void {
	const debuggerRegistry = globalThis.fluidClientDebuggers as Map<string, IFluidClientDebugger>;
	if (debuggerRegistry !== undefined) {
		for (const [, clientDebugger] of debuggerRegistry) {
			if (clientDebugger.disposed) {
				console.warn(`Fluid Client debugger has already been disposed.`);
			} else {
				clientDebugger.dispose();
			}
		}
	}

	globalThis.fluidClientDebuggers = undefined;
}
