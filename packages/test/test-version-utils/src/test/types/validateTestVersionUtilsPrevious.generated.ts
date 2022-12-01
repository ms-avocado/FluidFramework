/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */
/*
 * THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
 * Generated by fluid-type-validator in @fluidframework/build-tools.
 */
import * as old from "@fluidframework/test-version-utils-previous";
import * as current from "../../index";

type TypeOnly<T> = {
    [P in keyof T]: TypeOnly<T[P]>;
};

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "TypeAliasDeclaration_DescribeCompat": {"forwardCompat": false}
*/
declare function get_old_TypeAliasDeclaration_DescribeCompat():
    TypeOnly<old.DescribeCompat>;
declare function use_current_TypeAliasDeclaration_DescribeCompat(
    use: TypeOnly<current.DescribeCompat>);
use_current_TypeAliasDeclaration_DescribeCompat(
    get_old_TypeAliasDeclaration_DescribeCompat());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "TypeAliasDeclaration_DescribeCompat": {"backCompat": false}
*/
declare function get_current_TypeAliasDeclaration_DescribeCompat():
    TypeOnly<current.DescribeCompat>;
declare function use_old_TypeAliasDeclaration_DescribeCompat(
    use: TypeOnly<old.DescribeCompat>);
use_old_TypeAliasDeclaration_DescribeCompat(
    get_current_TypeAliasDeclaration_DescribeCompat());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "TypeAliasDeclaration_DescribeCompatSuite": {"forwardCompat": false}
*/
declare function get_old_TypeAliasDeclaration_DescribeCompatSuite():
    TypeOnly<old.DescribeCompatSuite>;
declare function use_current_TypeAliasDeclaration_DescribeCompatSuite(
    use: TypeOnly<current.DescribeCompatSuite>);
use_current_TypeAliasDeclaration_DescribeCompatSuite(
    get_old_TypeAliasDeclaration_DescribeCompatSuite());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "TypeAliasDeclaration_DescribeCompatSuite": {"backCompat": false}
*/
declare function get_current_TypeAliasDeclaration_DescribeCompatSuite():
    TypeOnly<current.DescribeCompatSuite>;
declare function use_old_TypeAliasDeclaration_DescribeCompatSuite(
    use: TypeOnly<old.DescribeCompatSuite>);
use_old_TypeAliasDeclaration_DescribeCompatSuite(
    get_current_TypeAliasDeclaration_DescribeCompatSuite());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_describeFullCompat": {"forwardCompat": false}
*/
declare function get_old_VariableDeclaration_describeFullCompat():
    TypeOnly<typeof old.describeFullCompat>;
declare function use_current_VariableDeclaration_describeFullCompat(
    use: TypeOnly<typeof current.describeFullCompat>);
use_current_VariableDeclaration_describeFullCompat(
    get_old_VariableDeclaration_describeFullCompat());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_describeFullCompat": {"backCompat": false}
*/
declare function get_current_VariableDeclaration_describeFullCompat():
    TypeOnly<typeof current.describeFullCompat>;
declare function use_old_VariableDeclaration_describeFullCompat(
    use: TypeOnly<typeof old.describeFullCompat>);
use_old_VariableDeclaration_describeFullCompat(
    get_current_VariableDeclaration_describeFullCompat());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_describeLoaderCompat": {"forwardCompat": false}
*/
declare function get_old_VariableDeclaration_describeLoaderCompat():
    TypeOnly<typeof old.describeLoaderCompat>;
declare function use_current_VariableDeclaration_describeLoaderCompat(
    use: TypeOnly<typeof current.describeLoaderCompat>);
use_current_VariableDeclaration_describeLoaderCompat(
    get_old_VariableDeclaration_describeLoaderCompat());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_describeLoaderCompat": {"backCompat": false}
*/
declare function get_current_VariableDeclaration_describeLoaderCompat():
    TypeOnly<typeof current.describeLoaderCompat>;
declare function use_old_VariableDeclaration_describeLoaderCompat(
    use: TypeOnly<typeof old.describeLoaderCompat>);
use_old_VariableDeclaration_describeLoaderCompat(
    get_current_VariableDeclaration_describeLoaderCompat());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_describeNoCompat": {"forwardCompat": false}
*/
declare function get_old_VariableDeclaration_describeNoCompat():
    TypeOnly<typeof old.describeNoCompat>;
