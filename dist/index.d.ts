/**
 * Trak-iT API Object Model.
 * {@link https://github.com/trakitwireless/trakit-ts-objects|Object definition.}
 * All of the Trak-iT APIs use the same object definitions. Use this package in your TypeScript or JavaScript project.
 * Last updated on Friday December 19, 2025
 * @copyright Trak-iT Wireless Inc. 2025
 */
import { Contact } from "./Accounts/Contact";
import { Machine } from "./Accounts/Machine";
import { NotificationMethod } from "./Accounts/NotificationMethod";
import { compute, computeAll, computeAllComplex, computeAllSimple, computeComplex, computeSimple, computeSimpleLevels, findAllEscalations, findAllLabelEscalations, findAnyComplex, findComplex, findComplexLevel, findEscalations, findLabelEscalation, findSimple, findSimpleLevel, getComplexLevel, getSimpleLevel, hasAnyComplex, hasComplex, hasSimple } from "./Accounts/Permissions/Authorizer";
import { Permission } from "./Accounts/Permissions/Permission";
import { PermissionEscalation } from "./Accounts/Permissions/PermissionEscalation";
import { PermissionEscalationState } from "./Accounts/Permissions/PermissionEscalationState";
import { PermissionEscalationType } from "./Accounts/Permissions/PermissionEscalationType";
import { PermissionLevel } from "./Accounts/Permissions/PermissionLevel";
import { PermissionMethod } from "./Accounts/Permissions/PermissionMethod";
import { PermissionType } from "./Accounts/Permissions/PermissionType";
import { Session } from "./Accounts/Session";
import { SessionStatus } from "./Accounts/SessionStatus";
import { SystemsOfUnits } from "./Accounts/SystemsOfUnits";
import { User } from "./Accounts/User";
import { UserAdvanced } from "./Accounts/UserAdvanced";
import { UserAuthentication } from "./Accounts/UserAuthentication";
import { UserGeneral } from "./Accounts/UserGeneral";
import { UserGroup } from "./Accounts/UserGroup";
import { UserNotifications } from "./Accounts/UserNotifications";
import { UserState } from "./Accounts/UserState";
import { Base } from "./API/Base";
import { BaseComponent } from "./API/BaseComponent";
import { BaseCompound } from "./API/BaseCompound";
import { CODIFY, HIGHLIGHT } from "./API/Codifier";
import { PASSWORD_DECODE, PASSWORD_ENCODE } from "./API/Encoding";
import { FILESIZE_HELPER, NUMBER_GROUPS } from "./API/Files";
import { CAPITALIZE, DATE, DOUGLASPEUCKER, ID, IS_AN, IS_COMPOUNDED, IS_NOTHING, JSON_TO_MAP, JSON_TO_MAP_PREDICATE, MAP_TO_JSON, MAP_TO_JSON_PREDICATE, PHONE_PARSE, PLURALIZE, PYTHAGORA, ROUND_TO, SINGULARIZE } from "./API/Functions";
import { GEOFENCE_AREA, GEOFENCE_CONTAINS, GEOFENCE_PEUCKER, GEOFENCE_WIDEST, LATITUDE_NORMALIZED, LATLNG_ANGLE, LATLNG_DISTANCE, LATLNG_DISTANCE_VINCENTY, LATLNG_GREAT_CIRCLE, LATLNG_MIDPOINT, LATLNG_TRANSLATE, LONGITUDE_NORMALIZED, ROUTE_DECODE, ROUTE_ENCODE, ROUTE_LENGTH, ROUTE_PEUCKER } from "./API/Geography/Functions";
import { ILatLng, ILatLngBounds, IPosition, IStreetAddress } from "./API/Geography/Interfaces";
import { LatLng } from "./API/Geography/LatLng";
import { LatLngBounds } from "./API/Geography/LatLngBounds";
import { Position } from "./API/Geography/Position";
import { StreetAddress } from "./API/Geography/StreetAddress";
import { PATH_LENGTH, PATH_ORTHOGONAL, PATH_PEUCKER, POINT_ANGLE, POINT_DISTANCE, POINT_VECTOR, POLY_AREA, POLY_CONTAINS, POLY_PEUCKER, POLY_WRAPPER, RADIAL_AREA, RADIAL_BADOIU_CLARKSON, RADIAL_CIRCUMFERENCE, RADIAL_OVERLAP_RECTANGLE } from "./API/Geometry/Functions";
import { IPoint, IRadial, IRectangle, ISize } from "./API/Geometry/Interfaces";
import { Point } from "./API/Geometry/Point";
import { Radial } from "./API/Geometry/Radial";
import { Rectangle } from "./API/Geometry/Rectangle";
import { Size } from "./API/Geometry/Size";
import { GUID } from "./API/Guid";
import { IAmCompany } from "./API/Interfaces/IAmCompany";
import { IBelongAsset } from "./API/Interfaces/IBelongAsset";
import { IBelongBillingProfile } from "./API/Interfaces/IBelongBillingProfile";
import { IBelongCompany } from "./API/Interfaces/IBelongCompany";
import { IDeserializable } from "./API/Interfaces/IDeserializable";
import { IEnabled } from "./API/Interfaces/IEnabled";
import { IFileSize } from "./API/Interfaces/IFileSize";
import { IGlobal } from "./API/Interfaces/IGlobal";
import { IHavePermissions } from "./API/Interfaces/IHavePermissions";
import { IHavePreferences } from "./API/Interfaces/IHavePreferences";
import { IIconic } from "./API/Interfaces/IIconic";
import { IIdUlong } from "./API/Interfaces/IIdUlong";
import { ILabelled } from "./API/Interfaces/ILabelled";
import { INamed } from "./API/Interfaces/INamed";
import { IPictured } from "./API/Interfaces/IPictured";
import { IRequestable } from "./API/Interfaces/IRequestable";
import { ISerializable } from "./API/Interfaces/ISerializable";
import { ISuspendable } from "./API/Interfaces/ISuspendable";
import { IVisual } from "./API/Interfaces/IVisual";
import { SearchPattern } from "./API/SearchPattern";
import { TimeSpan, TIMESPAN_PARSE, TIMESPAN_STRINGIFY } from "./API/TimeSpan";
import { Timezone } from "./API/Timezone";
import { TIMEZONE_FIND } from "./API/Timezones";
import { byte, codified, colour, datetime, datetimetemplate, double, email, expression, guid, int, ipv4, JsonArray, JsonObject, JsonValue, long, nothing, phone, polyline, sbyte, short, single, timespan, uint, ulong, url, ushort } from "./API/Types";
import { Asset } from "./Assets/Asset";
import { AssetAdvanced } from "./Assets/AssetAdvanced";
import { AssetAttribute } from "./Assets/AssetAttribute";
import { AssetDispatch } from "./Assets/AssetDispatch";
import { AssetGeneral } from "./Assets/AssetGeneral";
import { AssetPlaceStatus } from "./Assets/AssetPlaceStatus";
import { AssetPlaceStatusType } from "./Assets/AssetPlaceStatusType";
import { AssetType } from "./Assets/AssetType";
import { Behaviour } from "./Behaviours/Behaviour";
import { BehaviourLog } from "./Behaviours/BehaviourLog";
import { BehaviourLogType } from "./Behaviours/BehaviourLogType";
import { BehaviourParameter } from "./Behaviours/BehaviourParameter";
import { BehaviourParameterType } from "./Behaviours/BehaviourParameterType";
import { BehaviourScript } from "./Behaviours/BehaviourScript";
import { BillingCurrency } from "./Billing/BillingCurrency";
import { BillingCycle } from "./Billing/BillingCycle";
import { BillingProfile } from "./Billing/BillingProfile";
import { BillableHostingLicense } from "./Billing/Hosting/BillableHostingLicense";
import { BillableHostingLicenseType } from "./Billing/Hosting/BillableHostingLicenseType";
import { BillableHostingRule } from "./Billing/Hosting/BillableHostingRule";
import { BillableHostingType } from "./Billing/Hosting/BillableHostingType";
import { BillingReport } from "./Billing/Report/BillingReport";
import { BillingReportBreakdown } from "./Billing/Report/BillingReportBreakdown";
import { BillingReportHostingSummary } from "./Billing/Report/BillingReportHostingSummary";
import { BillingReportLicenseBreakdown } from "./Billing/Report/BillingReportLicenseBreakdown";
import { BillingReportServiceBreakdown } from "./Billing/Report/BillingReportServiceBreakdown";
import { BillingReportStatus } from "./Billing/Report/BillingReportStatus";
import { BillingReportSummary } from "./Billing/Report/BillingReportSummary";
import { ColourStyle } from "./Companies/ColourStyle";
import { Company } from "./Companies/Company";
import { CompanyDirectory } from "./Companies/CompanyDirectory";
import { CompanyGeneral } from "./Companies/CompanyGeneral";
import { CompanyPolicy } from "./Companies/CompanyPolicy";
import { CompanyReseller } from "./Companies/CompanyReseller";
import { CompanyStyle } from "./Companies/CompanyStyle";
import { LabelStyle } from "./Companies/LabelStyle";
import { MultiFactorEnforcement } from "./Companies/MultiFactorEnforcement";
import { MultiFactorPolicy } from "./Companies/MultiFactorPolicy";
import { MultiFactorType } from "./Companies/MultiFactorType";
import { NotificationServerEmail } from "./Companies/NotificationServerEmail";
import { NotificationServerSms } from "./Companies/NotificationServerSms";
import { PasswordExpiryMode } from "./Companies/PasswordExpiryMode";
import { PasswordPolicy } from "./Companies/PasswordPolicy";
import { SessionMultiUser } from "./Companies/SessionMultiUser";
import { SessionPolicy } from "./Companies/SessionPolicy";
import { SsoEnforcement } from "./Companies/SsoEnforcement";
import { SsoIdentityProvider } from "./Companies/SsoIdentityProvider";
import { SsoPolicy } from "./Companies/SsoPolicy";
import { DispatchDirection } from "./Dispatch/DispatchDirection";
import { DispatchJob } from "./Dispatch/DispatchJob";
import { DispatchJobPriority } from "./Dispatch/DispatchJobPriority";
import { DispatchStep } from "./Dispatch/DispatchStep";
import { DispatchStepState } from "./Dispatch/DispatchStepState";
import { DispatchStepStatus } from "./Dispatch/DispatchStepStatus";
import { DispatchTask } from "./Dispatch/DispatchTask";
import { DispatchTaskStatus } from "./Dispatch/DispatchTaskStatus";
import { Document } from "./Hosting/Document";
import { FormFieldAttachments } from "./Hosting/Fields/FormFieldAttachments";
import { FormFieldBase } from "./Hosting/Fields/FormFieldBase";
import "./Hosting/Fields/FormFieldBase_fromJSON";
import { FormFieldBoolean } from "./Hosting/Fields/FormFieldBoolean";
import { FormFieldChoice } from "./Hosting/Fields/FormFieldChoice";
import { FormFieldDate } from "./Hosting/Fields/FormFieldDate";
import { FormFieldNumeric } from "./Hosting/Fields/FormFieldNumeric";
import { FormFieldNumericSize } from "./Hosting/Fields/FormFieldNumericSize";
import { FormFieldSignature } from "./Hosting/Fields/FormFieldSignature";
import { FormFieldText } from "./Hosting/Fields/FormFieldText";
import { FormFieldTime } from "./Hosting/Fields/FormFieldTime";
import { FormFieldTimezone } from "./Hosting/Fields/FormFieldTimezone";
import { FormFieldType } from "./Hosting/FormFieldType";
import { FormResult } from "./Hosting/FormResult";
import { FormTemplate } from "./Hosting/FormTemplate";
import { Dashcam } from "./Images/Dashcam";
import { DashcamBase } from "./Images/DashcamBase";
import { DashcamLive } from "./Images/DashcamLive";
import { DashcamMediaType } from "./Images/DashcamMediaType";
import { Icon } from "./Images/Icon";
import { IconGlyph } from "./Images/IconGlyph";
import { IconLabel } from "./Images/IconLabel";
import { IconLayer } from "./Images/IconLayer";
import { Picture } from "./Images/Picture";
import { MaintenanceInterval } from "./Maintenance/MaintenanceInterval";
import { MaintenanceJob } from "./Maintenance/MaintenanceJob";
import { MaintenanceJobStatus } from "./Maintenance/MaintenanceJobStatus";
import { MaintenanceSchedule } from "./Maintenance/MaintenanceSchedule";
import { AlertPriority } from "./Messaging/AlertPriority";
import { AssetAlert } from "./Messaging/AssetAlert";
import { AssetMessage } from "./Messaging/AssetMessage";
import { MessageFolder } from "./Messaging/MessageFolder";
import { MessageStatus } from "./Messaging/MessageStatus";
import { MessageType } from "./Messaging/MessageType";
import { Place } from "./Places/Place";
import { PlaceType } from "./Places/PlaceType";
import { ProviderConfig } from "./Providers/Config/ProviderConfig";
import { ProviderRegistration } from "./Providers/Config/ProviderRegistration";
import { ProviderScript } from "./Providers/Config/ProviderScript";
import { ProviderScriptBlock } from "./Providers/Config/ProviderScriptBlock";
import { ProviderScriptParameter } from "./Providers/Config/ProviderScriptParameter";
import { ProviderScriptParameterType } from "./Providers/Config/ProviderScriptParameterType";
import { ProviderConfiguration } from "./Providers/Configuration/ProviderConfiguration";
import { ProviderConfigurationNode } from "./Providers/Configuration/ProviderConfigurationNode";
import { ProviderConfigurationType } from "./Providers/Configuration/ProviderConfigurationType";
import { ProviderGeofenceBase } from "./Providers/Configuration/ProviderGeofenceBase";
import "./Providers/Configuration/ProviderGeofenceBase_fromJSON";
import { ProviderGeofenceCircular } from "./Providers/Configuration/ProviderGeofenceCircular";
import { ProviderGeofencePoint } from "./Providers/Configuration/ProviderGeofencePoint";
import { ProviderGeofencePolygon } from "./Providers/Configuration/ProviderGeofencePolygon";
import { ProviderGeofenceRectangle } from "./Providers/Configuration/ProviderGeofenceRectangle";
import { Provider } from "./Providers/Provider";
import { ProviderAdvanced } from "./Providers/ProviderAdvanced";
import { ProviderCommand } from "./Providers/ProviderCommand";
import { ProviderCommandStatus } from "./Providers/ProviderCommandStatus";
import { ProviderCommandType } from "./Providers/ProviderCommandType";
import { ProviderControl } from "./Providers/ProviderControl";
import { ProviderData } from "./Providers/ProviderData";
import { ProviderGeneral } from "./Providers/ProviderGeneral";
import { ProviderType } from "./Providers/ProviderType";
import { ReportBreakdown } from "./Reports/ReportBreakdown";
import "./Reports/ReportBreakdown_fromJSON";
import { ReportBreakdownJob } from "./Reports/ReportBreakdownJob";
import { ReportBreakdownMessage } from "./Reports/ReportBreakdownMessage";
import { ReportBreakdownTask } from "./Reports/ReportBreakdownTask";
import { ReportFilterMode } from "./Reports/ReportFilterMode";
import { ReportNotifications } from "./Reports/ReportNotifications";
import { ReportOptions } from "./Reports/ReportOptions";
import { ReportParameter } from "./Reports/ReportParameter";
import { ReportParameterType } from "./Reports/ReportParameterType";
import { ReportRecurrence } from "./Reports/ReportRecurrence";
import { ReportRecurrenceType } from "./Reports/ReportRecurrenceType";
import { ReportResult } from "./Reports/ReportResult";
import { ReportResultData } from "./Reports/ReportResultData";
import { ReportSchedule } from "./Reports/ReportSchedule";
import { ReportScorecard } from "./Reports/ReportScorecard";
import { ReportScorecardParameter } from "./Reports/ReportScorecardParameter";
import { ReportScorecardRules } from "./Reports/ReportScorecardRules";
import { ReportStatus } from "./Reports/ReportStatus";
import { ReportSummary } from "./Reports/ReportSummary";
import { ReportSummaryReason } from "./Reports/ReportSummaryReason";
import { ReportTemplate } from "./Reports/ReportTemplate";
import { ReportTotal } from "./Reports/ReportTotal";
import { ReportType } from "./Reports/ReportType";
/**
 * Version number for this release.
 */
