

	/**
	 * The possible errors returned by the system.
	 */
	enum ErrorCode : ushort {
		 *  <summary sort="">
		 * Success!
		 * Operation completed without error.
		 */
		success = 0,
		 *  <summary sort="">
		 * An unknown error, or some kind or error by the client.
		 */
		unknown,
		 *  <summary sort="">
		 * Service error not because of client input.
		 */
		service,
		 *  <summary sort="">
		 * Invalid data.
		 * Client input could not be properly parsed.
		 */
		invalidData,
		 *  <summary sort="">
		 * Not a valid <see cref="PermissionType"/>.
		 * @deprecated
		 */
		invalidPermission,
		 *  <summary sort="">
		 * Permission denied.
		 * The operation not successful because access is restricted.
		 */
		permissionDenied,
		 *  <summary sort="">
		 * Version keys sent with request do not match service version.
		 * In these cases, treat the service version as most recent.
		 */
		wrongVersionKey,
		 *  <summary sort="Users and Groups">
		 *  <see cref="User"/>'s session is expired or unknown.
		 */
		sessionExpired,
		 *  <summary sort="Users and Groups">
		 * Please login before all other operations.
		 */
		userNotLoggedIn,
		 *  <summary sort="Users and Groups">
		 *  <see cref="User"/>'s session was forcibly killed by another user, or by <see cref="SessionPolicy"/>'s rules.
		 */
		sessionKilled,
		 *  <summary sort="Users and Groups">
		 * The session has ended.
		 */
		loggedOut,
		 *  <summary sort="Users and Groups">
		 * Invalid credentials.
		 *  <remarks>
		 * Is your caps-lock on?
		 *  </remarks>
		 */
		invalidCredentials,
		 *  <summary sort="Users and Groups">
		 * The given client UserAgent is not allowed.
		 */
		applicationNotAllowed,
		 *  <summary sort="Users and Groups">
		 * IPAddress not allowed.
		 * IP restrictions are in place, and the client IP is not in the allowed list.
		 */
		ipNotAllowed,
		 *  <summary sort="Users and Groups">
		 * Session is active from another client, and the <see cref="SessionPolicy"/>'s rules are set to <see cref="MultiUserPolicy.deny"/>.
		 */
		multiUserDenied,
		 *  <summary sort="Users and Groups">
		 * Password doesn't comply with the password policy.
		 * See the <see cref="PasswordPolicy"/> for a reason as to why your password does not meet the criteria.
		 */
		noncompliantPassword,
		 *  <summary sort="Users and Groups">
		 * Your password has expired.  Please change your password.
		 * An expired password does not mean your session has expired.
		 * If you create a new session, it will ask you to update your password again.
		 */
		passwordExpired,
		 *  <summary sort="Users and Groups">
		 * When changing a password, it must not be the same as the previous password.
		 */
		samePassword,
		 *  <summary sort="Users and Groups">
		 * Unable to Kill the session.
		 * @deprecated
		 */
		killSessionFailed,
		 *  <summary sort="Users and Groups">
		 * Session not found.
		 */
		sessionNotFound,
		 *  <summary sort="Assets">
		 *  <see cref="Asset"/> not found.
		 */
		assetNotFound,
		 *  <summary sort="Assets">
		 *  <see cref="Asset"/> not deleted.
		 */
		assetNotDeleted,
		 *  <summary sort="Assets">
		 * One or more <see cref="Asset"/>s in the list not found.
		 */
		assetsListNotFound,
		 *  <summary sort="Behaviours">
		 *  <see cref="BehaviourScript"/> not found.
		 */
		behaviourScriptNotFound,
		 *  <summary sort="Behaviours">
		 *  <see cref="BehaviourScript"/> not deleted.
		 */
		behaviourScriptNotDeleted,
		 *  <summary sort="Behaviours">
		 *  <see cref="BehaviourScript"/> currently implemented by one or more <see cref="Behaviour"/>s.
		 * In order to delete a <see cref="BehaviourScript"/>, all <see cref="Behaviour"/>s implementing the script must be deleted first.
		 */
		behaviourScriptInUse,
		 *  <summary sort="Behaviours">
		 *  <see cref="Behaviour"/> not found.
		 */
		behaviourNotFound,
		 *  <summary sort="Behaviours">
		 *  <see cref="Behaviour"/> not deleted.
		 */
		behaviourNotDeleted,
		 *  <summary sort="Companies">
		 *  <see cref="Company"/> not found.
		 */
		companyNotFound,
		 *  <summary sort="Companies">
		 *  <see cref="Company"/> not deleted.
		 */
		companyNotDeleted,
		 *  <summary sort="Users and Groups">
		 *  <see cref="UserGroup"/> not found.
		 */
		userGroupNotFound,
		 *  <summary sort="Contacts">
		 *  <see cref="Contact"/> not found.
		 */
		contactNotFound,
		 *  <summary sort="Contacts">
		 *  <see cref="Contact"/> not deleted.
		 */
		contactNotDeleted,
		 *  <summary sort="File Hosting">
		 *  <see cref="Icon"/> not found.
		 */
		iconNotFound,
		 *  <summary sort="File Hosting">
		 *  <see cref="Icon"/> not deleted.
		 */
		iconNotDeleted,
		 *  <summary sort="Maintenance">
		 *  <see cref="MaintenanceJob"/> not found.
		 */
		maintenanceJobNotFound,
		 *  <summary sort="Maintenance">
		 *  <see cref="MaintenanceJob"/> not deleted.
		 */
		maintenanceJobNotDeleted,
		 *  <summary sort="Maintenance">
		 *  <see cref="MaintenanceSchedule"/> not found.
		 */
		maintenanceScheduleNotFound,
		 *  <summary sort="Maintenance">
		 *  <see cref="MaintenanceSchedule"/> not deleted.
		 */
		maintenanceScheduleNotDeleted,
		 *  <summary sort="Maintenance">
		 *  <see cref="MaintenanceSchedule"/> currently in use by one or more <see cref="MaintenanceJob"/>s.
		 * In order to delete a <see cref="MaintenanceSchedule"/>, all <see cref="MaintenanceJob"/>s referencing this schedule must be deleted first.
		 * @deprecated
		 */
		maintenanceScheduleInUse,
		 *  <summary sort="Places">
		 *  <see cref="Place"/> not found.
		 */
		placeNotFound,
		 *  <summary sort="Places">
		 *  <see cref="Place"/> not deleted.
		 */
		placeNotDeleted,
		 *  <summary sort="Places">
		 * One or more <see cref="Place"/>s in the list not found.
		 */
		placesListNotFound,
		 *  <summary sort="Providers and Configurations">
		 *  <see cref="Provider"/> not found.
		 */
		providerNotFound,
		 *  <summary sort="Providers and Configurations">
		 *  <see cref="Provider"/> not deleted.
		 */
		providerNotDeleted,
		 *  <summary sort="Providers and Configurations">
		 * One or more <see cref="Provider"/>s in the list not found.
		 */
		providersListNotFound,
		 *  <summary sort="Providers and Configurations">
		 * Cannot access deleted <see cref="Provider"/>.
		 * @deprecated Throws providerNotFound instead
		 */
		deletedProvider,
		 *  <summary sort="Providers and Configurations">
		 *  <see cref="ProviderConfigurationType"/> not found.
		 */
		providerConfigurationTypeNotFound,
		 *  <summary sort="Providers and Configurations">
		 *  <see cref="ProviderConfig"/> or <see cref="ProviderConfiguration"/> not found.
		 */
		providerConfigurationNotFound,
		 *  <summary sort="Providers and Configurations">
		 *  <see cref="ProviderConfig"/> or <see cref="ProviderConfiguration"/> not deleted.
		 */
		providerConfigurationNotDeleted,
		 *  <summary sort="Providers and Configurations">
		 *  <see cref="ProviderConfig"/> or <see cref="ProviderConfiguration"/> currently in use by one or more <see cref="Provider"/>s.
		 * In order to delete a <see cref="ProviderConfig"/>/<see cref="ProviderConfiguration"/>, all <see cref="Provider"/>s using the configuration must be deleted first, or have their configuration changed.
		 */
		providerConfigurationInUse,
		 *  <summary sort="Providers and Configurations">
		 * Invalid <see cref="ProviderConfiguration"/> options.
		 */
		invalidConfigurationOptions,
		 *  <summary sort="Reports">
		 *  <see cref="ReportTemplate"/> not found.
		 */
		reportTemplateNotFound,
		 *  <summary sort="Reports">
		 *  <see cref="ReportTemplate"/> not deleted.
		 */
		reportTemplateNotDeleted,
		 *  <summary sort="Users and Groups">
		 *  <see cref="User"/> not found.
		 */
		userNotFound,
		 *  <summary sort="Users and Groups">
		 *  <see cref="User"/> not deleted.
		 */
		userNotDeleted,
		 *  <summary sort="Users and Groups">
		 * Cannot access deleted <see cref="User"/>.
		 * @deprecated Throws userNotFound instead
		 */
		deletedUser,
		 *  <summary sort="Users and Groups">
		 * Cannot kill your own Session, or delete/disable your own <see cref="User"/>.
		 *  <remarks>
		 * Don't do it! You have so much to live for!
		 *  </remarks>
		 */
		suicide,
		 *  <summary sort="Companies">
		 *  <see cref="CompanyLabels.labels"/> codes must be unique.
		 * @deprecated
		 */
		labelsListNotUnique,
		 *  <summary sort="Companies">
		 *  <see cref="CompanyLabels.tags"/> codes must be unique.
		 * @deprecated
		 */
		tagsListNotUnique,
		 *  <summary sort="Users and Groups">
		 * One or more <see cref="UserGroup"/>s in the list not found.
		 */
		userGroupsListNotFound,
		 *  <summary sort="">
		 * Unknown command.
		 *  <remarks>
		 * What are you trying to do genius?
		 *  </remarks>
		 */
		unknownCommand,
		 *  <summary sort="">
		 *  <see cref="Timezone"/> not found.
		 */
		timezoneNotFound,
		 *  <summary sort="Assets">
		 *  <see cref="Message"/> not found.
		 */
		assetMessageNotFound,
		 *  <summary sort="Dispatch">
		 *  <see cref="DispatchTask"/> not found.
		 */
		dispatchTaskNotFound,
		 *  <summary sort="Users and Groups">
		 *  <see cref="UserGroup"/> currently in use by one or more <see cref="User"/>s.
		 * In order to delete a <see cref="UserGroup"/>, all <see cref="User"/>s must first be removed as members.
		 */
		userGroupInUse,
		 *  <summary sort="Users and Groups">
		 *  <see cref="UserGroup"/> not deleted.
		 */
		userGroupNotDeleted,
		 *  <summary sort="Reports">
		 *  <see cref="ReportResult"/> not found.
		 */
		reportResultNotFound,
		 *  <summary sort="File Hosting">
		 *  <see cref="Picture"/> not found.
		 */
		pictureNotFound,
		 *  <summary sort="File Hosting">
		 * One or more <see cref="Picture"/>s in the list not found.
		 */
		picturesListNotFound,
		 *  <summary sort="File Hosting">
		 *  <see cref="Picture"/> not deleted.
		 */
		pictureNotDeleted,
		 *  <summary sort="Users and Groups">
		 * Unable to perform operation because resulting <see cref="UserPermission"/>s would be greater than your own.
		 */
		permissionEscalation,
		 *  <summary sort="Users and Groups">
		 * A <see cref="User"/> with this login already exists.
		 */
		userAlreadyExists,
		 *  <summary sort="Users and Groups">
		 * Session or connection not allowed due to flooding.
		 */
		sessionThrottled,
		 *  <summary sort="Users and Groups">
		 * One or more <see cref="User"/>s in the list not found.
		 */
		usersListNotFound,
		 *  <summary sort="Reports">
		 *  <see cref="ReportResult"/> not deleted.
		 */
		reportResultNotDeleted,
		 *  <summary sort="Hours of Service">
		 *  <see cref="HosCarrier"/> not found.
		 */
		carrierNotFound,
		 *  <summary sort="Hours of Service">
		 *  <see cref="HosCarrier"/> not deleted.
		 */
		carrierNotDeleted,
		 *  <summary sort="Hours of Service">
		 *  <see cref="HosInspection"/> not found.
		 */
		inspectionNotFound,
		 *  <summary sort="Hours of Service">
		 *  <see cref="HosInspection"/> not deleted.
		 */
		inspectionNotDeleted,

		 *  <summary sort="Dispatch">
		 * There was an error retrieving the address' coordinates.
		 * Check the <c>errorDetails</c> for more information.
		 */
		geocoderError,
		 *  <summary sort="Dispatch">
		 * No coordinates could be found for the given address.
		 * Ensure the address is correct, or try again without postal code.
		 */
		geocoderNotFound,
		 *  <summary sort="Dispatch">
		 * There was an error calculating the directions or too many stops were given.
		 * Check the <c>errorDetails</c> for more information.
		 */
		directionsError,
		 *  <summary sort="Dispatch">
		 * Directions could not be calculated between two or more stops.
		 * Ensure the each stop is correct, or try a shorter route.
		 */
		directionsNotFound,

		 *  <summary sort="Hours of Service">
		 *  <see cref="HosEvent"/> not found.
		 */
		elogNotFound,

		 *  <summary sort="Users and Groups">
		 *  <see cref="User"/> has been disabled.
		 */
		userDisabled,

		 *  <summary sort="Providers and Configurations">
		 * Trying to remove an expired or completed <see cref="ProviderRegistration"/>.
		 *  <remarks>
		 * For GatekeeperType commands, <see cref="Provider"/>'s <see cref="DataName.REGISTRATION_ID">registration identifier</see> is invalid or not found.
		 *  </remarks>
		 */
		invalidRegistration,
		 *  <summary sort="Providers and Configurations">
		 * Verification hash does not match <see cref="Provider"/>'s.
		 *  <remarks>
		 * For GatekeeperType commands only.
		 *  </remarks>
		 *  <override skip="true" />
		 */
		invalidHash,
		 *  <summary sort="Providers and Configurations">
		 * Unknown or invalid <see cref="ProviderRegistration.code"/>.
		 *  <remarks>
		 * Used exclusively by the provisioning service.
		 *  </remarks>
		 *  <override skip="true" />
		 */
		invalidVerification,
		 *  <summary sort="Providers and Configurations">
		 *  <see cref="ProviderRegistration"/> timeout has elapsed.
		 *  <remarks>
		 * Used exclusively by the provisioning service.
		 *  </remarks>
		 */
		verifyTimeout,

		 *  <summary sort="File Hosting">
		 * Unsupported MIME type.
		 */
		invalidMime,
		 *  <summary sort="File Hosting">
		 * File is too large.
		 */
		filesizeExceeded,

		 *  <summary sort="Providers and Configurations">
		 * Unknown or invalid <see cref="ProviderType"/>.
		 * @deprecated Use invalidData instead
		 */
		invalidProviderType,

		 *  <summary sort="Reports">
		 *  <see cref="ReportSchedule"/> not found.
		 */
		reportScheduleNotFound,
		 *  <summary sort="Reports">
		 *  <see cref="ReportSchedule"/> not deleted.
		 */
		reportScheduleNotDeleted,

		 *  <summary sort="Reports">
		 *  <see cref="ReportResult"/> not ready to serve <see cref="ReportDataSummaryInstance"/> or <see cref="ReportDataBreakdownInstance"/> data.
		 */
		reportResultNotReady,

		 *  <summary sort="Assets">
		 *  <see cref="Asset"/> suspended.
		 */
		assetSuspended,
		 *  <summary sort="Assets">
		 *  <see cref="Asset"/> not suspended.
		 */
		assetNotSuspended,

		 *  <summary sort="Providers and Configurations">
		 *  <see cref="Provider"/> suspended.
		 */
		providerSuspended,
		 *  <summary sort="Providers and Configurations">
		 *  <see cref="Provider"/> not suspended.
		 */
		providerNotSuspended,

		 *  <summary sort="Dispatch">
		 *  <see cref="DispatchTask"/> not deleted.
		 */
		dispatchTaskNotDeleted,
		 *  <summary sort="Assets">
		 *  <see cref="Message"/> not deleted.
		 */
		assetMessageNotDeleted,

		 *  <summary sort="Providers and Configurations">
		 *  <see cref="ProviderScript"/> not found.
		 */
		providerScriptNotFound,
		 *  <summary sort="Providers and Configurations">
		 *  <see cref="ProviderScript"/> not deleted.
		 */
		providerScriptNotDeleted,
		 *  <summary sort="Providers and Configurations">
		 *  <see cref="ProviderScript"/> currently in use by one or more <see cref="ProviderConfig"/>s.
		 * In order to delete a <see cref="ProviderScript"/>, all <see cref="ProviderConfig"/>s must first be deleted.
		 */
		providerScriptInUse,

		 *  <summary sort="">
		 * Command not processed due to flooding.
		 */
		commandThrottled,

		 *  <summary sort="White-labelling">
		 *  <see cref="CompanyReseller"/> not found.
		 */
		resellerNotFound,
		 *  <summary sort="White-labelling">
		 *  <see cref="CompanyReseller"/> not deleted.
		 */
		resellerNotDeleted,

		 *  <summary sort="">
		 * The long-running operation is queued, and will run when resources are ready.
		 */
		operationPending,
		 *  <summary sort="">
		 * The long-running operation is currently executing.
		 */
		operationRunning,
		 *  <summary sort="">
		 * The long-running operation has failed; see <c>message</c> and <c>errorDetails</c> for more information.
		 */
		operationFailed,

		 *  <summary sort="Billing">
		 *  <see cref="BillingProfile"/> not found.
		 */
		billingProfileNotFound,
		 *  <summary sort="Billing">
		 *  <see cref="BillingProfile"/> not deleted.
		 */
		billingProfileNotDeleted,
		 *  <summary sort="Billing">
		 *  <see cref="BillableHostingRule"/> not found.
		 */
		hostingRuleNotFound,
		 *  <summary sort="Billing">
		 *  <see cref="BillableHostingRule"/> not deleted.
		 */
		hostingRuleNotDeleted,
		 *  <summary sort="Billing">
		 *  <see cref="BillableHostingDiscount"/> not found.
		 *  <override skip="true" />
		 * @deprecated Never implemented.
		 */
		hostingDiscountNotFound,
		 *  <summary sort="Billing">
		 *  <see cref="BillableHostingDiscount"/> not deleted.
		 *  <override skip="true" />
		 * @deprecated Never implemented.
		 */
		hostingDiscountNotDeleted,
		 *  <summary sort="Billing">
		 *  <see cref="BillableHostingLicense"/> not found.
		 */
		hostingLicenseNotFound,
		 *  <summary sort="Billing">
		 *  <see cref="BillableHostingLicense"/> not deleted.
		 */
		hostingLicenseNotDeleted,
		 *  <summary sort="Billing">
		 *  <see cref="BillingReport"/> not found.
		 */
		billingReportNotFound,
		 *  <summary sort="Billing">
		 *  <see cref="BillingReport"/> not deleted.
		 */
		billingReportNotDeleted,

		 *  <summary sort="Contacts">
		 *  <see cref="Contact"/> currently in use by one or more <see cref="User"/>s and/or <see cref="Asset"/>s.
		 * In order to delete a <see cref="Contact"/>, all <see cref="User"/>s/<see cref="Asset"/>s must first be altered or deleted.
		 */
		contactInUse,

		 *  <summary sort="File Hosting">
		 *  <see cref="Document"/> not found.
		 */
		documentNotFound,
		 *  <summary sort="File Hosting">
		 *  <see cref="Document"/> not deleted.
		 */
		documentNotDeleted,
		 *  <summary sort="File Hosting">
		 * One or more <see cref="Document"/>s in the list not found.
		 */
		documentsListNotFound,

		 *  <summary sort="">
		 * The object or operation has not changed since the last request.
		 */
		unchanged,
		 *  <summary sort="">
		 * The collection has no content or the operation produced no results.
		 */
		nothing,

		 *  <summary sort="Users and Groups">
		 *  <see cref="Machine"/> not found.
		 */
		machineNotFound,
		 *  <summary sort="Users and Groups">
		 *  <see cref="Machine"/> not deleted.
		 */
		machineNotDeleted,
		 *  <summary sort="Users and Groups">
		 * The <see cref="Machine"/> cannot access the requested API.
		 */
		machineNotAllowed,

		 *  <summary sort="">
		 * Invalid operation.
		 * Due to either the request or the objects' state, the operation cannot be performed.
		 */
		invalidOperation,

		 *  <summary sort="Users and Groups">
		 * A client using a <see cref="Machine"/> is trying to access the system from an unknown URL.
		 */
		referrerNotAllowed,

		 *  <summary sort="File Hosting">
		 *  <see cref="FormTemplate"/> not found.
		 */
		formTemplateNotFound,
		 *  <summary sort="File Hosting">
		 *  <see cref="FormTemplate"/> not deleted.
		 */
		formTemplateNotDeleted,
		 *  <summary sort="File Hosting">
		 *  <see cref="FormResult"/> not found.
		 */
		formResultNotFound,
		 *  <summary sort="File Hosting">
		 *  <see cref="FormResult"/> not deleted.
		 */
		formResultNotDeleted,
		 *  <summary sort="File Hosting">
		 * One or more <see cref="FormResult"/>s in the list not found.
		 */
		formResultsListNotFound,

		 *  <summary sort="Dispatch">
		 *  <see cref="DispatchTemplate"/> not found.
		 */
		dispatchTemplateNotFound,
		 *  <summary sort="Dispatch">
		 *  <see cref="DispatchTemplate"/> not deleted.
		 */
		dispatchTemplateNotDeleted,
		 *  <summary sort="Dispatch">
		 *  <see cref="DispatchJob"/> not found.
		 */
		dispatchJobNotFound,
		 *  <summary sort="Dispatch">
		 *  <see cref="DispatchJob"/> not deleted.
		 */
		dispatchJobNotDeleted,
		 *  <summary sort="File Hosting">
		 * One or more <see cref="DispatchJob"/>s in the list not found.
		 */
		dispatchJobsListNotFound,

		 *  <summary sort="File Hosting">
		 *  <see cref="FormTemplate"/> currently in use by one or more <see cref="FormResult"/>s.
		 * In order to delete a <see cref="FormTemplate"/>, all <see cref="FormResult"/>s must first be expired or deleted.
		 */
		formTemplateInUse,
	}