declare function use_current_VariableDeclaration_describeNoCompat(
    use: TypeOnly<typeof current.describeNoCompat>);
use_current_VariableDeclaration_describeNoCompat(
    get_old_VariableDeclaration_describeNoCompat());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_describeNoCompat": {"backCompat": false}
*/
declare function get_current_VariableDeclaration_describeNoCompat():
    TypeOnly<typeof current.describeNoCompat>;
declare function use_old_VariableDeclaration_describeNoCompat(
    use: TypeOnly<typeof old.describeNoCompat>);
use_old_VariableDeclaration_describeNoCompat(
    get_current_VariableDeclaration_describeNoCompat());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_ensurePackageInstalled": {"forwardCompat": false}
*/
declare function get_old_VariableDeclaration_ensurePackageInstalled():
    TypeOnly<typeof old.ensurePackageInstalled>;
declare function use_current_VariableDeclaration_ensurePackageInstalled(
    use: TypeOnly<typeof current.ensurePackageInstalled>);
use_current_VariableDeclaration_ensurePackageInstalled(
    get_old_VariableDeclaration_ensurePackageInstalled());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_ensurePackageInstalled": {"backCompat": false}
*/
declare function get_current_VariableDeclaration_ensurePackageInstalled():
    TypeOnly<typeof current.ensurePackageInstalled>;
declare function use_old_VariableDeclaration_ensurePackageInstalled(
    use: TypeOnly<typeof old.ensurePackageInstalled>);
use_old_VariableDeclaration_ensurePackageInstalled(
    get_current_VariableDeclaration_ensurePackageInstalled());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "TypeAliasDeclaration_ExpectedEvents": {"forwardCompat": false}
*/
declare function get_old_TypeAliasDeclaration_ExpectedEvents():
    TypeOnly<old.ExpectedEvents>;
declare function use_current_TypeAliasDeclaration_ExpectedEvents(
    use: TypeOnly<current.ExpectedEvents>);
use_current_TypeAliasDeclaration_ExpectedEvents(
    get_old_TypeAliasDeclaration_ExpectedEvents());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "TypeAliasDeclaration_ExpectedEvents": {"backCompat": false}
*/
declare function get_current_TypeAliasDeclaration_ExpectedEvents():
    TypeOnly<current.ExpectedEvents>;
declare function use_old_TypeAliasDeclaration_ExpectedEvents(
    use: TypeOnly<old.ExpectedEvents>);
use_old_TypeAliasDeclaration_ExpectedEvents(
    get_current_TypeAliasDeclaration_ExpectedEvents());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "TypeAliasDeclaration_ExpectsTest": {"forwardCompat": false}
*/
declare function get_old_TypeAliasDeclaration_ExpectsTest():
    TypeOnly<old.ExpectsTest>;
declare function use_current_TypeAliasDeclaration_ExpectsTest(
    use: TypeOnly<current.ExpectsTest>);
use_current_TypeAliasDeclaration_ExpectsTest(
    get_old_TypeAliasDeclaration_ExpectsTest());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "TypeAliasDeclaration_ExpectsTest": {"backCompat": false}
*/
declare function get_current_TypeAliasDeclaration_ExpectsTest():
    TypeOnly<current.ExpectsTest>;
declare function use_old_TypeAliasDeclaration_ExpectsTest(
    use: TypeOnly<old.ExpectsTest>);
use_old_TypeAliasDeclaration_ExpectsTest(
    get_current_TypeAliasDeclaration_ExpectsTest());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_getContainerRuntimeApi": {"forwardCompat": false}
*/
declare function get_old_FunctionDeclaration_getContainerRuntimeApi():
    TypeOnly<typeof old.getContainerRuntimeApi>;
declare function use_current_FunctionDeclaration_getContainerRuntimeApi(
    use: TypeOnly<typeof current.getContainerRuntimeApi>);
use_current_FunctionDeclaration_getContainerRuntimeApi(
    get_old_FunctionDeclaration_getContainerRuntimeApi());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_getContainerRuntimeApi": {"backCompat": false}
*/
declare function get_current_FunctionDeclaration_getContainerRuntimeApi():
    TypeOnly<typeof current.getContainerRuntimeApi>;
declare function use_old_FunctionDeclaration_getContainerRuntimeApi(
    use: TypeOnly<typeof old.getContainerRuntimeApi>);