export declare const version = "0.1.4";
/**
 * The names of all main object types in the Trak-iT Object Model.
 */
export type SyncName = "Company" | "CompanyGeneral" | "CompanyStyle" | "CompanyDirectory" | "CompanyPolicy" | "CompanyReseller" | "Contact" | "Machine" | "Session" | "User" | "UserGeneral" | "UserAdvanced" | "UserAuthentication" | "UserState" | "UserGroup" | "Asset" | "AssetGeneral" | "AssetAdvanced" | "AssetDispatch" | "AssetAlert" | "AssetMessage" | "Behaviour" | "BehaviourScript" | "BehaviourLog" | "BillableHostingLicense" | "BillableHostingRule" | "BillingProfile" | "BillingReport" | "DispatchJob" | "DispatchTask" | "Document" | "FormResult" | "FormTemplate" | "Dashcam" | "Icon" | "Picture" | "MaintenanceSchedule" | "MaintenanceJob" | "Place" | "Provider" | "ProviderGeneral" | "ProviderAdvanced" | "ProviderControl" | "ProviderScript" | "ProviderConfig" | "ProviderConfigurationType" | "ProviderConfiguration" | "ProviderRegistration" | "ReportTemplate" | "ReportSchedule" | "ReportResult";
/**
 * A mapping of all main object types in the Trak-iT Object Model to their class constructors.
 */
