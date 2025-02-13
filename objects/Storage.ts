import { Contact } from './Accounts/Contact';
import { Machine } from './Accounts/Machine';
import { Session } from './Accounts/Session';
import { User } from './Accounts/User';
import { UserGroup } from './Accounts/UserGroup';
import { email, ulong } from './API/Types';
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
import { Icon } from './Images/Icon';
import { Picture } from './Images/Picture';
import { MaintenanceJob } from './Maintenance/MaintenanceJob';
import { MaintenanceSchedule } from './Maintenance/MaintenanceSchedule';
import { AssetMessage } from './Messaging/AssetMessage';
import { Place } from './Places/Place';
import { ProviderConfig } from './Providers/Config/ProviderConfig';
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
export const COMPANIES: Map<ulong, Company> = new Map;

//#region Accounts
/**
 * 
 */
export const CONTACTS: Map<ulong, Contact> = new Map;
/**
 * 
 */
export const MACHINES: Map<string, Machine> = new Map;
/**
 * 
 */
export const USERS: Map<email, User> = new Map;
/**
 * 
 */
export const GROUPS: Map<ulong, UserGroup> = new Map;
/**
 * 
 */
export const SESSIONS: Map<string, Session> = new Map;
//#endregion Accounts
//#region Assets
/**
 * 
 */
export const ASSETS: Map<ulong, Asset> = new Map;
/**
 * 
 */
export const MESSAGES: Map<ulong, AssetMessage> = new Map;
//#endregion Assets
//#region Behaviours
/**
 * 
 */
export const BEHAVIOURS: Map<ulong, Behaviour> = new Map;
/**
 * 
 */
export const BEHAVIOUR_SCRIPTS: Map<ulong, BehaviourScript> = new Map;
/**
 * 
 */
export const BEHAVIOUR_LOGS: Map<ulong, BehaviourLog> = new Map;
//#endregion Behaviours
//#region Billing
/**
 * 
 */
export const BILLING_PROFILES: Map<ulong, BillingProfile> = new Map;
/**
 * 
 */
export const BILLING_REPORTS: Map<ulong, BillingReport> = new Map;
/**
 * 
 */
export const BILLING_RULES: Map<ulong, BillableHostingRule> = new Map;
/**
 * 
 */
export const BILLING_LICENSES: Map<ulong, BillableHostingLicense> = new Map;
//#endregion Billing
//#region Dispatch
/**
 * 
 */
export const DISPATCH_TASKS: Map<ulong, DispatchTask> = new Map;
/**
 * 
 */
export const DISPATCH_JOBS: Map<ulong, DispatchJob> = new Map;
//#endregion Dispatch
//#region Hosting
/**
 * 
 */
export const DOCUMENTS: Map<ulong, Document> = new Map;
/**
 * 
 */
export const FORM_TEMPLATES: Map<ulong, FormTemplate> = new Map;
/**
 * 
 */
export const FORM_RESULTS: Map<ulong, FormResult> = new Map;
//#endregion Hosting
//#region Images
/**
 * 
 */
export const PICTURES: Map<ulong, Picture> = new Map;
/**
 * 
 */
export const ICONS: Map<ulong, Icon> = new Map;
//#endregion Images
//#region Maintenance
/**
 * 
 */
export const MAINTENANCE_SCHEDULES: Map<ulong, MaintenanceSchedule> = new Map;
/**
 * 
 */
export const MAINTENANCE_JOBS: Map<ulong, MaintenanceJob> = new Map;
//#endregion Maintenance
//#region Places
/**
 * 
 */
export const PLACES: Map<ulong, Place> = new Map;
//#endregion Places
//#region Providers
/**
 * 
 */
export const PROVIDERS: Map<string, Provider> = new Map;
/**
 * 
 */
export const PROVIDER_SCRIPTS: Map<ulong, ProviderScript> = new Map;
/**
 * 
 */
export const PROVIDER_CONFIGS: Map<ulong, ProviderConfig> = new Map;
/**
 * 
 */
export const PROVIDER_CONFIGURATION_TYPES: Map<ulong, ProviderConfigurationType> = new Map;
/**
 * 
 */
export const PROVIDER_CONFIGURATIONS: Map<ulong, ProviderConfiguration> = new Map;
//#endregion Providers
//#region Reports
/**
 * 
 */
export const REPORT_TEMPLATES: Map<ulong, ReportTemplate> = new Map;
/**
 * 
 */
export const REPORT_SCHEDULES: Map<ulong, ReportSchedule> = new Map;
/**
 * 
 */
export const REPORT_RESULTS: Map<ulong, ReportResult> = new Map;
//#endregion Reports
