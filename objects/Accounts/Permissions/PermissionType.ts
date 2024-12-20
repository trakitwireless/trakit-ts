

	/// <summary>
	/// The kinds of permissions available for a UserPermission.
	/// </summary>
	export enum PermissionType {
		/// <summary sort="Company">
		/// Basic information about a <see cref="Company"/>.
		/// This permissions is required to have access to other aspects of the company.
		/// </summary>
		/// <seealso cref="Company"/>
		/// <seealso cref="CompanyGeneral"/>
		companyGeneral,
		/// <summary sort="Company">
		/// Updating the company's <see cref="CompanyDirectory">directory</see> of <see cref="Contact"/>s.  Not the same as <see cref="PermissionType.contact"/>.
		/// </summary>
		/// <override skip="true" />
		/// <seealso cref="CompanyDirectory"/>
		companyDirectory,
		/// <summary sort="Company">
		/// Company's <see cref="CompanyStyles">label and tag styles</see>.
		/// </summary>
		/// <seealso cref="CompanyStyles"/>
		companyLabels,
		/// <summary sort="Company">
		/// Company's <see cref="SessionPolicy"/> and <see cref="PasswordPolicy"/>.
		/// </summary>
		/// <seealso cref="CompanyPolicies"/>
		companyPolicies,
		/// <summary sort="Company">
		/// <see cref="CompanyReseller">White-labeler</see> specific settings.
		/// </summary>
		/// <seealso cref="CompanyReseller"/>
		companyReseller,
		/// <summary sort="Company">
		/// Access to add a new child <see cref="Company"/>.
		/// </summary>
		/// <seealso cref="CompanyGeneral"/>
		companyCreate,

		/// <summary sort="Assets">
		/// Assets' <see cref="AssetGeneral">general properties</see> such as name, icon, and labels.
		/// </summary>
		/// <seealso cref="Asset"/>
		/// <seealso cref="AssetGeneral"/>
		/// <seealso cref="Person"/>
		/// <seealso cref="PersonGeneral"/>
		/// <seealso cref="Vehicle"/>
		/// <seealso cref="VehicleGeneral"/>
		/// <seealso cref="Trailer"/>
		/// <seealso cref="TrailerGeneral"/>
		assetGeneral,
		/// <summary sort="Assets">
		/// Assets' <see cref="AssetAdvanced">advanced properties</see> such as position, attributes, and status tags.
		/// </summary>
		/// <seealso cref="AssetAdvanced"/>
		/// <seealso cref="VehicleAdvanced"/>
		assetAdvanced,
		/// <summary sort="Assets">
		/// <see cref="AssetMessage"/>s from assets and <see cref="AssetAlert"/>s.
		/// </summary>
		/// <seealso cref="AssetMessage"/>
		/// <seealso cref="PndMessage"/>
		assetMessage,
		/// <summary sort="Dispatch">
		/// <see cref="Asset"/>'s <see cref="DispatchTask"/> order, turn by turn directions, and required route.
		/// </summary>
		/// <override skip="true" />
		/// <seealso cref="AssetDispatch"/>
		assetDispatch,

		/// <summary sort="Places">
		/// <see cref="Place"/> information.
		/// </summary>
		/// <seealso cref="Place"/>
		/// <seealso cref="Place"/>
		placeGeneral,

		/// <summary sort="Providers and Configurations">
		/// <see cref="Provider"/> information like name, notes, and selected asset.
		/// </summary>
		/// <seealso cref="Provider"/>
		/// <seealso cref="ProviderGeneral"/>
		providerGeneral,
		/// <summary sort="Providers and Configurations">
		/// Raw <see cref="Provider"/> data like GPS coordinates and parsed ODB-II values.
		/// </summary>
		/// <seealso cref="ProviderAdvanced"/>
		providerAdvanced,
		/// <summary sort="Providers and Configurations">
		/// Sending and reading <see cref="Provider"/> commands.
		/// </summary>
		/// <seealso cref="ProviderControl"/>
		providerControl,
		/// <summary sort="Providers and Configurations">
		/// <see cref="Provider"/> configurations.
		/// </summary>
		/// <seealso cref="ProviderConfig"/>
		/// <seealso cref="ProviderConfiguration"/>
		/// <seealso cref="ProviderConfigurationType"/>
		providerConfiguration,
		/// <summary sort="Providers and Configurations">
		/// Legacy <see cref="Provider"/> configuration types.
		/// </summary>
		/// <override skip="true" />
		/// <seealso cref="ProviderConfigurationType"/>
		[Obsolete("Use .providerConfiguration instead")]
		providerConfigType,
		/// <summary sort="Providers and Configurations">
		/// Allows access to <see cref="Provider"/> logic scripts.
		/// </summary>
		/// <seealso cref="ProviderScript"/>
		providerScript,
		/// <summary sort="Providers and Configurations">
		/// Sending and reading <see cref="Provider"/> commands.
		/// </summary>
		/// <override skip="true" />
		/// <seealso cref="ProviderCommand"/>
		[Obsolete("Use .providerControl instead")]
		providerCommand,

		/// <summary sort="Reports">
		/// Historical <see cref="Asset"/> details like breadcrumb trails.
		/// </summary>
		/// <seealso cref="ReportResult"/>
		reportResult,
		/// <summary sort="Reports">
		/// <see cref="ReportTemplate"/> configurations.
		/// </summary>
		/// <seealso cref="ReportTemplate"/>
		reportTemplate,
		/// <summary sort="Reports">
		/// <see cref="ReportSchedule"/>s used to automatically create <see cref="ReportResult"/>s overnight.
		/// </summary>
		/// <seealso cref="ReportSchedule"/>
		reportSchedule,

		/// <summary sort="Users and Groups">
		/// General <see cref="UserGeneral">user information</see> such as name, contact information, and preferences.
		/// </summary>
		/// <seealso cref="UserGeneral"/>
		userGeneral,
		/// <summary sort="Users and Groups">
		/// <see cref="UserAdvanced">User information</see> such as permissions and group membership.
		/// </summary>
		/// <seealso cref="UserAdvanced"/>
		userAdvanced,
		/// <summary sort="Users and Groups">
		/// <see cref="UserGroup"/> information for easy access control.
		/// </summary>
		/// <seealso cref="UserGroup"/>
		userGroup,
		/// <summary sort="Users and Groups">
		/// <see cref="Machine"/> information and permissions.
		/// </summary>
		/// <seealso cref="Machine"/>
		machine,
		/// <summary sort="Users and Groups">
		/// Access to retrieve a list of active sessions and kill sessions.
		/// </summary>
		/// <seealso cref="Tentacles.RespSession"/>
		/// <seealso cref="Tentacles.RespSessionFull"/>
		session,

		/// <summary sort="Behaviours">
		/// Configured <see cref="Behaviour"/>.
		/// </summary>
		/// <seealso cref="Behaviour"/>
		behaviour,
		/// <summary sort="Behaviours">
		/// View and clear the log of debug messages for a <see cref="BehaviourScript"/> or <see cref="Behaviour"/>.
		/// </summary>
		/// <seealso cref="BehaviourLog"/>
		behaviourLog,
		/// <summary sort="Behaviours">
		/// <see cref="BehaviourScript"/> logic.
		/// </summary>
		/// <seealso cref="BehaviourScript"/>
		behaviourScript,

		/// <summary sort="Dispatch">
		/// <see cref="Asset"/>'s tasks information.
		/// </summary>
		/// <seealso cref="DispatchTask"/>
		dispatchTask,
		/// <summary sort="Dispatch">
		/// Pre-set routes, lists of <see cref="DispatchJob"/>s, and driving directions.
		/// </summary>
		/// <seealso cref="DispatchTemplate"/>
		dispatchTemplate,

		/// <summary sort="Contacts">
		/// <see cref="Contact"/> information.
		/// </summary>
		/// <seealso cref="Contact"/>
		contact,

		/// <summary sort="Hours of Service">
		/// Hours of Service <see cref="HosCarrier">Carrier</see>s.
		/// </summary>
		/// <seealso cref="HosCarrier"/>
		/// <override obsolete="true" deprecated="Feature retired" />
		hosCarrier,
		/// <summary sort="Hours of Service">
		/// Driver's <see cref="HosEvent">E-log event</see> records.
		/// </summary>
		/// <seealso cref="HosEvent"/>
		/// <override obsolete="true" deprecated="Feature retired" />
		hosEvent,
		/// <summary sort="Hours of Service">
		/// Driver <see cref="HosInspection">vehicle inspection</see> reports.
		/// </summary>
		/// <seealso cref="HosInspection"/>
		/// <override obsolete="true" deprecated="Feature retired" />
		hosInspection,

		/// <summary sort="Maintenance">
		/// Historical <see cref="Vehicle"/> and <see cref="Trailer"/> maintenance work.
		/// </summary>
		/// <seealso cref="MaintenanceJob"/>
		maintenanceJob,
		/// <summary sort="Maintenance">
		/// Recurring <see cref="MaintenanceJob"/>s for <see cref="Vehicle"/> and <see cref="Trailer"/>.
		/// </summary>
		/// <seealso cref="MaintenanceSchedule"/>
		maintenanceSchedule,

		/// <summary sort="Real-time Analytics">
		/// Rules definiting real-time analytic calculations.
		/// </summary>
		/// <override skip="true" />
		/// <seealso cref="AnalyticRule"/>
		[Obsolete("Feature retired")]
		analyticRule,
		/// <summary sort="Real-time Analytics">
		/// Updates to the calculations of real-time analytics.
		/// </summary>
		/// <override skip="true" />
		/// <seealso cref="AnalyticSummary"/>
		[Obsolete("Feature retired")]
		analyticSummary,

		/// <summary sort="File Hosting">
		/// <see cref="Icon"/> information.
		/// </summary>
		/// <seealso cref="Icon"/>
		icon,
		/// <summary sort="File Hosting">
		/// <see cref="Picture"/> information.
		/// </summary>
		/// <seealso cref="Picture"/>
		picture,
		/// <summary sort="File Hosting">
		/// Hosted <see cref="Document"/> information.
		/// </summary>
		/// <seealso cref="Document"/>
		document,

		/// <summary sort="Billing">
		/// Profile used to generate <see cref="BillingReport"/> for a customer.
		/// </summary>
		/// <seealso cref="BillingProfile"/>
		billingProfile,
		/// <summary sort="Billing">
		/// Billing rule for <see cref="Asset"/>s.
		/// </summary>
		/// <seealso cref="BillableHostingRule"/>
		billingHosting,
		/// <summary sort="Billing">
		/// Discount rule for <see cref="Asset"/>s.
		/// </summary>
		/// <seealso cref="BillableHostingDiscount"/>
		/// <override skip="true" />
		[Obsolete("Feature retired")]
		billingDiscount,
		/// <summary sort="Billing">
		/// Hardware License for <see cref="Provider"/>s.
		/// </summary>
		/// <seealso cref="BillableHostingLicense"/>
		billingLicense,
		/// <summary sort="Billing">
		/// Generated bill for a <see cref="Company">customer</see>.
		/// </summary>
		/// <seealso cref="BillingReport"/>
		billingReport,

		/// <summary sort="File Hosting">
		/// Custom <see cref="FormTemplate">forms</see> to be filled.
		/// </summary>
		/// <seealso cref="FormTemplate"/>
		formTemplate,
		/// <summary sort="File Hosting">
		/// Filled out <see cref="FormResult">forms</see>.
		/// </summary>
		/// <seealso cref="FormResult"/>
		formResult,

		/// <summary sort="Dispatch">
		/// Some work that needs to be completed by an <see cref="Asset"/>.
		/// Like a multi-step <see cref="DispatchTask"/>.
		/// </summary>
		/// <seealso cref="DispatchJob"/>
		dispatchJob,
	}