export declare const classes: {
    [key in SyncName]: {
        new (): IRequestable;
    };
};
/**
 * Local Maps that store various instances of objects.
 * The storage is used by the sync system.
 */
export declare const storage: {
    [key in SyncName]: Map<ulong | guid | email | codified | string, IRequestable>;
};
/**
 * Common types used throughout the application.
 * These are simply numbers or strings of a specific format.
 */
export type { JsonArray, JsonObject, JsonValue, byte, double, int, long, phone, sbyte, short, single, uint, ulong, ushort, codified, colour, datetime, datetimetemplate, email, expression, guid, ipv4, nothing, polyline, timespan, url, IAmCompany, IBelongBillingProfile, IBelongCompany, IBelongAsset, IDeserializable, IEnabled, IFileSize, IGlobal, IHavePermissions, IHavePreferences, IIconic, IIdUlong, ILabelled, INamed, IPictured, IRequestable, ISerializable, ISuspendable, IVisual, };
/**
 * A group of utility functions for common tasks like dealing with strings.
 */
export declare const utility: {
    capitalize: typeof CAPITALIZE;
    codify: typeof CODIFY;
    date: typeof DATE;
    douglasPeucker: typeof DOUGLASPEUCKER;
    fileSize: typeof FILESIZE_HELPER;
    findTimeZoneById: typeof TIMEZONE_FIND;
    guid: typeof GUID;
    highlight: typeof HIGHLIGHT;
    id: typeof ID;
    isCompounded: typeof IS_COMPOUNDED;
    isNothing: typeof IS_NOTHING;
    isntNaN: typeof IS_AN;
    numberGroups: typeof NUMBER_GROUPS;
    roundTo: typeof ROUND_TO;
    parseTime: typeof TIMESPAN_PARSE;
    phoneNumber: typeof PHONE_PARSE;
    pluralize: typeof PLURALIZE;
    singularize: typeof SINGULARIZE;
    stringifyTime: typeof TIMESPAN_STRINGIFY;
};
/**
 * A list of all supported timezones.
 */
