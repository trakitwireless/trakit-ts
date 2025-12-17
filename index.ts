/**
 * Trak-iT API Object Model.
 * {@link https://github.com/trakitwireless/trakit-ts-objects|Object definition.}
 * All of the Trak-iT APIs use the same object definitions. Use this package in your TypeScript or JavaScript project.
 * Last updated on Thu Feb 27 2025 11:59:01 
 * @copyright Trak-iT Wireless Inc. 2025
 */
import { Contact } from "./objects/Accounts/Contact";
import { Machine } from "./objects/Accounts/Machine";
import { NotificationMethod } from "./objects/Accounts/NotificationMethod";
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
} from "./objects/Accounts/Permissions/Authorizer";
import { Permission } from "./objects/Accounts/Permissions/Permission";
import { PermissionEscalation } from "./objects/Accounts/Permissions/PermissionEscalation";
import { PermissionEscalationState } from "./objects/Accounts/Permissions/PermissionEscalationState";
import { PermissionEscalationType } from "./objects/Accounts/Permissions/PermissionEscalationType";
import { PermissionLevel } from "./objects/Accounts/Permissions/PermissionLevel";
import { PermissionMethod } from "./objects/Accounts/Permissions/PermissionMethod";
import { PermissionType } from "./objects/Accounts/Permissions/PermissionType";
import { Session } from "./objects/Accounts/Session";
import { SessionStatus } from "./objects/Accounts/SessionStatus";
import { SystemsOfUnits } from "./objects/Accounts/SystemsOfUnits";
import { User } from "./objects/Accounts/User";
import { UserAdvanced } from "./objects/Accounts/UserAdvanced";
import { UserGeneral } from "./objects/Accounts/UserGeneral";
import { UserGroup } from "./objects/Accounts/UserGroup";
import { UserNotifications } from "./objects/Accounts/UserNotifications";
import { ARRAY_EXCEPT } from "./objects/API/Arrays";
import { Base } from "./objects/API/Base";
import { BaseComponent } from "./objects/API/BaseComponent";
import { BaseCompound } from "./objects/API/BaseCompound";
import { CODIFY, HIGHLIGHT, } from "./objects/API/Codifier";
import { FREEZE, KEYS } from "./objects/API/Constants";
import { CONVERT, } from "./objects/API/Conversion";
import { PASSWORD_DECODE, PASSWORD_ENCODE } from "./objects/API/Encoding";
import {
	FILESIZE_HELPER,
	NUMBER_GROUPS,
} from "./objects/API/Files";
import {
	CAPITALIZE,
	CLIP,
	DATE,
	DOUGLASPEUCKER,
	ID,
	IS_AN,
	IS_NOTHING,
	JSON_TO_MAP,
	JSON_TO_MAP_PREDICATE,
	MAP_TO_JSON,
	MAP_TO_JSON_PREDICATE,
	PHONE_PARSE,
	PLURALIZE,
	PYTHAGORA,
	ROUND_TO,
	SINGULARIZE,
} from "./objects/API/Functions";
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
} from "./objects/API/Geography/Functions";
import { LatLng, } from "./objects/API/Geography/LatLng";
import { LatLngBounds, } from "./objects/API/Geography/LatLngBounds";
import { Position, } from "./objects/API/Geography/Position";
import { StreetAddress, } from "./objects/API/Geography/StreetAddress";
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
} from "./objects/API/Geometry/Functions";
import { Point, } from "./objects/API/Geometry/Point";
import { Radial } from "./objects/API/Geometry/Radial";
import { Rectangle, } from "./objects/API/Geometry/Rectangle";
import { Size, } from "./objects/API/Geometry/Size";
import { GUID, } from "./objects/API/Guid";
import { IDeserializable } from "./objects/API/Interfaces/IDeserializable";
import { IRequestable } from "./objects/API/Interfaces/IRequestable";
import { ISerializable } from "./objects/API/Interfaces/ISerializable";
import { SearchPattern, } from "./objects/API/SearchPattern";
import {
	TIMESPAN_PARSE,
	TIMESPAN_STRINGIFY,
	TimeSpan,
} from "./objects/API/TimeSpan";
import { Timezone, } from "./objects/API/Timezone";
import { TIMEZONE_FIND, } from "./objects/API/Timezones";
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
} from "./objects/API/Types";
import { Asset } from "./objects/Assets/Asset";
import { AssetAdvanced } from "./objects/Assets/AssetAdvanced";
import { AssetAttribute } from "./objects/Assets/AssetAttribute";
import { AssetDispatch } from "./objects/Assets/AssetDispatch";
import { AssetGeneral } from "./objects/Assets/AssetGeneral";
import { AssetPlaceStatus } from "./objects/Assets/AssetPlaceStatus";
import { AssetPlaceStatusType } from "./objects/Assets/AssetPlaceStatusType";
import { AssetType } from "./objects/Assets/AssetType";
import { Behaviour } from "./objects/Behaviours/Behaviour";
import { BehaviourLog } from "./objects/Behaviours/BehaviourLog";
import { BehaviourLogType } from "./objects/Behaviours/BehaviourLogType";
import { BehaviourParameter } from "./objects/Behaviours/BehaviourParameter";
import { BehaviourParameterType } from "./objects/Behaviours/BehaviourParameterType";
import { BehaviourScript } from "./objects/Behaviours/BehaviourScript";
import { BillingCurrency } from "./objects/Billing/BillingCurrency";
import { BillingCycle } from "./objects/Billing/BillingCycle";
import { BillingProfile } from "./objects/Billing/BillingProfile";
import { BillableHostingLicense } from "./objects/Billing/Hosting/BillableHostingLicense";
import { BillableHostingLicenseType } from "./objects/Billing/Hosting/BillableHostingLicenseType";
import { BillableHostingRule } from "./objects/Billing/Hosting/BillableHostingRule";
import { BillableHostingType } from "./objects/Billing/Hosting/BillableHostingType";
import { BillingReport } from "./objects/Billing/Report/BillingReport";
import { BillingReportBreakdown } from "./objects/Billing/Report/BillingReportBreakdown";
import { BillingReportHostingSummary } from "./objects/Billing/Report/BillingReportHostingSummary";
import { BillingReportLicenseBreakdown } from "./objects/Billing/Report/BillingReportLicenseBreakdown";
import { BillingReportServiceBreakdown } from "./objects/Billing/Report/BillingReportServiceBreakdown";
import { BillingReportStatus } from "./objects/Billing/Report/BillingReportStatus";
import { BillingReportSummary } from "./objects/Billing/Report/BillingReportSummary";
import { ColourStyle } from "./objects/Companies/ColourStyle";
import { Company } from "./objects/Companies/Company";
import { CompanyDirectory } from "./objects/Companies/CompanyDirectory";
import { CompanyGeneral } from "./objects/Companies/CompanyGeneral";
import { CompanyPolicy } from "./objects/Companies/CompanyPolicy";
import { CompanyReseller } from "./objects/Companies/CompanyReseller";
import { CompanyStyle } from "./objects/Companies/CompanyStyle";
import { LabelStyle } from "./objects/Companies/LabelStyle";
import { NotificationServerEmail } from "./objects/Companies/NotificationServerEmail";
import { NotificationServerSms } from "./objects/Companies/NotificationServerSms";
import { PasswordExpiryMode } from "./objects/Companies/PasswordExpiryMode";
import { PasswordPolicy } from "./objects/Companies/PasswordPolicy";
import { SessionMultiUser } from "./objects/Companies/SessionMultiUser";
import { SessionPolicy } from "./objects/Companies/SessionPolicy";
import { DispatchDirection } from "./objects/Dispatch/DispatchDirection";
import { DispatchJob } from "./objects/Dispatch/DispatchJob";
import { DispatchJobPriority } from "./objects/Dispatch/DispatchJobPriority";
import { DispatchStep } from "./objects/Dispatch/DispatchStep";
import { DispatchStepState } from "./objects/Dispatch/DispatchStepState";
import { DispatchStepStatus } from "./objects/Dispatch/DispatchStepStatus";
import { DispatchTask } from "./objects/Dispatch/DispatchTask";
import { DispatchTaskStatus } from "./objects/Dispatch/DispatchTaskStatus";
import { Document } from "./objects/Hosting/Document";
import { FormFieldAttachments } from "./objects/Hosting/Fields/FormFieldAttachments";
import { FormFieldBase } from "./objects/Hosting/Fields/FormFieldBase";
import "./objects/Hosting/Fields/FormFieldBase_fromJSON";  // Initializes FormFieldBase.fromJSON
import { FormFieldBoolean } from "./objects/Hosting/Fields/FormFieldBoolean";
import { FormFieldChoice } from "./objects/Hosting/Fields/FormFieldChoice";
import { FormFieldDate } from "./objects/Hosting/Fields/FormFieldDate";
import { FormFieldNumeric } from "./objects/Hosting/Fields/FormFieldNumeric";
import { FormFieldNumericSize } from "./objects/Hosting/Fields/FormFieldNumericSize";
import { FormFieldSignature } from "./objects/Hosting/Fields/FormFieldSignature";
import { FormFieldText } from "./objects/Hosting/Fields/FormFieldText";
import { FormFieldTime } from "./objects/Hosting/Fields/FormFieldTime";
import { FormFieldTimezone } from "./objects/Hosting/Fields/FormFieldTimezone";
import { FormFieldType } from "./objects/Hosting/FormFieldType";
import { FormResult } from "./objects/Hosting/FormResult";
import { FormTemplate } from "./objects/Hosting/FormTemplate";
import { Dashcam } from "./objects/Images/Dashcam";
import { DashcamBase } from "./objects/Images/DashcamBase";
import { DashcamLive } from "./objects/Images/DashcamLive";
import { DashcamMediaType } from "./objects/Images/DashcamMediaType";
import { Icon } from "./objects/Images/Icon";
import { IconGlyph } from "./objects/Images/IconGlyph";
import { IconLabel } from "./objects/Images/IconLabel";
import { IconLayer } from "./objects/Images/IconLayer";
import { Picture } from "./objects/Images/Picture";
import { MaintenanceInterval } from "./objects/Maintenance/MaintenanceInterval";
import { MaintenanceJob } from "./objects/Maintenance/MaintenanceJob";
import { MaintenanceJobStatus } from "./objects/Maintenance/MaintenanceJobStatus";
import { MaintenanceSchedule } from "./objects/Maintenance/MaintenanceSchedule";
import { AlertPriority } from "./objects/Messaging/AlertPriority";
import { AssetAlert } from "./objects/Messaging/AssetAlert";
import { AssetMessage } from "./objects/Messaging/AssetMessage";
import { MessageFolder } from "./objects/Messaging/MessageFolder";
import { MessageStatus } from "./objects/Messaging/MessageStatus";
import { MessageType } from "./objects/Messaging/MessageType";
import { Place } from "./objects/Places/Place";
import { PlaceType } from "./objects/Places/PlaceType";
import { ProviderConfig } from "./objects/Providers/Config/ProviderConfig";
import { ProviderRegistration } from "./objects/Providers/Config/ProviderRegistration";
import { ProviderScript } from "./objects/Providers/Config/ProviderScript";
import { ProviderScriptBlock } from "./objects/Providers/Config/ProviderScriptBlock";
import { ProviderScriptParameter } from "./objects/Providers/Config/ProviderScriptParameter";
import { ProviderScriptParameterType } from "./objects/Providers/Config/ProviderScriptParameterType";
import { ProviderConfiguration } from "./objects/Providers/Configuration/ProviderConfiguration";
import { ProviderConfigurationNode } from "./objects/Providers/Configuration/ProviderConfigurationNode";
import { ProviderConfigurationType } from "./objects/Providers/Configuration/ProviderConfigurationType";
import { ProviderGeofenceBase } from "./objects/Providers/Configuration/ProviderGeofenceBase";
import "./objects/Providers/Configuration/ProviderGeofenceBase_fromJSON";
import { ProviderGeofenceCircular } from "./objects/Providers/Configuration/ProviderGeofenceCircular";
import { ProviderGeofencePoint } from "./objects/Providers/Configuration/ProviderGeofencePoint";
import { ProviderGeofencePolygon } from "./objects/Providers/Configuration/ProviderGeofencePolygon";
import { ProviderGeofenceRectangle } from "./objects/Providers/Configuration/ProviderGeofenceRectangle";
import { Provider } from "./objects/Providers/Provider";
import { ProviderAdvanced } from "./objects/Providers/ProviderAdvanced";
import { ProviderCommand } from "./objects/Providers/ProviderCommand";
import { ProviderCommandStatus } from "./objects/Providers/ProviderCommandStatus";
import { ProviderCommandType } from "./objects/Providers/ProviderCommandType";
import { ProviderControl } from "./objects/Providers/ProviderControl";
import { ProviderData } from "./objects/Providers/ProviderData";
import { ProviderGeneral } from "./objects/Providers/ProviderGeneral";
import { ProviderType } from "./objects/Providers/ProviderType";
import { ReportBreakdown } from "./objects/Reports/ReportBreakdown";
import "./objects/Reports/ReportBreakdown_fromJSON";
import { ReportBreakdownJob } from "./objects/Reports/ReportBreakdownJob";
import { ReportBreakdownMessage } from "./objects/Reports/ReportBreakdownMessage";
import { ReportBreakdownTask } from "./objects/Reports/ReportBreakdownTask";
import { ReportFilterMode } from "./objects/Reports/ReportFilterMode";
import { ReportNotifications } from "./objects/Reports/ReportNotifications";
import { ReportOptions } from "./objects/Reports/ReportOptions";
import { ReportParameter } from "./objects/Reports/ReportParameter";
import { ReportParameterType } from "./objects/Reports/ReportParameterType";
import { ReportRecurrence } from "./objects/Reports/ReportRecurrence";
import { ReportRecurrenceType } from "./objects/Reports/ReportRecurrenceType";
import { ReportResult } from "./objects/Reports/ReportResult";
import { ReportResultData } from "./objects/Reports/ReportResultData";
import { ReportSchedule } from "./objects/Reports/ReportSchedule";
import { ReportScorecard } from "./objects/Reports/ReportScorecard";
import { ReportScorecardParameter } from "./objects/Reports/ReportScorecardParameter";
import { ReportScorecardRules } from "./objects/Reports/ReportScorecardRules";
import { ReportStatus } from "./objects/Reports/ReportStatus";
import { ReportSummary } from "./objects/Reports/ReportSummary";
import { ReportSummaryReason } from "./objects/Reports/ReportSummaryReason";
import { ReportTemplate } from "./objects/Reports/ReportTemplate";
import { ReportTotal } from "./objects/Reports/ReportTotal";
import { ReportType } from "./objects/Reports/ReportType";
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
} from "./objects/storage";

