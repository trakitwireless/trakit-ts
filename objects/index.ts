/**
 * Trak-iT API Object Model.
 * {@link https://github.com/trakitwireless/trakit-ts-objects|Object definition.}
 * All of the Trak-iT APIs use the same object definitions. Use this package in your TypeScript or JavaScript project.
 * Last updated on Thu Feb 27 2025 11:59:01 
 * @copyright Trak-iT Wireless Inc. 2025
 **/
import { Contact } from "./Accounts/Contact";
import { Machine } from "./Accounts/Machine";
import { NotificationMethod } from "./Accounts/NotificationMethod";
import {
	compute,
	computeAll,
	computeAllComplex,
	computeAllSimple,
	computeComplex,
	computeSimple,
	computeSimpleLevels,
	findAllEscalations,
	findAllLabelEscalations,
	findAnyComplex,
	findComplex,
	findComplexLevel,
	findEscalations,
	findLabelEscalation,
	findSimple,
	findSimpleLevel,
	getComplexLevel,
	getSimpleLevel,
	hasAnyComplex,
	hasComplex,
	hasSimple,
	IMPLIED_PERMS,
	LABEL_BASED_PERMS,
} from "./Accounts/Permissions/Authorizer";
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
import { UserGeneral } from "./Accounts/UserGeneral";
import { UserGroup } from "./Accounts/UserGroup";
import { UserNotifications } from "./Accounts/UserNotifications";
import { ARRAY_EXCEPT } from "./API/Arrays";
import { Base } from "./API/Base";
import { BaseComponent } from "./API/BaseComponent";
import { BaseCompound } from "./API/BaseCompound";
import { CODIFY, HIGHLIGHT, } from "./API/Codifier";
import { FREEZE, KEYS } from "./API/Constants";
import { CONVERT, } from "./API/Conversion";
import { PASSWORD_DECODE, PASSWORD_ENCODE } from "./API/Encoding";
import {
	FILESIZE_HELPER,
	NUMBER_GROUPS,
} from "./API/Files";
import {
	CAPITALIZE,
	CLIP,
	DATE,
	DOUGLASPEUCKER,
	ID,
	IS_AN,
	IS_NOTHING,
	JSON_TO_MAP,
	JSON_TO_MAP_BY_PREDICATE,
	MAP_TO_JSON,
	MAP_TO_JSON_PREDICATE,
	PHONE_PARSE,
	PLURAL,
	PYTHAGORA,
	ROUND_TO,
} from "./API/Functions";
import {
	EARTH_RADIUS,
	GEOFENCE_AREA,
	GEOFENCE_CONTAINS,
	GEOFENCE_PEUCKER,
	GEOFENCE_WIDEST,
	LATITUDE_NORMALIZED,
	LATLNG_ANGLE,
	LATLNG_DISTANCE,
	LATLNG_DISTANCE_VINCENTY,
	LATLNG_GREAT_CIRCLE,
	LATLNG_MIDPOINT,
	LATLNG_TRANSLATE,
	LONGITUDE_NORMALIZED,
	ROUTE_DECODE,
	ROUTE_ENCODE,
	ROUTE_LENGTH,
	ROUTE_PEUCKER,
} from "./API/Geography/Functions";
import { LatLng, } from "./API/Geography/LatLng";
import { LatLngBounds, } from "./API/Geography/LatLngBounds";
import { Position, } from "./API/Geography/Position";
import { StreetAddress, } from "./API/Geography/StreetAddress";
import {
	PATH_LENGTH,
	//POINT_FARTHEST,
	PATH_ORTHOGONAL,
	PATH_PEUCKER,
	POINT_ANGLE,
	POINT_DISTANCE,
	POINT_VECTOR,
	POLY_AREA,
	POLY_CONTAINS,
	POLY_PEUCKER,
	POLY_WRAPPER,
	RADIAL_AREA,
	RADIAL_BADOIU_CLARKSON,
	RADIAL_CIRCUMFERENCE,
	RADIAL_OVERLAP_RECTANGLE,
} from "./API/Geometry/Functions";
import { Point, } from "./API/Geometry/Point";
import { Radial } from "./API/Geometry/Radial";
import { Rectangle, } from "./API/Geometry/Rectangle";
import { Size, } from "./API/Geometry/Size";
import { GUID, } from "./API/Guid";
import { IDeserializable } from "./API/Interfaces/IDeserializable";
import { IRequestable } from "./API/Interfaces/IRequestable";
import { ISerializable } from "./API/Interfaces/ISerializable";
import { SearchPattern, } from "./API/SearchPattern";
import {
	TIMESPACE_PARSE,
	TIMESPACE_STRINGIFY,
	TimeSpan,
} from "./API/TimeSpan";
import { Timezone, } from "./API/Timezone";
import { TIMEZONE_FIND, } from "./API/Timezones";
import {
	byte,
	codified,
	colour,
	datetime,
	datetimetemplate,
	double,
	email,
	expression,
	guid,
	int,
	ipv4,
	JsonArray,
	JsonObject,
	JsonValue,
	long,
	nothing,
	phone,
	polyline,
	sbyte,
	short,
	single,
	timespan,
	uint,
	ulong,
	url,
	ushort
} from "./API/Types";
import { Asset } from "./Assets/Asset";
import { AssetAdvanced } from "./Assets/AssetAdvanced";
import { AssetAttribute } from "./Assets/AssetAttribute";
import { AssetDispatch } from "./Assets/AssetDispatch";
import { AssetGeneral } from "./Assets/AssetGeneral";
import { AssetPlaceStatus } from "./Assets/AssetPlaceStatus";
import { AssetPlaceStatusType } from "./Assets/AssetPlaceStatusType";
import { AssetType } from "./Assets/AssetType";
import { Person } from "./Assets/Person";
import { PersonGeneral } from "./Assets/PersonGeneral";
import { Trailer } from "./Assets/Trailer";
import { TrailerGeneral } from "./Assets/TrailerGeneral";
import { Vehicle } from "./Assets/Vehicle";
import { VehicleAdvanced } from "./Assets/VehicleAdvanced";
import { VehicleGeneral } from "./Assets/VehicleGeneral";
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
import { CompanyPolicies } from "./Companies/CompanyPolicies";
import { CompanyReseller } from "./Companies/CompanyReseller";
import { CompanyStyles } from "./Companies/CompanyStyles";
import { LabelStyle } from "./Companies/LabelStyle";
import { NotificationServerEmail } from "./Companies/NotificationServerEmail";
import { NotificationServerSms } from "./Companies/NotificationServerSms";
import { PasswordExpiryMode } from "./Companies/PasswordExpiryMode";
import { PasswordPolicy } from "./Companies/PasswordPolicy";
import { SessionMultiUser } from "./Companies/SessionMultiUser";
import { SessionPolicy } from "./Companies/SessionPolicy";
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
import {
	ASSETS,
	BEHAVIOUR_LOGS,
	BEHAVIOUR_SCRIPTS,
	BEHAVIOURS,
	BILLING_LICENSES,
	BILLING_PROFILES,
	BILLING_REPORTS,
	BILLING_RULES,
	COMPANIES,
	CONTACTS,
	DASHCAMS,
	DISPATCH_JOBS,
	DISPATCH_TASKS,
	DOCUMENTS,
	FORM_RESULTS,
	FORM_TEMPLATES,
	GROUPS,
	ICONS,
	MACHINES,
	MAINTENANCE_JOBS,
	MAINTENANCE_SCHEDULES,
	MESSAGES,
	PICTURES,
	PLACES,
	PROVIDER_CONFIGS,
	PROVIDER_CONFIGURATION_TYPES,
	PROVIDER_CONFIGURATIONS,
	PROVIDER_REGISTRATIONS,
	PROVIDER_SCRIPTS,
	PROVIDERS,
	REPORT_RESULTS,
	REPORT_SCHEDULES,
	REPORT_TEMPLATES,
	SESSIONS,
	USERS,
} from "./storage";