export declare const timezones: Timezone[];
/**
 * A group of functions for converting between different measurement systems.
 */
export declare const convert: {
    fromTo: typeof import("./API/Conversion").CONVERT_FROM_TO;
    sqmToSqft: typeof import("./API/Conversion").CONVERT_SQM_TO_SQFT;
    sqftToSqm: typeof import("./API/Conversion").CONVERT_SQFT_TO_SQM;
    sqmToSqy: typeof import("./API/Conversion").CONVERT_SQM_TO_YARDS;
    yftToSqm: typeof import("./API/Conversion").CONVERT_YARDS_TO_SQM;
    sqkmToSqmi: typeof import("./API/Conversion").CONVERT_SQKM_TO_SQMI;
    sqmiToSqkm: typeof import("./API/Conversion").CONVERT_SQMI_TO_SQKM;
    haToAc: typeof import("./API/Conversion").CONVERT_HECTARE_TO_ACRE;
    acToHa: typeof import("./API/Conversion").CONVERT_ACRE_TO_HECTARE;
    kmToMi: typeof import("./API/Conversion").CONVERT_KILOMETRES_TO_MILES;
    miToKm: typeof import("./API/Conversion").CONVERT_MILES_TO_KILOMETRES;
    mToYd: typeof import("./API/Conversion").CONVERT_METRES_TO_YARDS;
    ydToM: typeof import("./API/Conversion").CONVERT_YARDS_TO_METRES;
    mToFt: typeof import("./API/Conversion").CONVERT_METRES_TO_FEET;
    ftToM: typeof import("./API/Conversion").CONVERT_FEET_TO_METRES;
    cmToIn: typeof import("./API/Conversion").CONVERT_CENTIMETRES_TO_INCHES;
    inToCm: typeof import("./API/Conversion").CONVERT_INCHES_TO_CENTIMETRES;
    mpgToL100km: typeof import("./API/Conversion").CONVERT_BETWEEN_MPGUS_AND_L100KM;
    mpgUKToL100km: typeof import("./API/Conversion").CONVERT_BETWEEN_MPGUK_AND_L100KM;
    mpkwhToKwh100kim: typeof import("./API/Conversion").CONVERT_BETWEEN_MPKWH_AND_KWH100KM;
    l100kmToMpg: typeof import("./API/Conversion").CONVERT_BETWEEN_MPGUS_AND_L100KM;
    l100kmToMpgUK: typeof import("./API/Conversion").CONVERT_BETWEEN_MPGUK_AND_L100KM;
    kwh100kimToMpkwh: typeof import("./API/Conversion").CONVERT_BETWEEN_MPKWH_AND_KWH100KM;
    kpaToPsi: typeof import("./API/Conversion").CONVERT_KPA_TO_PSI;
    psiToKpa: typeof import("./API/Conversion").CONVERT_PSI_TO_KPA;
    kphToMph: typeof import("./API/Conversion").CONVERT_KILOMETRES_TO_MILES;
    mphToKph: typeof import("./API/Conversion").CONVERT_MILES_TO_KILOMETRES;
    mpsToFtps: typeof import("./API/Conversion").CONVERT_METRES_TO_FEET;
    ftpsToMps: typeof import("./API/Conversion").CONVERT_FEET_TO_METRES;
    cmpsToInps: typeof import("./API/Conversion").CONVERT_CENTIMETRES_TO_INCHES;
    inpsToCmps: typeof import("./API/Conversion").CONVERT_INCHES_TO_CENTIMETRES;
    cToF: typeof import("./API/Conversion").CONVERT_CELCIUS_TO_FAHRENHEIT;
    fToC: typeof import("./API/Conversion").CONVERT_FAHRENHEIT_TO_CELCIUS;
    lToGal: typeof import("./API/Conversion").CONVERT_LITRES_TO_GALLONS_US;
    lToGalUK: typeof import("./API/Conversion").CONVERT_LITRES_TO_GALLONS_UK;
    galToL: typeof import("./API/Conversion").CONVERT_GALLONS_US_TO_LITRES;
    galUKToL: typeof import("./API/Conversion").CONVERT_GALLONS_UK_TO_LITRES;
    mlToFloz: typeof import("./API/Conversion").CONVERT_MILLILITRES_TO_OUNCES_US;
    mlToFlozUK: typeof import("./API/Conversion").CONVERT_MILLILITRES_TO_OUNCES_UK;
    flozToMl: typeof import("./API/Conversion").CONVERT_OUNCES_US_TO_MILLILITRES;
    flozUKToMl: typeof import("./API/Conversion").CONVERT_OUNCES_UK_TO_MILLILITRES;
    kgToLbs: typeof import("./API/Conversion").CONVERT_KG_TO_LBS;
    lbsToKg: typeof import("./API/Conversion").CONVERT_LBS_TO_KG;
    gToOz: typeof import("./API/Conversion").CONVERT_GRAM_TO_OZ;
    ozToG: typeof import("./API/Conversion").CONVERT_OZ_TO_GRAM;
    tToTon: typeof import("./API/Conversion").CONVERT_TONNE_TO_TON_US;
    tonToT: typeof import("./API/Conversion").CONVERT_TON_US_TO_TONNE;
    tToTonUK: typeof import("./API/Conversion").CONVERT_TONNE_TO_TON_UK;
    tonUKToT: typeof import("./API/Conversion").CONVERT_TON_UK_TO_TONNE;
};
/**
 * Functions for encoding and decoding device passwords.
 */
