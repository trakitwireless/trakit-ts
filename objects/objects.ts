// "use strict";

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
} from './Accounts/Permissions/Authorizer';
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
import { CODIFY, } from "./API/Codifier";
import { FREEZE, KEYS } from "./API/Constants";
import { CONVERT, } from './API/Conversion';
import {
    FILESIZE_HELPER,
    NUMBER_GROUPS,
} from "./API/Files";
import {
    DOUGLASPEUCKER,
    IS_AN,
    IS_NOTHING,
    PASSWORD_DECODE,
    PASSWORD_ENCODE,
    PHONE_PARSE,
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
import { MERGE, } from "./API/Objects";
import { SearchPattern, } from "./API/SearchPattern";
import {
    TIMESPACE_PARSE,
    TIMESPACE_STRINGIFY,
    TimeSpan,
} from "./API/TimeSpan";
import { Timezone, } from "./API/Timezone";
import { TIMEZONE_FIND, } from "./API/Timezones";
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
import { BillableHostingDiscount } from "./Billing/Hosting/BillableHostingDiscount";
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
    PROVIDER_SCRIPTS,
    PROVIDERS,
    REPORT_RESULTS,
    REPORT_SCHEDULES,
    REPORT_TEMPLATES,
    SESSIONS,
    USERS,
} from "./Storage";

const version = (5.01);

export default {
    version,
    storage: {
        companies: COMPANIES,
    
        //#region Accounts
        contacts: CONTACTS,
        machines: MACHINES,
        users: USERS,
        userGroups: GROUPS,
        sessions: SESSIONS,
        //#endregion Accounts
        //#region Assets
        assets: ASSETS,
        assetMessages: MESSAGES,
        //#endregion Assets
        //#region Behaviours
        behaviours: BEHAVIOURS,
        behaviourScripts: BEHAVIOUR_SCRIPTS,
        behaviourLogs: BEHAVIOUR_LOGS,
        //#endregion Behaviours
        //#region Billing
        billingProfiles: BILLING_PROFILES,
        billingReports: BILLING_REPORTS,
        billableHostingRules: BILLING_RULES,
        billableHostingLicenses: BILLING_LICENSES,
        //#endregion Billing
        //#region Dispatch
        dispatchTasks: DISPATCH_TASKS,
        dispatchJobs: DISPATCH_JOBS,
        //#endregion Dispatch
        //#region Hosting
        documents: DOCUMENTS,
        formTemplates: FORM_TEMPLATES,
        formResults: FORM_RESULTS,
        //#endregion Hosting
        //#region Images
        pictures: PICTURES,
        icons: ICONS,
        //#endregion Images
        //#region Maintenance
        maintenanceSchedules: MAINTENANCE_SCHEDULES,
        maintenanceJobs: MAINTENANCE_JOBS,
        //#endregion Maintenance
        //#region Places
        places: PLACES,
        //#endregion Places
        //#region Providers
        providers: PROVIDERS,
        providerScripts: PROVIDER_SCRIPTS,
        providerConfigs: PROVIDER_CONFIGS,
        providerConfigurationTypes: PROVIDER_CONFIGURATION_TYPES,
        providerConfigurations: PROVIDER_CONFIGURATIONS,
        //#endregion Providers
        //#region Reports
        reportTemplates: REPORT_TEMPLATES,
        reportSchedules: REPORT_SCHEDULES,
        reportResults: REPORT_RESULTS,
        //#endregion Reports
    },

    //#region Utility, conversion, and encoding functions
    utility: {
        codify: CODIFY,
        guid: GUID,
        isNothing: IS_NOTHING,
        isntNaN: IS_AN,
        roundTo: ROUND_TO,
        merge: MERGE,
        parseTime: TIMESPACE_PARSE,
        stringifyTime: TIMESPACE_STRINGIFY,
        douglasPeucker: DOUGLASPEUCKER,
        numberGroups: NUMBER_GROUPS,
        fileSize: FILESIZE_HELPER,
        findTimeZoneById: TIMEZONE_FIND,
        phoneNumber: PHONE_PARSE,
    },
    SearchPattern,
    TimeSpan,
    Timezone,

    convert: CONVERT,
    encoding: {
        toPassword: PASSWORD_ENCODE,
        fromPassword: PASSWORD_DECODE,
    },
    //#endregion Utility, conversion, and encoding functions
    //#region Drawing and trigonometry
    /**
     * A utility library exposing algorithms for a flat plane.
     */
    geometry: {
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
    },
    Point,
    Radial,
    Rectangle,
    Size,
    //#endregion Drawing and trigonometry
    //#region Coordinates and geography
    geography: {
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
    },
    LatLng,
    LatLngBounds,
    Position,
    StreetAddress,
    //#endregion Coordinates and geography

    //#region Company
    ColourStyle,
    Company,
    CompanyGeneral,
    CompanyDirectory,
    CompanyPolicies,
    CompanyStyles,
    CompanyReseller,
    PasswordExpiryMode,
    PasswordPolicy,
    SessionMultiUser,
    SessionPolicy,
    LabelStyle,
    NotificationServerEmail,
    NotificationServerSms,
    //#endregion Company
    //#region Accounts
    authorizer: {
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
         * The {@link PermissionType}s which are calculated using labels.
         */
        simple: FREEZE(ARRAY_EXCEPT(KEYS(PermissionType) as PermissionType[], LABEL_BASED_PERMS)),
        /**
         * {@link PermissionType}s which do not use labels to calculate access.
         */
        complex: FREEZE(LABEL_BASED_PERMS),
    },
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
    //#endregion Accounts
    //#region Assets
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
    //#endregion Assets
    //#region Behaviours
    Behaviour,
    BehaviourLog,
    BehaviourLogType,
    BehaviourParameter,
    BehaviourParameterType,
    BehaviourScript,
    //#endregion Behaviours
    //#region Billing
    BillableHostingDiscount,
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
    //#endregion Billing
    //#region Dispatch
    DispatchDirection,
    DispatchJob,
    DispatchJobPriority,
    DispatchStep,
    DispatchStepState,
    DispatchStepStatus,
    DispatchTask,
    DispatchTaskStatus,
    //#endregion Dispatch
    //#region Hosting
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
    //#endregion Hosting
    //#region Images
    DashcamBase,
    Dashcam,
    DashcamLive,
    DashcamMediaType,
    Icon,
    IconGlyph,
    IconLabel,
    IconLayer,
    Picture,
    //#endregion Images
    //#region Maintenance
    
    //#endregion Maintenance
    //#region Places
    
    //#endregion Places
    //#region Providers
    
    //#endregion Providers
    //#region Reports
    
    //#endregion Reports
};