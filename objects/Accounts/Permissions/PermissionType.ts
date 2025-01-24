

	/**
	 * The kinds of permissions available for a UserPermission.
	 */
	export enum PermissionType {
		 *  <summary sort="Company">
		 * Basic information about a <see cref="Company"/>.
		 * This permissions is required to have access to other aspects of the company.
		 * {@link Company}
		 * {@link CompanyGeneral}
		 */
		companyGeneral,
		 *  <summary sort="Company">
		 * Updating the company's <see cref="CompanyDirectory">directory</see> of <see cref="Contact"/>s.  Not the same as <see cref="PermissionType.contact"/>.
		 *  <override skip="true" />
		 * {@link CompanyDirectory}
		 */
		companyDirectory,
		 *  <summary sort="Company">
		 * Company's <see cref="CompanyStyles">label and tag styles</see>.
		 * {@link CompanyStyles}
		 */
		companyLabels,
		 *  <summary sort="Company">
		 * Company's <see cref="SessionPolicy"/> and <see cref="PasswordPolicy"/>.
		 * {@link CompanyPolicies}
		 */
		companyPolicies,
		 *  <summary sort="Company">
		 *  <see cref="CompanyReseller">White-labeler</see> specific settings.
		 * {@link CompanyReseller}
		 */
		companyReseller,
		 *  <summary sort="Company">
		 * Access to add a new child <see cref="Company"/>.
		 * {@link CompanyGeneral}
		 */
		companyCreate,

		 *  <summary sort="Assets">
		 * Assets' <see cref="AssetGeneral">general properties</see> such as name, icon, and labels.
		 * {@link Asset}
		 * {@link AssetGeneral}
		 * {@link Person}
		 * {@link PersonGeneral}
		 * {@link Vehicle}
		 * {@link VehicleGeneral}
		 * {@link Trailer}
		 * {@link TrailerGeneral}
		 */
		assetGeneral,
		 *  <summary sort="Assets">
		 * Assets' <see cref="AssetAdvanced">advanced properties</see> such as position, attributes, and status tags.
		 * {@link AssetAdvanced}
		 * {@link VehicleAdvanced}
		 */
		assetAdvanced,
		 *  <summary sort="Assets">
		 *  <see cref="AssetMessage"/>s from assets and <see cref="AssetAlert"/>s.
		 * {@link AssetMessage}
		 * {@link PndMessage}
		 */
		assetMessage,
		 *  <summary sort="Dispatch">
		 *  <see cref="Asset"/>'s <see cref="DispatchTask"/> order, turn by turn directions, and required route.
		 *  <override skip="true" />
		 * {@link AssetDispatch}
		 */
		assetDispatch,

		 *  <summary sort="Places">
		 *  <see cref="Place"/> information.
		 * {@link Place}
		 * {@link Place}
		 */
		placeGeneral,

		 *  <summary sort="Providers and Configurations">
		 *  <see cref="Provider"/> information like name, notes, and selected asset.
		 * {@link Provider}
		 * {@link ProviderGeneral}
		 */
		providerGeneral,
		 *  <summary sort="Providers and Configurations">
		 * Raw <see cref="Provider"/> data like GPS coordinates and parsed ODB-II values.
		 * {@link ProviderAdvanced}
		 */
		providerAdvanced,
		 *  <summary sort="Providers and Configurations">
		 * Sending and reading <see cref="Provider"/> commands.
		 * {@link ProviderControl}
		 */
		providerControl,
		 *  <summary sort="Providers and Configurations">
		 *  <see cref="Provider"/> configurations.
		 * {@link ProviderConfig}
		 * {@link ProviderConfiguration}
		 * {@link ProviderConfigurationType}
		 */
		providerConfiguration,
		 *  <summary sort="Providers and Configurations">
		 * Legacy <see cref="Provider"/> configuration types.
		 *  <override skip="true" />
		 * {@link ProviderConfigurationType}
		 * @deprecated Use .providerConfiguration instead
		 */
		providerConfigType,
		 *  <summary sort="Providers and Configurations">
		 * Allows access to <see cref="Provider"/> logic scripts.
		 * {@link ProviderScript}
		 */
		providerScript,
		 *  <summary sort="Providers and Configurations">
		 * Sending and reading <see cref="Provider"/> commands.
		 *  <override skip="true" />
		 * {@link ProviderCommand}
		 * @deprecated Use .providerControl instead
		 */
		providerCommand,

		 *  <summary sort="Reports">
		 * Historical <see cref="Asset"/> details like breadcrumb trails.
		 * {@link ReportResult}
		 */
		reportResult,
		 *  <summary sort="Reports">
		 *  <see cref="ReportTemplate"/> configurations.
		 * {@link ReportTemplate}
		 */
		reportTemplate,
		 *  <summary sort="Reports">
		 *  <see cref="ReportSchedule"/>s used to automatically create <see cref="ReportResult"/>s overnight.
		 * {@link ReportSchedule}
		 */
		reportSchedule,

		 *  <summary sort="Users and Groups">
		 * General <see cref="UserGeneral">user information</see> such as name, contact information, and preferences.
		 * {@link UserGeneral}
		 */
		userGeneral,
		 *  <summary sort="Users and Groups">
		 *  <see cref="UserAdvanced">User information</see> such as permissions and group membership.
		 * {@link UserAdvanced}
		 */
		userAdvanced,
		 *  <summary sort="Users and Groups">
		 *  <see cref="UserGroup"/> information for easy access control.
		 * {@link UserGroup}
		 */
		userGroup,
		 *  <summary sort="Users and Groups">
		 *  <see cref="Machine"/> information and permissions.
		 * {@link Machine}
		 */
		machine,
		 *  <summary sort="Users and Groups">
		 * Access to retrieve a list of active sessions and kill sessions.
		 * {@link Tentacles.RespSession}
		 * {@link Tentacles.RespSessionFull}
		 */
		session,

		 *  <summary sort="Behaviours">
		 * Configured <see cref="Behaviour"/>.
		 * {@link Behaviour}
		 */
		behaviour,
		 *  <summary sort="Behaviours">
		 * View and clear the log of debug messages for a <see cref="BehaviourScript"/> or <see cref="Behaviour"/>.
		 * {@link BehaviourLog}
		 */
		behaviourLog,
		 *  <summary sort="Behaviours">
		 *  <see cref="BehaviourScript"/> logic.
		 * {@link BehaviourScript}
		 */
		behaviourScript,

		 *  <summary sort="Dispatch">
		 *  <see cref="Asset"/>'s tasks information.
		 * {@link DispatchTask}
		 */
		dispatchTask,
		 *  <summary sort="Dispatch">
		 * Pre-set routes, lists of <see cref="DispatchJob"/>s, and driving directions.
		 * {@link DispatchTemplate}
		 */
		dispatchTemplate,

		 *  <summary sort="Contacts">
		 *  <see cref="Contact"/> information.
		 * {@link Contact}
		 */
		contact,

		 *  <summary sort="Hours of Service">
		 * Hours of Service <see cref="HosCarrier">Carrier</see>s.
		 * {@link HosCarrier}
		 *  <override obsolete="true" deprecated="Feature retired" />
		 */
		hosCarrier,
		 *  <summary sort="Hours of Service">
		 * Driver's <see cref="HosEvent">E-log event</see> records.
		 * {@link HosEvent}
		 *  <override obsolete="true" deprecated="Feature retired" />
		 */
		hosEvent,
		 *  <summary sort="Hours of Service">
		 * Driver <see cref="HosInspection">vehicle inspection</see> reports.
		 * {@link HosInspection}
		 *  <override obsolete="true" deprecated="Feature retired" />
		 */
		hosInspection,

		 *  <summary sort="Maintenance">
		 * Historical <see cref="Vehicle"/> and <see cref="Trailer"/> maintenance work.
		 * {@link MaintenanceJob}
		 */
		maintenanceJob,
		 *  <summary sort="Maintenance">
		 * Recurring <see cref="MaintenanceJob"/>s for <see cref="Vehicle"/> and <see cref="Trailer"/>.
		 * {@link MaintenanceSchedule}
		 */
		maintenanceSchedule,

		 *  <summary sort="Real-time Analytics">
		 * Rules definiting real-time analytic calculations.
		 *  <override skip="true" />
		 * {@link AnalyticRule}
		 * @deprecated Feature retired
		 */
		analyticRule,
		 *  <summary sort="Real-time Analytics">
		 * Updates to the calculations of real-time analytics.
		 *  <override skip="true" />
		 * {@link AnalyticSummary}
		 * @deprecated Feature retired
		 */
		analyticSummary,

		 *  <summary sort="File Hosting">
		 *  <see cref="Icon"/> information.
		 * {@link Icon}
		 */
		icon,
		 *  <summary sort="File Hosting">
		 *  <see cref="Picture"/> information.
		 * {@link Picture}
		 */
		picture,
		 *  <summary sort="File Hosting">
		 * Hosted <see cref="Document"/> information.
		 * {@link Document}
		 */
		document,

		 *  <summary sort="Billing">
		 * Profile used to generate <see cref="BillingReport"/> for a customer.
		 * {@link BillingProfile}
		 */
		billingProfile,
		 *  <summary sort="Billing">
		 * Billing rule for <see cref="Asset"/>s.
		 * {@link BillableHostingRule}
		 */
		billingHosting,
		 *  <summary sort="Billing">
		 * Discount rule for <see cref="Asset"/>s.
		 * {@link BillableHostingDiscount}
		 *  <override skip="true" />
		 * @deprecated Feature retired
		 */
		billingDiscount,
		 *  <summary sort="Billing">
		 * Hardware License for <see cref="Provider"/>s.
		 * {@link BillableHostingLicense}
		 */
		billingLicense,
		 *  <summary sort="Billing">
		 * Generated bill for a <see cref="Company">customer</see>.
		 * {@link BillingReport}
		 */
		billingReport,

		 *  <summary sort="File Hosting">
		 * Custom <see cref="FormTemplate">forms</see> to be filled.
		 * {@link FormTemplate}
		 */
		formTemplate,
		 *  <summary sort="File Hosting">
		 * Filled out <see cref="FormResult">forms</see>.
		 * {@link FormResult}
		 */
		formResult,

		 *  <summary sort="Dispatch">
		 * Some work that needs to be completed by an <see cref="Asset"/>.
		 * Like a multi-step <see cref="DispatchTask"/>.
		 * {@link DispatchJob}
		 */
		dispatchJob,
	}