export declare const encoding: {
    toPassword: typeof PASSWORD_ENCODE;
    fromPassword: typeof PASSWORD_DECODE;
};
/**
 * Functions for converting between JSON objects using our custom serialization.
 */
export declare const serialization: {
    fromMap: typeof MAP_TO_JSON;
    fromMapPredicate: typeof MAP_TO_JSON_PREDICATE;
    toMap: typeof JSON_TO_MAP;
    toMapPredicate: typeof JSON_TO_MAP_PREDICATE;
};
/**
 * Common classes used throughout the API, and the Base classes used for synchronizable objects.
 */
export { Base, BaseComponent, BaseCompound, SearchPattern, TimeSpan, Timezone };
/**
 * Utility functions exposing algorithms for a flat plane.
 */
export declare const geometry: {
    pathLength: typeof PATH_LENGTH;
    pathOrthogonal: typeof PATH_ORTHOGONAL;
    pathReduce: typeof PATH_PEUCKER;
    pointAngle: typeof POINT_ANGLE;
    pointDistance: typeof POINT_DISTANCE;
    pointPythagora: typeof PYTHAGORA;
    pointVector: typeof POINT_VECTOR;
    polyArea: typeof POLY_AREA;
    polyContains: typeof POLY_CONTAINS;
    polyReduce: typeof POLY_PEUCKER;
    polyWrapper: typeof POLY_WRAPPER;
    radialCircumference: typeof RADIAL_CIRCUMFERENCE;
    radialArea: typeof RADIAL_AREA;
    radialSmallest: typeof RADIAL_BADOIU_CLARKSON;
    radialOverlapsRectangle: typeof RADIAL_OVERLAP_RECTANGLE;
};
export type { IPoint, IRadial, IRectangle, ISize, };
export { Point, Radial, Rectangle, Size, };
/**
 * Utility functions exposing algorithms for a WGS84/NAD83 spheroid.
 */