/**
 * Version number for this release.
 */
export const version = 5.03;

/**
 * The names of all main object types in the Trak-iT Object Model.
 */
export type classes =
	// Companies
	"Company"
	| "CompanyGeneral"
	| "CompanyStyles"
	| "CompanyDirectory"
	| "CompanyPolicies"
	| "CompanyReseller"
	// Accounts
	| "Contact"
	| "Machine"
	| "Session"
	| "User"
	| "User"
	| "UserGeneral"
	| "UserAdvanced"
	| "UserGroup"
	// Assets
	| "Asset"
	| "AssetGeneral"
	| "AssetAdvanced"
	| "AssetDispatch"
	// Messaging
	| "AssetAlert"
	| "AssetMessage"
	// Behaviours
	| "Behaviour"
	| "BehaviourScript"
	| "BehaviourLog"
	// Billing
	| "BillableHostingLicense"
	| "BillableHostingRule"
	| "BillingProfile"
	| "BillingReport"
	// Dispatch
	| "DispatchJob"
	| "DispatchTask"
	// Hosting
	| "Document"
	| "FormResult"
	| "FormTemplate"
	// Images
	| "Dashcam"
	| "Icon"
	| "Picture"
	// Maintenance
	| "MaintenanceSchedule"
	| "MaintenanceJob"
	// Places
	| "Place"
	// Providers
	| "Provider"
	| "ProviderGeneral"
	| "ProviderAdvanced"
	| "ProviderControl"
	| "ProviderScript"
	| "ProviderConfig"
	| "ProviderConfigurationType"
	| "ProviderConfiguration"
	| "ProviderRegistration"
	// Reports
	| "ReportTemplate"
	| "ReportSchedule"
	| "ReportResult"
	;
