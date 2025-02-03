

	/**
	 * The types of subscriptions available using {@link subscribe}/{@link unsubscribe}.
	 * Each type has a different synchronization messages and objects.
	 */
	enum SubscriptionType {
		/**
		 * Assets' {@link AssetGeneral|general properties} such as name, icon, and labels.
		 * {@link AssetGeneral}
		 * {@link PersonGeneral}
		 * {@link VehicleGeneral}
		 * {@link TrailerGeneral}
		 */
		assetGeneral,
		/**
		 * Assets' {@link AssetAdvanced|advanced properties} such as position, attributes, and status tags.
		 * {@link AssetAdvanced}
		 * {@link VehicleAdvanced}
		 */
		assetAdvanced,
		/**
		 *  {@link AssetMessage}s between {@link Asset}s and {@link User}s.
		 * {@link AssetMessage}
		 */
		assetMessage,
		/**
		 * Assets' {@link AssetDispatch|current dispatch} such as  {@link DispatchJob}s and route progress.
		 * {@link AssetDispatch}
		 */
		assetDispatch,

		/**
		 * Assets' {@link DispatchTask} information.
		 * {@link DispatchTask}
		 */
		dispatchTask,
		/**
		 * Some work that needs to be done by performing one or more {@link DispatchStep}s.
		 * {@link DispatchJob}
		 */
		dispatchJob,

		/**
		 * Customized {@link FormTemplate|forms} to be filled.
		 * {@link FormTemplate}
		 */
		formTemplate,
		/**
		 *  {@link FormResult|Forms} that are completed and fully filled out.
		 * {@link FormResult}
		 */
		formResult,

		/**
		 *  {@link Place} information.
		 * {@link PlaceGeneral}
		 */
		placeGeneral,

		/**
		 * Providers' (device) {@link ProviderGeneral|general properties} such as name, notes, and selected {@link Asset}.
		 * {@link ProviderGeneral}
		 */
		providerGeneral,
		/**
		 * Raw provider (device) {@link ProviderAdvanced|data} like GPS coordinates and parsed ODB-II values.
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
		 * Recurring maintenance work for {@link Vehicle}s and {@link Trailer}s.
		 * {@link MaintenanceSchedule}
		 */
		maintenanceSchedule,
		/**
		 * Historical {@link Vehicle} and {@link Trailer} maintenance work.
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
		 * Behaviour log messages to help developers debug their {@link BehaviourScript}.
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
		 * Company's {@link SessionPolicy} and {@link PasswordPolicy}.
		 * {@link CompanyPolicies}
		 */
		companyPolicies,
		 * **
		 * // Company's list of {@link Contact}s broken down by role.
		//* // {@link CompanyDirectory}
		 */
		//companyDirectory,
		/**
		 * A {@link Company}'s white-labelling details.
		 * {@link CompanyReseller}
		 */
		companyReseller,

		/**
		 * Profiles used to generate {@link BillingReport} for a customer.
		 * {@link BillingProfile}
		 */
		billingProfile,
		/**
		 * Billing rules for {@link Asset}s.
		 * {@link BillableHostingRule}
		 */
		billingHosting,
		/**
		 * Discount rules for {@link Asset}s.
		 * {@link BillableHostingDiscount}
		 */
		billingDiscount,
		/**
		 * Hardware licenses for {@link Provider}s.
		 * {@link BillableHostingLicense}
		 */
		billingLicense,
		/**
		 * Reports generated for a billee {@link Company}.
		 * {@link BillingReport}
		 */
		billingReport,

		/**
		 * Contact information used by {@link Asset}s and {@link User}s.
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