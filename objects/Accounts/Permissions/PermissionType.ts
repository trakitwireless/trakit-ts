

/**
 * The kinds of permissions available for a UserPermission.
 */
export enum PermissionType {
	/**
	* Basic information about a {@link Company}.
	* This permissions is required to have access to other aspects of the company.
	* {@link Company}
	* {@link CompanyGeneral}
	*/
	companyGeneral = "companyGeneral",
	/**
	* Updating the company's {@link CompanyDirectory|directory} of {@link Contact}s.  Not the same as {@link PermissionType.contact}.
	*  <override skip="true" />
	* {@link CompanyDirectory}
	*/
	companyDirectory = "companyDirectory",
	/**
	* Company's {@link CompanyStyles|label and tag styles}.
	* {@link CompanyStyles}
	*/
	companyLabels = "companyLabels",
	/**
	* Company's {@link SessionPolicy} and {@link PasswordPolicy}.
	* {@link CompanyPolicies}
	*/
	companyPolicies = "companyPolicies",
	/**
	*  {@link CompanyReseller|White-labeler} specific settings.
	* {@link CompanyReseller}
	*/
	companyReseller = "companyReseller",
	/**
	* Access to add a new child {@link Company}.
	* {@link CompanyGeneral}
	*/
	companyCreate = "companyCreate",

	/**
	* Assets' {@link AssetGeneral|general properties} such as name = "* Assets' {@link AssetGeneral|general properties} such as name", icon, and labels.
	* {@link Asset}
	* {@link AssetGeneral}
	* {@link Person}
	* {@link PersonGeneral}
	* {@link Vehicle}
	* {@link VehicleGeneral}
	* {@link Trailer}
	* {@link TrailerGeneral}
	*/
	assetGeneral = "assetGeneral",
	/**
	* Assets' {@link AssetAdvanced|advanced properties} such as position = "* Assets' {@link AssetAdvanced|advanced properties} such as position", attributes, and status tags.
	* {@link AssetAdvanced}
	* {@link VehicleAdvanced}
	*/
	assetAdvanced = "assetAdvanced",
	/**
	*  {@link AssetMessage}s from assets and {@link AssetAlert}s.
	* {@link AssetMessage}
	* {@link PndMessage}
	*/
	assetMessage = "assetMessage",
	/**
	*  {@link Asset}'s {@link DispatchTask} order = "*  {@link Asset}'s {@link DispatchTask} order", turn by turn directions, and required route.
	*  <override skip="true" />
	* {@link AssetDispatch}
	*/
	assetDispatch = "assetDispatch",

	/**
	*  {@link Place} information.
	* {@link Place}
	* {@link Place}
	*/
	placeGeneral = "placeGeneral",

	/**
	*  {@link Provider} information like name = "*  {@link Provider} information like name", notes, and selected asset.
	* {@link Provider}
	* {@link ProviderGeneral}
	*/
	providerGeneral = "providerGeneral",
	/**
	* Raw {@link Provider} data like GPS coordinates and parsed ODB-II values.
	* {@link ProviderAdvanced}
	*/
	providerAdvanced = "providerAdvanced",
	/**
	* Sending and reading {@link Provider} commands.
	* {@link ProviderControl}
	*/
	providerControl = "providerControl",
	/**
	*  {@link Provider} configurations.
	* {@link ProviderConfig}
	* {@link ProviderConfiguration}
	* {@link ProviderConfigurationType}
	*/
	providerConfiguration = "providerConfiguration",
	/**
	* Legacy {@link Provider} configuration types.
	*  <override skip="true" />
	* {@link ProviderConfigurationType}
	* @deprecated Use .providerConfiguration instead
	*/
	providerConfigType = "providerConfigType",
	/**
	* Allows access to {@link Provider} logic scripts.
	* {@link ProviderScript}
	*/
	providerScript = "providerScript",
	/**
	* Sending and reading {@link Provider} commands.
	*  <override skip="true" />
	* {@link ProviderCommand}
	* @deprecated Use .providerControl instead
	*/
	providerCommand = "providerCommand",

	/**
	* Historical {@link Asset} details like breadcrumb trails.
	* {@link ReportResult}
	*/
	reportResult = "reportResult",
	/**
	*  {@link ReportTemplate} configurations.
	* {@link ReportTemplate}
	*/
	reportTemplate = "reportTemplate",
	/**
	*  {@link ReportSchedule}s used to automatically create {@link ReportResult}s overnight.
	* {@link ReportSchedule}
	*/
	reportSchedule = "reportSchedule",