/**
 * A mapping of all main object types in the Trak-iT Object Model to their class constructors.
 */
export const objects: { [key in classes]: { new(): IRequestable } } = {
	// Companies
	"Company": Company,
	"CompanyGeneral": CompanyGeneral,
	"CompanyStyles": CompanyStyles,
	"CompanyDirectory": CompanyDirectory,
	"CompanyPolicies": CompanyPolicies,
	"CompanyReseller": CompanyReseller,
	// Accounts
	"Contact": Contact,
	"Machine": Machine,
	"Session": Session,
	"User": User,
	"UserGeneral": UserGeneral,
	"UserAdvanced": UserAdvanced,
	"UserGroup": UserGroup,
	// Assets
	"Asset": Asset,
	"AssetGeneral": AssetGeneral,
	"AssetAdvanced": AssetAdvanced,
	"AssetDispatch": AssetDispatch,
	// Messaging
	"AssetAlert": AssetAlert,
	"AssetMessage": AssetMessage,
	// Behaviours
	"Behaviour": Behaviour,
	"BehaviourScript": BehaviourScript,
	"BehaviourLog": BehaviourLog,
	// Billing
	"BillableHostingLicense": BillableHostingLicense,
	"BillableHostingRule": BillableHostingRule,
	"BillingProfile": BillingProfile,
	"BillingReport": BillingReport,
	// Dispatch
	"DispatchJob": DispatchJob,
	"DispatchTask": DispatchTask,
	// Hosting
	"Document": Document,
	"FormResult": FormResult,
	"FormTemplate": FormTemplate,
	// Images
	"Dashcam": Dashcam,
	"Icon": Icon,
	"Picture": Picture,
	// Maintenance
	"MaintenanceSchedule": MaintenanceSchedule,
	"MaintenanceJob": MaintenanceJob,
	// Places
	"Place": Place,
	// Providers
	"Provider": Provider,
	"ProviderGeneral": ProviderGeneral,
	"ProviderAdvanced": ProviderAdvanced,
	"ProviderControl": ProviderControl,
	"ProviderScript": ProviderScript,
	"ProviderConfig": ProviderConfig,
	"ProviderConfigurationType": ProviderConfigurationType,
	"ProviderConfiguration": ProviderConfiguration,
	"ProviderRegistration": ProviderRegistration,
	// Reports
	"ReportTemplate": ReportTemplate,
	"ReportSchedule": ReportSchedule,
	"ReportResult": ReportResult,
};
/**
 * Local Maps that store various instances of objects.
 * The storage is used by the sync system.
 */