export declare const geography: {
    earthRadius: number;
    clampLat: typeof LATITUDE_NORMALIZED;
    clampLng: typeof LONGITUDE_NORMALIZED;
    pathLength: typeof ROUTE_LENGTH;
    pathReduce: typeof ROUTE_PEUCKER;
    pathEncode: typeof ROUTE_ENCODE;
    pathDecode: typeof ROUTE_DECODE;
    pointAngle: typeof LATLNG_ANGLE;
    pointDistance: typeof LATLNG_DISTANCE;
    pointMiddle: typeof LATLNG_MIDPOINT;
    pointOrthogonal: typeof LATLNG_GREAT_CIRCLE;
    pointTranslate: typeof LATLNG_TRANSLATE;
    pointVincenty: typeof LATLNG_DISTANCE_VINCENTY;
    polyArea: typeof GEOFENCE_AREA;
    polyContains: typeof GEOFENCE_CONTAINS;
    polyReduce: typeof GEOFENCE_PEUCKER;
    polyWidest: typeof GEOFENCE_WIDEST;
};
export type { ILatLng, ILatLngBounds, IPosition, IStreetAddress, };
export { LatLng, LatLngBounds, Position, StreetAddress, };
export { ColourStyle, Company, CompanyDirectory, CompanyGeneral, CompanyPolicy, CompanyReseller, CompanyStyle, LabelStyle, MultiFactorEnforcement, MultiFactorPolicy, MultiFactorType, NotificationServerEmail, NotificationServerSms, PasswordExpiryMode, PasswordPolicy, SessionMultiUser, SessionPolicy, SsoEnforcement, SsoIdentityProvider, SsoPolicy };
/**
 * Functions and collections for validating account permissions.
 */