/**
 * Version number for this release.
 */
export const version = 5.04;

/**
 * The names of all main object types in the Trak-iT Object Model.
 */
export type SyncName =
	// Companies
	"Company"
	| "CompanyGeneral"
	| "CompanyStyle"
	| "CompanyDirectory"
	| "CompanyPolicy"
	| "CompanyReseller"
	// Accounts
	| "Contact"
	| "Machine"
	| "Session"
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
export const classes: { [key in SyncName]: { new(): IRequestable } } = {
	// Companies
	"Company": Company,
	"CompanyGeneral": CompanyGeneral,
	"CompanyStyle": CompanyStyle,
	"CompanyDirectory": CompanyDirectory,
	"CompanyPolicy": CompanyPolicy,
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
export const storage: { [key in SyncName]: Map<ulong | guid | email | codified | string, IRequestable> } = {
	// Companies
	"Company": COMPANIES,
	"CompanyGeneral": COMPANIES,
	"CompanyStyle": COMPANIES,
	"CompanyDirectory": COMPANIES,
	"CompanyPolicy": COMPANIES,
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
	//clip: CLIP,
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
	parseTime: TIMESPAN_PARSE,
	phoneNumber: PHONE_PARSE,
	pluralize: PLURALIZE,
	singularize: SINGULARIZE,
	stringifyTime: TIMESPAN_STRINGIFY,
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
	toMapPredicate: JSON_TO_MAP_PREDICATE,
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
	CompanyPolicy,
	CompanyReseller,
	CompanyStyle,
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
	ProviderGeofenceBase,
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