export const storage: { [key in classes]: Map<string | guid | email | ulong, IRequestable> } = {
	// Companies
	"Company": COMPANIES,
	"CompanyGeneral": COMPANIES,
	"CompanyStyles": COMPANIES,
	"CompanyDirectory": COMPANIES,
	"CompanyPolicies": COMPANIES,
	"CompanyReseller": COMPANIES,
	// Accounts
	"Contact": CONTACTS,
	"Machine": MACHINES,
	"Session": SESSIONS,
	"User": USERS,
	"UserGeneral": USERS,
	"UserAdvanced": USERS,
	"UserGroup": GROUPS,
	// Assets
	"Asset": ASSETS,
	"AssetGeneral": ASSETS,
	"AssetAdvanced": ASSETS,
	"AssetDispatch": ASSETS,
	// Messaging
	"AssetAlert": MESSAGES,
	"AssetMessage": MESSAGES,
	// Behaviours
	"Behaviour": BEHAVIOURS,
	"BehaviourScript": BEHAVIOUR_SCRIPTS,
	"BehaviourLog": BEHAVIOUR_LOGS,
	// Billing
	"BillingProfile": BILLING_PROFILES,
	"BillingReport": BILLING_REPORTS,
	"BillableHostingRule": BILLING_RULES,
	"BillableHostingLicense": BILLING_LICENSES,
	// Dispatch
	"DispatchTask": DISPATCH_TASKS,
	"DispatchJob": DISPATCH_JOBS,
	// Hosting
	"Document": DOCUMENTS,
	"FormTemplate": FORM_TEMPLATES,
	"FormResult": FORM_RESULTS,
	// Images
	"Dashcam": DASHCAMS,
	"Icon": ICONS,
	"Picture": PICTURES,
	// Maintenance
	"MaintenanceSchedule": MAINTENANCE_SCHEDULES,
	"MaintenanceJob": MAINTENANCE_JOBS,
	// Places
	"Place": PLACES,
	// Providers
	"Provider": PROVIDERS,
	"ProviderGeneral": PROVIDERS,
	"ProviderAdvanced": PROVIDERS,
	"ProviderControl": PROVIDERS,
	"ProviderScript": PROVIDER_SCRIPTS,
	"ProviderConfig": PROVIDER_CONFIGS,
	"ProviderConfigurationType": PROVIDER_CONFIGURATION_TYPES,
	"ProviderConfiguration": PROVIDER_CONFIGURATIONS,
	"ProviderRegistration": PROVIDER_REGISTRATIONS,
	// Reports
	"ReportTemplate": REPORT_TEMPLATES,
	"ReportSchedule": REPORT_SCHEDULES,
	"ReportResult": REPORT_RESULTS,
};

//#region Utility, conversion, and encoding functions
/**
 * Common types used throughout the application.
 * These are simply numbers or strings of a specific format.
 */
export type {
	JsonArray,
	JsonObject,
	JsonValue,
	//#region numbers
	byte,
	double,
	int,
	long,
	phone,
	sbyte,
	short,
	single,
	uint,
	ulong,
	ushort,
	//#endregion numbers
	//#region strings
	codified,
	colour,
	datetime,
	datetimetemplate,
	email,
	expression,
	guid,
	ipv4,
	nothing,
	polyline,
	timespan,
	url,
	//#endregion strings
	IRequestable,
	IDeserializable,
	ISerializable,
};

/**
 * A group of utility functions for common tasks like dealing with strings.
 */
export const utility = {
	capitalize: CAPITALIZE,
	clip: CLIP,
	codify: CODIFY,
	date: DATE,
	douglasPeucker: DOUGLASPEUCKER,
	fileSize: FILESIZE_HELPER,
	findTimeZoneById: TIMEZONE_FIND,
	guid: GUID,
	highlight: HIGHLIGHT,
	id: ID,
	isNothing: IS_NOTHING,
	isntNaN: IS_AN,
	numberGroups: NUMBER_GROUPS,
	roundTo: ROUND_TO,
	parseTime: TIMESPACE_PARSE,
	phoneNumber: PHONE_PARSE,
	plural: PLURAL,
	stringifyTime: TIMESPACE_STRINGIFY,
};
/**
 * A group of functions for converting between different measurement systems.
 */
export const convert = CONVERT;
/**
 * Functions for encoding and decoding device passwords.
 */
export const encoding = {
	toPassword: PASSWORD_ENCODE,
	fromPassword: PASSWORD_DECODE,
};
/**
 * Functions for converting between JSON objects using our custom serialization.
 */
export const serialization = {
	fromMap: MAP_TO_JSON,
	fromMapPredicate: MAP_TO_JSON_PREDICATE,
	toMap: JSON_TO_MAP,
	toMapPredicate: JSON_TO_MAP_BY_PREDICATE,
};
/**
 * Common classes used throughout the API, and the Base classes used for synchronizable objects.
 */