use_old_FunctionDeclaration_getContainerRuntimeApi(
    get_current_FunctionDeclaration_getContainerRuntimeApi());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_getDataRuntimeApi": {"forwardCompat": false}
*/
declare function get_old_FunctionDeclaration_getDataRuntimeApi():
    TypeOnly<typeof old.getDataRuntimeApi>;
declare function use_current_FunctionDeclaration_getDataRuntimeApi(
    use: TypeOnly<typeof current.getDataRuntimeApi>);
use_current_FunctionDeclaration_getDataRuntimeApi(
    get_old_FunctionDeclaration_getDataRuntimeApi());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_getDataRuntimeApi": {"backCompat": false}
*/
declare function get_current_FunctionDeclaration_getDataRuntimeApi():
    TypeOnly<typeof current.getDataRuntimeApi>;
declare function use_old_FunctionDeclaration_getDataRuntimeApi(
    use: TypeOnly<typeof old.getDataRuntimeApi>);
use_old_FunctionDeclaration_getDataRuntimeApi(
    get_current_FunctionDeclaration_getDataRuntimeApi());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_getDataStoreFactory": {"forwardCompat": false}
*/
declare function get_old_VariableDeclaration_getDataStoreFactory():
    TypeOnly<typeof old.getDataStoreFactory>;
declare function use_current_VariableDeclaration_getDataStoreFactory(
    use: TypeOnly<typeof current.getDataStoreFactory>);
use_current_VariableDeclaration_getDataStoreFactory(
    get_old_VariableDeclaration_getDataStoreFactory());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_getDataStoreFactory": {"backCompat": false}
*/
declare function get_current_VariableDeclaration_getDataStoreFactory():
    TypeOnly<typeof current.getDataStoreFactory>;
declare function use_old_VariableDeclaration_getDataStoreFactory(
    use: TypeOnly<typeof old.getDataStoreFactory>);
use_old_VariableDeclaration_getDataStoreFactory(
    get_current_VariableDeclaration_getDataStoreFactory());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_getDriverApi": {"forwardCompat": false}
*/
declare function get_old_FunctionDeclaration_getDriverApi():
    TypeOnly<typeof old.getDriverApi>;
declare function use_current_FunctionDeclaration_getDriverApi(
    use: TypeOnly<typeof current.getDriverApi>);
use_current_FunctionDeclaration_getDriverApi(
    get_old_FunctionDeclaration_getDriverApi());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_getDriverApi": {"backCompat": false}
*/
declare function get_current_FunctionDeclaration_getDriverApi():
    TypeOnly<typeof current.getDriverApi>;
declare function use_old_FunctionDeclaration_getDriverApi(
    use: TypeOnly<typeof old.getDriverApi>);
use_old_FunctionDeclaration_getDriverApi(
    get_current_FunctionDeclaration_getDriverApi());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_getLoaderApi": {"forwardCompat": false}
*/
declare function get_old_FunctionDeclaration_getLoaderApi():
    TypeOnly<typeof old.getLoaderApi>;
declare function use_current_FunctionDeclaration_getLoaderApi(
    use: TypeOnly<typeof current.getLoaderApi>);
use_current_FunctionDeclaration_getLoaderApi(
    get_old_FunctionDeclaration_getLoaderApi());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_getLoaderApi": {"backCompat": false}
*/
declare function get_current_FunctionDeclaration_getLoaderApi():
    TypeOnly<typeof current.getLoaderApi>;
declare function use_old_FunctionDeclaration_getLoaderApi(
    use: TypeOnly<typeof old.getLoaderApi>);
use_old_FunctionDeclaration_getLoaderApi(
    get_current_FunctionDeclaration_getLoaderApi());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_getVersionedTestObjectProvider": {"forwardCompat": false}
*/
declare function get_old_FunctionDeclaration_getVersionedTestObjectProvider():
    TypeOnly<typeof old.getVersionedTestObjectProvider>;
declare function use_current_FunctionDeclaration_getVersionedTestObjectProvider(
    use: TypeOnly<typeof current.getVersionedTestObjectProvider>);
use_current_FunctionDeclaration_getVersionedTestObjectProvider(
    get_old_FunctionDeclaration_getVersionedTestObjectProvider());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_getVersionedTestObjectProvider": {"backCompat": false}
*/
declare function get_current_FunctionDeclaration_getVersionedTestObjectProvider():
    TypeOnly<typeof current.getVersionedTestObjectProvider>;
