

	/**
	 * The types of subscriptions available using <see cref="subscribe"/>/<see cref="unsubscribe"/>.
	 * Each type has a different synchronization messages and objects.
	 */
	enum SubscriptionType {
		/**
		 * Assets' <see cref="AssetGeneral">general properties</see> such as name, icon, and labels.
		 * {@link AssetGeneral}
		 * {@link PersonGeneral}
		 * {@link VehicleGeneral}
		 * {@link TrailerGeneral}
		 */
		assetGeneral,
		/**
		 * Assets' <see cref="AssetAdvanced">advanced properties</see> such as position, attributes, and status tags.
		 * {@link AssetAdvanced}
		 * {@link VehicleAdvanced}
		 */
		assetAdvanced,
		/**
		 *  <see cref="AssetMessage"/>s between <see cref="Asset"/>s and <see cref="User"/>s.
		 * {@link AssetMessage}
		 */
		assetMessage,
		/**
		 * Assets' <see cref="AssetDispatch">current dispatch</see> such as  <see cref="DispatchJob"/>s and route progress.
		 * {@link AssetDispatch}
		 */
		assetDispatch,

		/**
		 * Assets' <see cref="DispatchTask"/> information.
		 * {@link DispatchTask}
		 */
		dispatchTask,
		/**
		 * Some work that needs to be done by performing one or more <see cref="DispatchStep"/>s.
		 * {@link DispatchJob}
		 */
		dispatchJob,

		/**
		 * Customized <see cref="FormTemplate">forms</see> to be filled.
		 * {@link FormTemplate}
		 */
		formTemplate,
		/**
		 *  <see cref="FormResult">Forms</see> that are completed and fully filled out.
		 * {@link FormResult}
		 */
		formResult,

		/**
		 *  <see cref="Place"/> information.
		 * {@link PlaceGeneral}
		 */
		placeGeneral,

		/**
		 * Providers' (device) <see cref="ProviderGeneral">general properties</see> such as name, notes, and selected <see cref="Asset"/>.
		 * {@link ProviderGeneral}
		 */
		providerGeneral,
		/**
		 * Raw provider (device) <see cref="ProviderAdvanced">data</see> like GPS coordinates and parsed ODB-II values.
		 * {@link ProviderAdvanced}
		 */
		providerAdvanced,
		/**
		 * Provider (device) configurations.
		 * {@link ProviderConfiguration}
		 * @deprecated Use providerConfig instead
		 */
		providerConfiguration,
		/**
		 * Provider (device) script logic.
		 * {@link ProviderScript}
		 */
		providerScript,
		/**
		 * Provider (device) configurations.
		 * {@link ProviderConfig}
		 */
		providerConfig,
		/**
		 * Provider (device) comamnds.
		 * {@link ProviderControl}
		 */
		providerControl,
		/**
		 * Pending Providers (devices) that have not yet been configured or provisioned.
		 * {@link ProviderRegistration}
		 */
		providerRegistration,

		/**
		 * Recurring maintenance work for <see cref="Vehicle"/>s and <see cref="Trailer"/>s.
		 * {@link MaintenanceSchedule}
		 */
		maintenanceSchedule,
		/**
		 * Historical <see cref="Vehicle"/> and <see cref="Trailer"/> maintenance work.
		 * {@link MaintenanceJob}
		 */
		maintenanceJob,

		/**
		 * Behaviour script logic.
		 * {@link BehaviourScript}
		 */
		behaviourScript,
		/**
		 * Configured behaviours.
		 * {@link Behaviour}
		 */
		behaviour,
		/**
		 * Behaviour log messages to help developers debug their <see cref="BehaviourScript"/>.
		 * {@link BehaviourLog}
		 */
		behaviourLog,

		/**
		 * Renaming and changing the nodes of a company.
		 * {@link CompanyGeneral}
		 */
		companyGeneral,
		/**
		 * Company's label and tag styles.
		 * {@link CompanyStyles}
		 */
		companyLabels,
		/**
		 * Company's <see cref="SessionPolicy"/> and <see cref="PasswordPolicy"/>.
		 * {@link CompanyPolicies}
		 */
		companyPolicies,
		 * **
		 * // Company's list of <see cref="Contact"/>s broken down by role.
		//* // {@link CompanyDirectory}
		 */
		//companyDirectory,
		/**
		 * A <see cref="Company"/>'s white-labelling details.
		 * {@link CompanyReseller}
		 */
		companyReseller,

		/**
		 * Profiles used to generate <see cref="BillingReport"/> for a customer.
		 * {@link BillingProfile}
		 */
		billingProfile,
		/**
		 * Billing rules for <see cref="Asset"/>s.
		 * {@link BillableHostingRule}
		 */
		billingHosting,
		/**
		 * Discount rules for <see cref="Asset"/>s.
		 * {@link BillableHostingDiscount}
		 */
		billingDiscount,
		/**
		 * Hardware licenses for <see cref="Provider"/>s.
		 * {@link BillableHostingLicense}
		 */
		billingLicense,
		/**
		 * Reports generated for a billee <see cref="Company"/>.
		 * {@link BillingReport}
		 */
		billingReport,

		/**
		 * Contact information used by <see cref="Asset"/>s and <see cref="User"/>s.
		 * {@link Contact}
		 */
		contact,

		/**
		 * Synchronizes icon information.
		 * {@link Icon}
		 */
		icon,
		/**
		 * Synchronizes picture information.
		 * {@link Picture}
		 */
		picture,
		/**
		 * Hosted document information.
		 * {@link Document}
		 */
		document,

		/**
		 * Report configurations.
		 * {@link ReportTemplate}
		 */
		reportTemplate,
		/**
		 * Schedules for reports that run automatically.
		 * {@link ReportSchedule}
		 */
		reportSchedule,
		/**
		 * Historical asset details like breadcrumb trails.
		 * {@link ReportResult}
		 */
		reportResult,

		/**
		 * General user information such as name, contact information, and preferences.
		 * {@link UserGeneral}
		 */
		userGeneral,
		/**
		 * User information such as permissions and group membership.
		 * {@link UserAdvanced}
		 */
		userAdvanced,
		/**
		 * Group information for easy access control.
		 * {@link UserGroup}
		 */
		userGroup,
		/**
		 * API Credentials information and permissions.
		 * {@link Machine}
		 */
		machine,
	}