export {
	Base,
	BaseComponent,
	BaseCompound,
	SearchPattern,
	TimeSpan,
	Timezone
};
//#endregion Utility, conversion, and encoding functions
//#region Drawing and trigonometry
/**
 * Utility functions exposing algorithms for a flat plane.
 */
export const geometry = {
	pathLength: PATH_LENGTH,
	pathOrthogonal: PATH_ORTHOGONAL,
	pathReduce: PATH_PEUCKER,
	pointAngle: POINT_ANGLE,
	pointDistance: POINT_DISTANCE,
	//	pointFarthest: POINT_FARTHEST,
	pointPythagora: PYTHAGORA,
	pointVector: POINT_VECTOR,
	polyArea: POLY_AREA,
	polyContains: POLY_CONTAINS,
	polyReduce: POLY_PEUCKER,
	polyWrapper: POLY_WRAPPER,
	radialCircumference: RADIAL_CIRCUMFERENCE,
	radialArea: RADIAL_AREA,
	radialSmallest: RADIAL_BADOIU_CLARKSON,
	radialOverlapsRectangle: RADIAL_OVERLAP_RECTANGLE,
};
export {
	Point,
	Radial,
	Rectangle,
	Size
};
//#endregion Drawing and trigonometry
//#region Coordinates and geography
/**
 * Utility functions exposing algorithms for a WGS84/NAD83 spheroid.
 */
export const geography = {
	earthRadius: EARTH_RADIUS,

	clampLat: LATITUDE_NORMALIZED,
	clampLng: LONGITUDE_NORMALIZED,

	pathLength: ROUTE_LENGTH,
	pathReduce: ROUTE_PEUCKER,
	pathEncode: ROUTE_ENCODE,
	pathDecode: ROUTE_DECODE,

	pointAngle: LATLNG_ANGLE,
	pointDistance: LATLNG_DISTANCE,
	pointMiddle: LATLNG_MIDPOINT,
	pointOrthogonal: LATLNG_GREAT_CIRCLE,
	pointTranslate: LATLNG_TRANSLATE,
	pointVincenty: LATLNG_DISTANCE_VINCENTY,

	polyArea: GEOFENCE_AREA,
	polyContains: GEOFENCE_CONTAINS,
	polyReduce: GEOFENCE_PEUCKER,
	polyWidest: GEOFENCE_WIDEST,
	//	polyWrapper: GEOFENCE_WRAPPER,

	//	radialArea: SPHERECAP_AREA,
};
export {
	LatLng,
	LatLngBounds,
	Position,
	StreetAddress
};
//#endregion Coordinates and geography

//#region Company
export {
	ColourStyle,
	Company,
	CompanyDirectory,
	CompanyGeneral,
	CompanyPolicies,
	CompanyReseller,
	CompanyStyles,
	LabelStyle,
	NotificationServerEmail,
	NotificationServerSms,
	PasswordExpiryMode,
	PasswordPolicy,
	SessionMultiUser,
	SessionPolicy
};
//#endregion Company
//#region Accounts
/**
 * Functions and collections for validating account permissions.
 */