export declare const authorizer: {
    computeAll: typeof computeAll;
    compute: typeof compute;
    computeAllSimple: typeof computeAllSimple;
    computeSimple: typeof computeSimple;
    computeSimpleLevels: typeof computeSimpleLevels;
    getSimpleLevel: typeof getSimpleLevel;
    hasSimple: typeof hasSimple;
    findSimple: typeof findSimple;
    findSimpleLevel: typeof findSimpleLevel;
    computeAllComplex: typeof computeAllComplex;
    computeComplex: typeof computeComplex;
    getComplexLevel: typeof getComplexLevel;
    findComplexLevel: typeof findComplexLevel;
    hasComplex: typeof hasComplex;
    findComplex: typeof findComplex;
    hasAnyComplex: typeof hasAnyComplex;
    findAnyComplex: typeof findAnyComplex;
    findAllEscalations: typeof findAllEscalations;
    findEscalations: typeof findEscalations;
    findAllLabelEscalations: typeof findAllLabelEscalations;
    findLabelEscalation: typeof findLabelEscalation;
    /**
     * A list of {@link PermissionType}s which are implied for each user's own company.
     */
    implied: readonly PermissionType[];
    /**
     * {@link PermissionType}s which do not use labels to calculate access.
     */
    simple: readonly PermissionType[];
    /**
     * The {@link PermissionType}s which are calculated using labels.
     */
    complex: readonly PermissionType[];
};
export { Contact, Machine, NotificationMethod, Permission, PermissionEscalation, PermissionEscalationState, PermissionEscalationType, PermissionLevel, PermissionMethod, PermissionType, Session, SessionStatus, SystemsOfUnits, User, UserGeneral, UserAdvanced, UserAuthentication, UserState, UserGroup, UserNotifications, };
export { Asset, AssetAdvanced, AssetAttribute, AssetDispatch, AssetGeneral, AssetPlaceStatus, AssetPlaceStatusType, AssetType, AssetAlert, AssetMessage, AlertPriority, MessageFolder, MessageStatus, MessageType, };
export { Behaviour, BehaviourLog, BehaviourLogType, BehaviourParameter, BehaviourParameterType, BehaviourScript, };
export { BillableHostingLicense, BillableHostingLicenseType, BillableHostingRule, BillableHostingType, BillingCurrency, BillingCycle, BillingProfile, BillingReport, BillingReportBreakdown, BillingReportHostingSummary, BillingReportLicenseBreakdown, BillingReportServiceBreakdown, BillingReportStatus, BillingReportSummary, };
export { DispatchDirection, DispatchJob, DispatchJobPriority, DispatchStep, DispatchStepState, DispatchStepStatus, DispatchTask, DispatchTaskStatus, };
export { Document, FormResult, FormTemplate, FormFieldType, FormFieldBase, FormFieldAttachments, FormFieldBoolean, FormFieldChoice, FormFieldDate, FormFieldNumeric, FormFieldNumericSize, FormFieldSignature, FormFieldText, FormFieldTime, FormFieldTimezone, };
export { DashcamBase, Dashcam, DashcamLive, DashcamMediaType, Icon, IconGlyph, IconLabel, IconLayer, Picture, };
export { MaintenanceSchedule, MaintenanceJob, MaintenanceJobStatus, MaintenanceInterval, };
export { Place, PlaceType, };
export { Provider, ProviderGeneral, ProviderAdvanced, ProviderControl, ProviderCommand, ProviderCommandStatus, ProviderCommandType, ProviderType, ProviderRegistration, ProviderData, ProviderScript, ProviderScriptBlock, ProviderScriptParameter, ProviderScriptParameterType, ProviderConfig, ProviderConfiguration, ProviderConfigurationNode, ProviderConfigurationType, ProviderGeofenceBase, ProviderGeofenceCircular, ProviderGeofencePoint, ProviderGeofencePolygon, ProviderGeofenceRectangle, };
export { ReportResult, ReportResultData, ReportSchedule, ReportTemplate, ReportType, ReportBreakdown, ReportBreakdownJob, ReportBreakdownMessage, ReportBreakdownTask, ReportTotal, ReportFilterMode, ReportNotifications, ReportOptions, ReportParameter, ReportParameterType, ReportRecurrence, ReportRecurrenceType, ReportScorecard, ReportScorecardParameter, ReportScorecardRules, ReportStatus, ReportSummary, ReportSummaryReason, };
//# sourceMappingURL=index.d.ts.map