declare function use_old_FunctionDeclaration_getVersionedTestObjectProvider(
    use: TypeOnly<typeof old.getVersionedTestObjectProvider>);
use_old_FunctionDeclaration_getVersionedTestObjectProvider(
    get_current_FunctionDeclaration_getVersionedTestObjectProvider());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ITestDataObject": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_ITestDataObject():
    TypeOnly<old.ITestDataObject>;
declare function use_current_InterfaceDeclaration_ITestDataObject(
    use: TypeOnly<current.ITestDataObject>);
use_current_InterfaceDeclaration_ITestDataObject(
    get_old_InterfaceDeclaration_ITestDataObject());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ITestDataObject": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_ITestDataObject():
    TypeOnly<current.ITestDataObject>;
declare function use_old_InterfaceDeclaration_ITestDataObject(
    use: TypeOnly<old.ITestDataObject>);
use_old_InterfaceDeclaration_ITestDataObject(
    get_current_InterfaceDeclaration_ITestDataObject());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ITestObjectProviderOptions": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_ITestObjectProviderOptions():
    TypeOnly<old.ITestObjectProviderOptions>;
declare function use_current_InterfaceDeclaration_ITestObjectProviderOptions(
    use: TypeOnly<current.ITestObjectProviderOptions>);
use_current_InterfaceDeclaration_ITestObjectProviderOptions(
    get_old_InterfaceDeclaration_ITestObjectProviderOptions());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ITestObjectProviderOptions": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_ITestObjectProviderOptions():
    TypeOnly<current.ITestObjectProviderOptions>;
declare function use_old_InterfaceDeclaration_ITestObjectProviderOptions(
    use: TypeOnly<old.ITestObjectProviderOptions>);
use_old_InterfaceDeclaration_ITestObjectProviderOptions(
    get_current_InterfaceDeclaration_ITestObjectProviderOptions());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_itExpects": {"forwardCompat": false}
*/
declare function get_old_VariableDeclaration_itExpects():
    TypeOnly<typeof old.itExpects>;
declare function use_current_VariableDeclaration_itExpects(
    use: TypeOnly<typeof current.itExpects>);
use_current_VariableDeclaration_itExpects(
    get_old_VariableDeclaration_itExpects());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_itExpects": {"backCompat": false}
*/
declare function get_current_VariableDeclaration_itExpects():
    TypeOnly<typeof current.itExpects>;
declare function use_old_VariableDeclaration_itExpects(
    use: TypeOnly<typeof old.itExpects>);
use_old_VariableDeclaration_itExpects(
    get_current_VariableDeclaration_itExpects());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_mochaGlobalSetup": {"forwardCompat": false}
*/
declare function get_old_FunctionDeclaration_mochaGlobalSetup():
    TypeOnly<typeof old.mochaGlobalSetup>;
declare function use_current_FunctionDeclaration_mochaGlobalSetup(
    use: TypeOnly<typeof current.mochaGlobalSetup>);
use_current_FunctionDeclaration_mochaGlobalSetup(
    get_old_FunctionDeclaration_mochaGlobalSetup());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_mochaGlobalSetup": {"backCompat": false}
*/
declare function get_current_FunctionDeclaration_mochaGlobalSetup():
    TypeOnly<typeof current.mochaGlobalSetup>;
declare function use_old_FunctionDeclaration_mochaGlobalSetup(
    use: TypeOnly<typeof old.mochaGlobalSetup>);
use_old_FunctionDeclaration_mochaGlobalSetup(
    get_current_FunctionDeclaration_mochaGlobalSetup());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_TestDataObjectType": {"forwardCompat": false}
*/
declare function get_old_VariableDeclaration_TestDataObjectType():
    TypeOnly<typeof old.TestDataObjectType>;
declare function use_current_VariableDeclaration_TestDataObjectType(
    use: TypeOnly<typeof current.TestDataObjectType>);
use_current_VariableDeclaration_TestDataObjectType(
    get_old_VariableDeclaration_TestDataObjectType());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_TestDataObjectType": {"backCompat": false}
*/
declare function get_current_VariableDeclaration_TestDataObjectType():
    TypeOnly<typeof current.TestDataObjectType>;
declare function use_old_VariableDeclaration_TestDataObjectType(
    use: TypeOnly<typeof old.TestDataObjectType>);
use_old_VariableDeclaration_TestDataObjectType(
    get_current_VariableDeclaration_TestDataObjectType());