export const authorizer = {
	// Generic / global compute
	computeAll,
	compute,

	// Simple Permissions
	computeAllSimple,
	computeSimple,
	computeSimpleLevels,
	getSimpleLevel,
	hasSimple,
	findSimple,
	findSimpleLevel,

	// Complex Permissions
	computeAllComplex,
	computeComplex,
	getComplexLevel,
	findComplexLevel,
	hasComplex,
	findComplex,
	hasAnyComplex,
	findAnyComplex,
    
	// Escalations
	findAllEscalations,
	findEscalations,
	findAllLabelEscalations,
	findLabelEscalation,
    
	// exposed properties
	/**
	 * A list of {@link PermissionType}s which are implied for each user's own company.
	 */
	implied: FREEZE(IMPLIED_PERMS),
	/**
	 * {@link PermissionType}s which do not use labels to calculate access.
	 */
	simple: FREEZE(ARRAY_EXCEPT(KEYS(PermissionType) as PermissionType[], LABEL_BASED_PERMS)),
	/**
	 * The {@link PermissionType}s which are calculated using labels.
	 */
	complex: FREEZE(LABEL_BASED_PERMS),
};
export {
	Contact,
	Machine,
	NotificationMethod,
	Permission,
	PermissionEscalation,
	PermissionEscalationState,
	PermissionEscalationType,
	PermissionLevel,
	PermissionMethod,
	PermissionType,
	Session,
	SessionStatus,
	SystemsOfUnits,
	User,
	UserGeneral,
	UserAdvanced,
	UserGroup,
	UserNotifications,
};
//#endregion Accounts
//#region Assets
export {
	Asset,
	AssetAdvanced,
	AssetAttribute,
	AssetDispatch,
	AssetGeneral,
	AssetPlaceStatus,
	AssetPlaceStatusType,
	AssetType,
	Person,
	PersonGeneral,
	Trailer,
	TrailerGeneral,
	Vehicle,
	VehicleGeneral,
	VehicleAdvanced,
	AssetAlert,
	AssetMessage,
	AlertPriority,
	MessageFolder,
	MessageStatus,
	MessageType,
};
//#endregion Assets
//#region Behaviours
export {
	Behaviour,
	BehaviourLog,
	BehaviourLogType,
	BehaviourParameter,
	BehaviourParameterType,
	BehaviourScript,
};
//#endregion Behaviours
//#region Billing
export {
	// BillableHostingDiscount,
	BillableHostingLicense,
	BillableHostingLicenseType,
	BillableHostingRule,
	BillableHostingType,
	BillingCurrency,
	BillingCycle,
	BillingProfile,
	BillingReport,
	BillingReportBreakdown,
	BillingReportHostingSummary,
	BillingReportLicenseBreakdown,
	BillingReportServiceBreakdown,
	BillingReportStatus,
	BillingReportSummary,
};
//#endregion Billing
//#region Dispatch
export {
	DispatchDirection,
	DispatchJob,
	DispatchJobPriority,
	DispatchStep,
	DispatchStepState,
	DispatchStepStatus,
	DispatchTask,
	DispatchTaskStatus,
};
//#endregion Dispatch
//#region Hosting
export {
	Document,
	FormResult,
	FormTemplate,
	FormFieldType,
	FormFieldBase,
	FormFieldAttachments,
	FormFieldBoolean,
	FormFieldChoice,
	FormFieldDate,
	FormFieldNumeric,
	FormFieldNumericSize,
	FormFieldSignature,
	FormFieldText,
	FormFieldTime,
	FormFieldTimezone,
};
//#endregion Hosting
//#region Images
export {
	DashcamBase,
	Dashcam,
	DashcamLive,
	DashcamMediaType,
	Icon,
	IconGlyph,
	IconLabel,
	IconLayer,
	Picture,
};
//#endregion Images
//#region Maintenance
export {
	MaintenanceSchedule,
	MaintenanceJob,
	MaintenanceJobStatus,
	MaintenanceInterval,
};
//#endregion Maintenance
//#region Places
export {
	Place,
	PlaceType,
};
//#endregion Places
//#region Providers
export {
	Provider,
	ProviderGeneral,
	ProviderAdvanced,
	ProviderControl,
	ProviderCommand,
	ProviderCommandStatus,
	ProviderCommandType,
	ProviderType,
	ProviderRegistration,
	ProviderData,
	ProviderScript,
	ProviderScriptBlock,
	ProviderScriptParameter,
	ProviderScriptParameterType,
	ProviderConfig,
	ProviderConfiguration,
	ProviderConfigurationNode,
	ProviderConfigurationType,
	ProviderGeofenceCircular,
	ProviderGeofencePoint,
	ProviderGeofencePolygon,
	ProviderGeofenceRectangle,
};
//#endregion Providers
//#region Reports
export {
	ReportResult,
	ReportResultData,
	ReportSchedule,
	ReportTemplate,
	ReportType,
	ReportBreakdown,
	ReportBreakdownJob,
	ReportBreakdownMessage,
	ReportBreakdownTask,
	ReportTotal,
	ReportFilterMode,
	ReportNotifications,
	ReportOptions,
	ReportParameter,
	ReportParameterType,
	ReportRecurrence,
	ReportRecurrenceType,
	ReportScorecard,
	ReportScorecardParameter,
	ReportScorecardRules,
	ReportStatus,
	ReportSummary,
	ReportSummaryReason,
};
//#endregion Reports