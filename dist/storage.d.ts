import { Contact } from './Accounts/Contact';
import { Machine } from './Accounts/Machine';
import { Session } from './Accounts/Session';
import { User } from './Accounts/User';
import { UserGroup } from './Accounts/UserGroup';
import { email, guid, ulong } from './API/Types';
import { Asset } from './Assets/Asset';
import { Behaviour } from './Behaviours/Behaviour';
import { BehaviourLog } from './Behaviours/BehaviourLog';
import { BehaviourScript } from './Behaviours/BehaviourScript';
import { BillingProfile } from './Billing/BillingProfile';
import { BillableHostingLicense } from './Billing/Hosting/BillableHostingLicense';
import { BillableHostingRule } from './Billing/Hosting/BillableHostingRule';
import { BillingReport } from './Billing/Report/BillingReport';
import { Company } from './Companies/Company';
import { DispatchJob } from './Dispatch/DispatchJob';
import { DispatchTask } from './Dispatch/DispatchTask';
import { Document } from './Hosting/Document';
import { FormResult } from './Hosting/FormResult';
import { FormTemplate } from './Hosting/FormTemplate';
import { Dashcam } from './Images/Dashcam';
import { Icon } from './Images/Icon';
import { Picture } from './Images/Picture';
import { MaintenanceJob } from './Maintenance/MaintenanceJob';
import { MaintenanceSchedule } from './Maintenance/MaintenanceSchedule';
import { AssetMessage } from './Messaging/AssetMessage';
import { Place } from './Places/Place';
import { ProviderConfig } from './Providers/Config/ProviderConfig';
import { ProviderRegistration } from './Providers/Config/ProviderRegistration';
import { ProviderScript } from './Providers/Config/ProviderScript';
import { ProviderConfiguration } from './Providers/Configuration/ProviderConfiguration';
import { ProviderConfigurationType } from './Providers/Configuration/ProviderConfigurationType';
import { Provider } from './Providers/Provider';
import { ReportResult } from './Reports/ReportResult';
import { ReportSchedule } from './Reports/ReportSchedule';
import { ReportTemplate } from './Reports/ReportTemplate';
/**
 *
 */
export declare const COMPANIES: Map<ulong, Company>;
/**
 *
 */
export declare const CONTACTS: Map<ulong, Contact>;
/**
 *
 */
export declare const MACHINES: Map<string, Machine>;
/**
 *
 */
export declare const USERS: Map<email, User>;
/**
 *
 */
export declare const GROUPS: Map<ulong, UserGroup>;
/**
 *
 */
export declare const SESSIONS: Map<string, Session>;
/**
 *
 */
export declare const ASSETS: Map<ulong, Asset>;
/**
 *
 */
export declare const MESSAGES: Map<ulong, AssetMessage>;
/**
 *
 */
export declare const BEHAVIOURS: Map<ulong, Behaviour>;
/**
 *
 */
export declare const BEHAVIOUR_SCRIPTS: Map<ulong, BehaviourScript>;
/**
 *
 */
export declare const BEHAVIOUR_LOGS: Map<ulong, BehaviourLog>;
/**
 *
 */
export declare const BILLING_PROFILES: Map<ulong, BillingProfile>;
/**
 *
 */
export declare const BILLING_REPORTS: Map<ulong, BillingReport>;
/**
 *
 */
export declare const BILLING_RULES: Map<ulong, BillableHostingRule>;
/**
 *
 */
export declare const BILLING_LICENSES: Map<ulong, BillableHostingLicense>;
/**
 *
 */
export declare const DISPATCH_TASKS: Map<ulong, DispatchTask>;
/**
 *
 */
export declare const DISPATCH_JOBS: Map<ulong, DispatchJob>;
/**
 *
 */
export declare const DOCUMENTS: Map<ulong, Document>;
/**
 *
 */
export declare const FORM_TEMPLATES: Map<ulong, FormTemplate>;
/**
 *
 */
export declare const FORM_RESULTS: Map<ulong, FormResult>;
/**
 *
 */
export declare const PICTURES: Map<ulong, Picture>;
/**
 *
 */
export declare const ICONS: Map<ulong, Icon>;
/**
 *
 */
export declare const DASHCAMS: Map<guid, Dashcam>;
/**
 *
 */
export declare const MAINTENANCE_SCHEDULES: Map<ulong, MaintenanceSchedule>;
/**
 *
 */
export declare const MAINTENANCE_JOBS: Map<ulong, MaintenanceJob>;
/**
 *
 */
export declare const PLACES: Map<ulong, Place>;
/**
 *
 */
export declare const PROVIDERS: Map<string, Provider>;
/**
 *
 */
export declare const PROVIDER_SCRIPTS: Map<ulong, ProviderScript>;
/**
 *
 */
export declare const PROVIDER_CONFIGS: Map<ulong, ProviderConfig>;
/**
 *
 */
export declare const PROVIDER_CONFIGURATION_TYPES: Map<ulong, ProviderConfigurationType>;
/**
 *
 */
export declare const PROVIDER_CONFIGURATIONS: Map<ulong, ProviderConfiguration>;
/**
 *
 */
export declare const PROVIDER_REGISTRATIONS: Map<string, ProviderRegistration>;
/**
 *
 */
export declare const REPORT_TEMPLATES: Map<ulong, ReportTemplate>;
/**
 *
 */
export declare const REPORT_SCHEDULES: Map<ulong, ReportSchedule>;
/**
 *
 */
export declare const REPORT_RESULTS: Map<ulong, ReportResult>;
//# sourceMappingURL=storage.d.ts.map