

	/// <summary>
	/// The types of subscriptions available using <see cref="subscribe"/>/<see cref="unsubscribe"/>.
	/// Each type has a different synchronization messages and objects.
	/// </summary>
	public enum SubscriptionType {
		/// <summary>
		/// Assets' <see cref="AssetGeneral">general properties</see> such as name, icon, and labels.
		/// </summary>
		/// <seealso cref="AssetGeneral"/>
		/// <seealso cref="PersonGeneral"/>
		/// <seealso cref="VehicleGeneral"/>
		/// <seealso cref="TrailerGeneral"/>
		assetGeneral,
		/// <summary>
		/// Assets' <see cref="AssetAdvanced">advanced properties</see> such as position, attributes, and status tags.
		/// </summary>
		/// <seealso cref="AssetAdvanced"/>
		/// <seealso cref="VehicleAdvanced"/>
		assetAdvanced,
		/// <summary>
		/// <see cref="AssetMessage"/>s between <see cref="Asset"/>s and <see cref="User"/>s.
		/// </summary>
		/// <seealso cref="AssetMessage"/>
		assetMessage,
		/// <summary>
		/// Assets' <see cref="AssetDispatch">current dispatch</see> such as  <see cref="DispatchJob"/>s and route progress.
		/// </summary>
		/// <seealso cref="AssetDispatch"/>
		assetDispatch,

		/// <summary>
		/// Assets' <see cref="DispatchTask"/> information.
		/// </summary>
		/// <seealso cref="DispatchTask"/>
		dispatchTask,
		/// <summary>
		/// Some work that needs to be done by performing one or more <see cref="DispatchStep"/>s.
		/// </summary>
		/// <seealso cref="DispatchJob"/>
		dispatchJob,

		/// <summary>
		/// Customized <see cref="FormTemplate">forms</see> to be filled.
		/// </summary>
		/// <seealso cref="FormTemplate"/>
		formTemplate,
		/// <summary>
		/// <see cref="FormResult">Forms</see> that are completed and fully filled out.
		/// </summary>
		/// <seealso cref="FormResult"/>
		formResult,

		/// <summary>
		/// <see cref="Place"/> information.
		/// </summary>
		/// <seealso cref="PlaceGeneral"/>
		placeGeneral,

		/// <summary>
		/// Providers' (device) <see cref="ProviderGeneral">general properties</see> such as name, notes, and selected <see cref="Asset"/>.
		/// </summary>
		/// <seealso cref="ProviderGeneral"/>
		providerGeneral,
		/// <summary>
		/// Raw provider (device) <see cref="ProviderAdvanced">data</see> like GPS coordinates and parsed ODB-II values.
		/// </summary>
		/// <seealso cref="ProviderAdvanced"/>
		providerAdvanced,
		/// <summary>
		/// Provider (device) configurations.
		/// </summary>
		/// <seealso cref="ProviderConfiguration"/>
		[Obsolete("Use providerConfig instead")]
		providerConfiguration,
		/// <summary>
		/// Provider (device) script logic.
		/// </summary>
		/// <seealso cref="ProviderScript"/>
		providerScript,
		/// <summary>
		/// Provider (device) configurations.
		/// </summary>
		/// <seealso cref="ProviderConfig"/>
		providerConfig,
		/// <summary>
		/// Provider (device) comamnds.
		/// </summary>
		/// <seealso cref="ProviderControl"/>
		providerControl,
		/// <summary>
		/// Pending Providers (devices) that have not yet been configured or provisioned.
		/// </summary>
		/// <seealso cref="ProviderRegistration"/>
		providerRegistration,

		/// <summary>
		/// Recurring maintenance work for <see cref="Vehicle"/>s and <see cref="Trailer"/>s.
		/// </summary>
		/// <seealso cref="MaintenanceSchedule"/>
		maintenanceSchedule,
		/// <summary>
		/// Historical <see cref="Vehicle"/> and <see cref="Trailer"/> maintenance work.
		/// </summary>
		/// <seealso cref="MaintenanceJob"/>
		maintenanceJob,

		/// <summary>
		/// Behaviour script logic.
		/// </summary>
		/// <seealso cref="BehaviourScript"/>
		behaviourScript,
		/// <summary>
		/// Configured behaviours.
		/// </summary>
		/// <seealso cref="Behaviour"/>
		behaviour,
		/// <summary>
		/// Behaviour log messages to help developers debug their <see cref="BehaviourScript"/>.
		/// </summary>
		/// <seealso cref="BehaviourLog"/>
		behaviourLog,

		/// <summary>
		/// Renaming and changing the nodes of a company.
		/// </summary>
		/// <seealso cref="CompanyGeneral"/>
		companyGeneral,
		/// <summary>
		/// Company's label and tag styles.
		/// </summary>
		/// <seealso cref="CompanyStyles"/>
		companyLabels,
		/// <summary>
		/// Company's <see cref="SessionPolicy"/> and <see cref="PasswordPolicy"/>.
		/// </summary>
		/// <seealso cref="CompanyPolicies"/>
		companyPolicies,
		///// <summary>
		///// Company's list of <see cref="Contact"/>s broken down by role.
		///// </summary>
		///// <seealso cref="CompanyDirectory"/>
		//companyDirectory,
		/// <summary>
		/// A <see cref="Company"/>'s white-labelling details.
		/// </summary>
		/// <seealso cref="CompanyReseller"/>
		companyReseller,

		/// <summary>
		/// Profiles used to generate <see cref="BillingReport"/> for a customer.
		/// </summary>
		/// <seealso cref="BillingProfile"/>
		billingProfile,
		/// <summary>
		/// Billing rules for <see cref="Asset"/>s.
		/// </summary>
		/// <seealso cref="BillableHostingRule"/>
		billingHosting,
		/// <summary>
		/// Discount rules for <see cref="Asset"/>s.
		/// </summary>
		/// <seealso cref="BillableHostingDiscount"/>
		billingDiscount,
		/// <summary>
		/// Hardware licenses for <see cref="Provider"/>s.
		/// </summary>
		/// <seealso cref="BillableHostingLicense"/>
		billingLicense,
		/// <summary>
		/// Reports generated for a billee <see cref="Company"/>.
		/// </summary>
		/// <seealso cref="BillingReport"/>
		billingReport,

		/// <summary>
		/// Contact information used by <see cref="Asset"/>s and <see cref="User"/>s.
		/// </summary>
		/// <seealso cref="Contact"/>
		contact,

		/// <summary>
		/// Synchronizes icon information.
		/// </summary>
		/// <seealso cref="Icon"/>
		icon,
		/// <summary>
		/// Synchronizes picture information.
		/// </summary>
		/// <seealso cref="Picture"/>
		picture,
		/// <summary>
		/// Hosted document information.
		/// </summary>
		/// <seealso cref="Document"/>
		document,

		/// <summary>
		/// Report configurations.
		/// </summary>
		/// <seealso cref="ReportTemplate"/>
		reportTemplate,
		/// <summary>
		/// Schedules for reports that run automatically.
		/// </summary>
		/// <seealso cref="ReportSchedule"/>
		reportSchedule,
		/// <summary>
		/// Historical asset details like breadcrumb trails.
		/// </summary>
		/// <seealso cref="ReportResult"/>
		reportResult,

		/// <summary>
		/// General user information such as name, contact information, and preferences.
		/// </summary>
		/// <seealso cref="UserGeneral"/>
		userGeneral,
		/// <summary>
		/// User information such as permissions and group membership.
		/// </summary>
		/// <seealso cref="UserAdvanced"/>
		userAdvanced,
		/// <summary>
		/// Group information for easy access control.
		/// </summary>
		/// <seealso cref="UserGroup"/>
		userGroup,
		/// <summary>
		/// API Credentials information and permissions.
		/// </summary>
		/// <seealso cref="Machine"/>
		machine,
	}