	/**
	* General {@link UserGeneral|user information} such as name = "* General {@link UserGeneral|user information} such as name", contact information, and preferences.
	* {@link UserGeneral}
	*/
	userGeneral = "userGeneral",
	/**
	*  {@link UserAdvanced|User information} such as permissions and group membership.
	* {@link UserAdvanced}
	*/
	userAdvanced = "userAdvanced",
	/**
	*  {@link UserGroup} information for easy access control.
	* {@link UserGroup}
	*/
	userGroup = "userGroup",
	/**
	*  {@link Machine} information and permissions.
	* {@link Machine}
	*/
	machine = "machine",
	/**
	* Access to retrieve a list of active sessions and kill sessions.
	* {@link Tentacles.RespSession}
	* {@link Tentacles.RespSessionFull}
	*/
	session = "session",

	/**
	* Configured {@link Behaviour}.
	* {@link Behaviour}
	*/
	behaviour = "behaviour",
	/**
	* View and clear the log of debug messages for a {@link BehaviourScript} or {@link Behaviour}.
	* {@link BehaviourLog}
	*/
	behaviourLog = "behaviourLog",
	/**
	*  {@link BehaviourScript} logic.
	* {@link BehaviourScript}
	*/
	behaviourScript = "behaviourScript",

	/**
	*  {@link Asset}'s tasks information.
	* {@link DispatchTask}
	*/
	dispatchTask = "dispatchTask",
	/**
	* Pre-set routes = "* Pre-set routes", lists of {@link DispatchJob}s, and driving directions.
	* {@link DispatchTemplate}
	*/
	dispatchTemplate = "dispatchTemplate",

	/**
	*  {@link Contact} information.
	* {@link Contact}
	*/
	contact = "contact",

	/**
	* Hours of Service {@link HosCarrier|Carrier}s.
	* {@link HosCarrier}
	*  <override obsolete="true" deprecated="Feature retired" />
	*/
	hosCarrier = "hosCarrier",
	/**
	* Driver's {@link HosEvent|E-log event} records.
	* {@link HosEvent}
	*  <override obsolete="true" deprecated="Feature retired" />
	*/
	hosEvent = "hosEvent",
	/**
	* Driver {@link HosInspection|vehicle inspection} reports.
	* {@link HosInspection}
	*  <override obsolete="true" deprecated="Feature retired" />
	*/
	hosInspection = "hosInspection",

	/**
	* Historical {@link Vehicle} and {@link Trailer} maintenance work.
	* {@link MaintenanceJob}
	*/
	maintenanceJob = "maintenanceJob",
	/**
	* Recurring {@link MaintenanceJob}s for {@link Vehicle} and {@link Trailer}.
	* {@link MaintenanceSchedule}
	*/
	maintenanceSchedule = "maintenanceSchedule",

	/**
	* Rules definiting real-time analytic calculations.
	*  <override skip="true" />
	* {@link AnalyticRule}
	* @deprecated Feature retired
	*/
	analyticRule = "analyticRule",
	/**
	* Updates to the calculations of real-time analytics.
	*  <override skip="true" />
	* {@link AnalyticSummary}
	* @deprecated Feature retired
	*/
	analyticSummary = "analyticSummary",

	/**
	*  {@link Icon} information.
	* {@link Icon}
	*/
	icon = "icon",
	/**
	*  {@link Picture} information.
	* {@link Picture}
	*/
	picture = "picture",
	/**
	* Hosted {@link Document} information.
	* {@link Document}
	*/
	document = "document",

	/**
	* Profile used to generate {@link BillingReport} for a customer.
	* {@link BillingProfile}
	*/
	billingProfile = "billingProfile",
	/**
	* Billing rule for {@link Asset}s.
	* {@link BillableHostingRule}
	*/
	billingHosting = "billingHosting",
	/**
	* Discount rule for {@link Asset}s.
	* {@link BillableHostingDiscount}
	*  <override skip="true" />
	* @deprecated Feature retired
	*/
	billingDiscount = "billingDiscount",
	/**
	* Hardware License for {@link Provider}s.
	* {@link BillableHostingLicense}
	*/
	billingLicense = "billingLicense",
	/**
	* Generated bill for a {@link Company|customer}.
	* {@link BillingReport}
	*/
	billingReport = "billingReport",

	/**
	* Custom {@link FormTemplate|forms} to be filled.
	* {@link FormTemplate}
	*/
	formTemplate = "formTemplate",
	/**
	* Filled out {@link FormResult|forms}.
	* {@link FormResult}
	*/
	formResult = "formResult",

	/**
	* Some work that needs to be completed by an {@link Asset}.
	* Like a multi-step {@link DispatchTask}.
	* {@link DispatchJob}
	*/
	dispatchJob = "dispatchJob",
}