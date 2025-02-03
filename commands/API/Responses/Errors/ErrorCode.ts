

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
		 * Not a valid {@link PermissionType}.
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
		 *  {@link User}'s session is expired or unknown.
		 */
		sessionExpired,
		 *  <summary sort="Users and Groups">
		 * Please login before all other operations.
		 */
		userNotLoggedIn,
		 *  <summary sort="Users and Groups">
		 *  {@link User}'s session was forcibly killed by another user, or by {@link SessionPolicy}'s rules.
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
		 * Session is active from another client, and the {@link SessionPolicy}'s rules are set to {@link MultiUserPolicy.deny}.
		 */
		multiUserDenied,
		 *  <summary sort="Users and Groups">
		 * Password doesn't comply with the password policy.
		 * See the {@link PasswordPolicy} for a reason as to why your password does not meet the criteria.
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
		 *  {@link Asset} not found.
		 */
		assetNotFound,
		 *  <summary sort="Assets">
		 *  {@link Asset} not deleted.
		 */
		assetNotDeleted,
		 *  <summary sort="Assets">
		 * One or more {@link Asset}s in the list not found.
		 */
		assetsListNotFound,
		 *  <summary sort="Behaviours">
		 *  {@link BehaviourScript} not found.
		 */
		behaviourScriptNotFound,
		 *  <summary sort="Behaviours">
		 *  {@link BehaviourScript} not deleted.
		 */
		behaviourScriptNotDeleted,
		 *  <summary sort="Behaviours">
		 *  {@link BehaviourScript} currently implemented by one or more {@link Behaviour}s.
		 * In order to delete a {@link BehaviourScript}, all {@link Behaviour}s implementing the script must be deleted first.
		 */
		behaviourScriptInUse,
		 *  <summary sort="Behaviours">
		 *  {@link Behaviour} not found.
		 */
		behaviourNotFound,
		 *  <summary sort="Behaviours">
		 *  {@link Behaviour} not deleted.
		 */
		behaviourNotDeleted,
		 *  <summary sort="Companies">
		 *  {@link Company} not found.
		 */
		companyNotFound,
		 *  <summary sort="Companies">
		 *  {@link Company} not deleted.
		 */
		companyNotDeleted,
		 *  <summary sort="Users and Groups">
		 *  {@link UserGroup} not found.
		 */
		userGroupNotFound,
		 *  <summary sort="Contacts">
		 *  {@link Contact} not found.
		 */
		contactNotFound,
		 *  <summary sort="Contacts">
		 *  {@link Contact} not deleted.
		 */
		contactNotDeleted,
		 *  <summary sort="File Hosting">
		 *  {@link Icon} not found.
		 */
		iconNotFound,
		 *  <summary sort="File Hosting">
		 *  {@link Icon} not deleted.
		 */
		iconNotDeleted,
		 *  <summary sort="Maintenance">
		 *  {@link MaintenanceJob} not found.
		 */
		maintenanceJobNotFound,
		 *  <summary sort="Maintenance">
		 *  {@link MaintenanceJob} not deleted.
		 */
		maintenanceJobNotDeleted,
		 *  <summary sort="Maintenance">
		 *  {@link MaintenanceSchedule} not found.
		 */
		maintenanceScheduleNotFound,
		 *  <summary sort="Maintenance">
		 *  {@link MaintenanceSchedule} not deleted.
		 */
		maintenanceScheduleNotDeleted,
		 *  <summary sort="Maintenance">
		 *  {@link MaintenanceSchedule} currently in use by one or more {@link MaintenanceJob}s.
		 * In order to delete a {@link MaintenanceSchedule}, all {@link MaintenanceJob}s referencing this schedule must be deleted first.
		 * @deprecated
		 */
		maintenanceScheduleInUse,
		 *  <summary sort="Places">
		 *  {@link Place} not found.
		 */
		placeNotFound,
		 *  <summary sort="Places">
		 *  {@link Place} not deleted.
		 */
		placeNotDeleted,
		 *  <summary sort="Places">
		 * One or more {@link Place}s in the list not found.
		 */
		placesListNotFound,
		 *  <summary sort="Providers and Configurations">
		 *  {@link Provider} not found.
		 */
		providerNotFound,
		 *  <summary sort="Providers and Configurations">
		 *  {@link Provider} not deleted.
		 */
		providerNotDeleted,
		 *  <summary sort="Providers and Configurations">
		 * One or more {@link Provider}s in the list not found.
		 */
		providersListNotFound,
		 *  <summary sort="Providers and Configurations">
		 * Cannot access deleted {@link Provider}.
		 * @deprecated Throws providerNotFound instead
		 */
		deletedProvider,
		 *  <summary sort="Providers and Configurations">
		 *  {@link ProviderConfigurationType} not found.
		 */
		providerConfigurationTypeNotFound,
		 *  <summary sort="Providers and Configurations">
		 *  {@link ProviderConfig} or {@link ProviderConfiguration} not found.
		 */
		providerConfigurationNotFound,
		 *  <summary sort="Providers and Configurations">
		 *  {@link ProviderConfig} or {@link ProviderConfiguration} not deleted.
		 */
		providerConfigurationNotDeleted,
		 *  <summary sort="Providers and Configurations">
		 *  {@link ProviderConfig} or {@link ProviderConfiguration} currently in use by one or more {@link Provider}s.
		 * In order to delete a {@link ProviderConfig}/{@link ProviderConfiguration}, all {@link Provider}s using the configuration must be deleted first, or have their configuration changed.
		 */
		providerConfigurationInUse,
		 *  <summary sort="Providers and Configurations">
		 * Invalid {@link ProviderConfiguration} options.
		 */
		invalidConfigurationOptions,
		 *  <summary sort="Reports">
		 *  {@link ReportTemplate} not found.
		 */
		reportTemplateNotFound,
		 *  <summary sort="Reports">
		 *  {@link ReportTemplate} not deleted.
		 */
		reportTemplateNotDeleted,
		 *  <summary sort="Users and Groups">
		 *  {@link User} not found.
		 */
		userNotFound,
		 *  <summary sort="Users and Groups">
		 *  {@link User} not deleted.
		 */
		userNotDeleted,
		 *  <summary sort="Users and Groups">
		 * Cannot access deleted {@link User}.
		 * @deprecated Throws userNotFound instead
		 */
		deletedUser,
		 *  <summary sort="Users and Groups">
		 * Cannot kill your own Session, or delete/disable your own {@link User}.
		 *  <remarks>
		 * Don't do it! You have so much to live for!
		 *  </remarks>
		 */
		suicide,
		 *  <summary sort="Companies">
		 *  {@link CompanyLabels.labels} codes must be unique.
		 * @deprecated
		 */
		labelsListNotUnique,
		 *  <summary sort="Companies">
		 *  {@link CompanyLabels.tags} codes must be unique.
		 * @deprecated
		 */
		tagsListNotUnique,
		 *  <summary sort="Users and Groups">
		 * One or more {@link UserGroup}s in the list not found.
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
		 *  {@link Timezone} not found.
		 */
		timezoneNotFound,
		 *  <summary sort="Assets">
		 *  {@link Message} not found.
		 */
		assetMessageNotFound,
		 *  <summary sort="Dispatch">
		 *  {@link DispatchTask} not found.
		 */
		dispatchTaskNotFound,
		 *  <summary sort="Users and Groups">
		 *  {@link UserGroup} currently in use by one or more {@link User}s.
		 * In order to delete a {@link UserGroup}, all {@link User}s must first be removed as members.
		 */
		userGroupInUse,
		 *  <summary sort="Users and Groups">
		 *  {@link UserGroup} not deleted.
		 */
		userGroupNotDeleted,
		 *  <summary sort="Reports">
		 *  {@link ReportResult} not found.
		 */
		reportResultNotFound,
		 *  <summary sort="File Hosting">
		 *  {@link Picture} not found.
		 */
		pictureNotFound,
		 *  <summary sort="File Hosting">
		 * One or more {@link Picture}s in the list not found.
		 */
		picturesListNotFound,
		 *  <summary sort="File Hosting">
		 *  {@link Picture} not deleted.
		 */
		pictureNotDeleted,
		 *  <summary sort="Users and Groups">
		 * Unable to perform operation because resulting {@link UserPermission}s would be greater than your own.
		 */
		permissionEscalation,
		 *  <summary sort="Users and Groups">
		 * A {@link User} with this login already exists.
		 */
		userAlreadyExists,
		 *  <summary sort="Users and Groups">
		 * Session or connection not allowed due to flooding.
		 */
		sessionThrottled,
		 *  <summary sort="Users and Groups">
		 * One or more {@link User}s in the list not found.
		 */
		usersListNotFound,
		 *  <summary sort="Reports">
		 *  {@link ReportResult} not deleted.
		 */
		reportResultNotDeleted,
		 *  <summary sort="Hours of Service">
		 *  {@link HosCarrier} not found.
		 */
		carrierNotFound,
		 *  <summary sort="Hours of Service">
		 *  {@link HosCarrier} not deleted.
		 */
		carrierNotDeleted,
		 *  <summary sort="Hours of Service">
		 *  {@link HosInspection} not found.
		 */
		inspectionNotFound,
		 *  <summary sort="Hours of Service">
		 *  {@link HosInspection} not deleted.
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
		 *  {@link HosEvent} not found.
		 */
		elogNotFound,

		 *  <summary sort="Users and Groups">
		 *  {@link User} has been disabled.
		 */
		userDisabled,

		 *  <summary sort="Providers and Configurations">
		 * Trying to remove an expired or completed {@link ProviderRegistration}.
		 *  <remarks>
		 * For GatekeeperType commands, {@link Provider}'s {@link DataName.REGISTRATION_ID|registration identifier} is invalid or not found.
		 *  </remarks>
		 */
		invalidRegistration,
		 *  <summary sort="Providers and Configurations">
		 * Verification hash does not match {@link Provider}'s.
		 *  <remarks>
		 * For GatekeeperType commands only.
		 *  </remarks>
		 *  <override skip="true" />
		 */
		invalidHash,
		 *  <summary sort="Providers and Configurations">
		 * Unknown or invalid {@link ProviderRegistration.code}.
		 *  <remarks>
		 * Used exclusively by the provisioning service.
		 *  </remarks>
		 *  <override skip="true" />
		 */
		invalidVerification,
		 *  <summary sort="Providers and Configurations">
		 *  {@link ProviderRegistration} timeout has elapsed.
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
		 * Unknown or invalid {@link ProviderType}.
		 * @deprecated Use invalidData instead
		 */
		invalidProviderType,

		 *  <summary sort="Reports">
		 *  {@link ReportSchedule} not found.
		 */
		reportScheduleNotFound,
		 *  <summary sort="Reports">
		 *  {@link ReportSchedule} not deleted.
		 */
		reportScheduleNotDeleted,

		 *  <summary sort="Reports">
		 *  {@link ReportResult} not ready to serve {@link ReportDataSummaryInstance} or {@link ReportDataBreakdownInstance} data.
		 */
		reportResultNotReady,

		 *  <summary sort="Assets">
		 *  {@link Asset} suspended.
		 */
		assetSuspended,
		 *  <summary sort="Assets">
		 *  {@link Asset} not suspended.
		 */
		assetNotSuspended,

		 *  <summary sort="Providers and Configurations">
		 *  {@link Provider} suspended.
		 */
		providerSuspended,
		 *  <summary sort="Providers and Configurations">
		 *  {@link Provider} not suspended.
		 */
		providerNotSuspended,

		 *  <summary sort="Dispatch">
		 *  {@link DispatchTask} not deleted.
		 */
		dispatchTaskNotDeleted,
		 *  <summary sort="Assets">
		 *  {@link Message} not deleted.
		 */
		assetMessageNotDeleted,

		 *  <summary sort="Providers and Configurations">
		 *  {@link ProviderScript} not found.
		 */
		providerScriptNotFound,
		 *  <summary sort="Providers and Configurations">
		 *  {@link ProviderScript} not deleted.
		 */
		providerScriptNotDeleted,
		 *  <summary sort="Providers and Configurations">
		 *  {@link ProviderScript} currently in use by one or more {@link ProviderConfig}s.
		 * In order to delete a {@link ProviderScript}, all {@link ProviderConfig}s must first be deleted.
		 */
		providerScriptInUse,

		 *  <summary sort="">
		 * Command not processed due to flooding.
		 */
		commandThrottled,

		 *  <summary sort="White-labelling">
		 *  {@link CompanyReseller} not found.
		 */
		resellerNotFound,
		 *  <summary sort="White-labelling">
		 *  {@link CompanyReseller} not deleted.
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
		 *  {@link BillingProfile} not found.
		 */
		billingProfileNotFound,
		 *  <summary sort="Billing">
		 *  {@link BillingProfile} not deleted.
		 */
		billingProfileNotDeleted,
		 *  <summary sort="Billing">
		 *  {@link BillableHostingRule} not found.
		 */
		hostingRuleNotFound,
		 *  <summary sort="Billing">
		 *  {@link BillableHostingRule} not deleted.
		 */
		hostingRuleNotDeleted,
		 *  <summary sort="Billing">
		 *  {@link BillableHostingDiscount} not found.
		 *  <override skip="true" />
		 * @deprecated Never implemented.
		 */
		hostingDiscountNotFound,
		 *  <summary sort="Billing">
		 *  {@link BillableHostingDiscount} not deleted.
		 *  <override skip="true" />
		 * @deprecated Never implemented.
		 */
		hostingDiscountNotDeleted,
		 *  <summary sort="Billing">
		 *  {@link BillableHostingLicense} not found.
		 */
		hostingLicenseNotFound,
		 *  <summary sort="Billing">
		 *  {@link BillableHostingLicense} not deleted.
		 */
		hostingLicenseNotDeleted,
		 *  <summary sort="Billing">
		 *  {@link BillingReport} not found.
		 */
		billingReportNotFound,
		 *  <summary sort="Billing">
		 *  {@link BillingReport} not deleted.
		 */
		billingReportNotDeleted,

		 *  <summary sort="Contacts">
		 *  {@link Contact} currently in use by one or more {@link User}s and/or {@link Asset}s.
		 * In order to delete a {@link Contact}, all {@link User}s/{@link Asset}s must first be altered or deleted.
		 */
		contactInUse,

		 *  <summary sort="File Hosting">
		 *  {@link Document} not found.
		 */
		documentNotFound,
		 *  <summary sort="File Hosting">
		 *  {@link Document} not deleted.
		 */
		documentNotDeleted,
		 *  <summary sort="File Hosting">
		 * One or more {@link Document}s in the list not found.
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
		 *  {@link Machine} not found.
		 */
		machineNotFound,
		 *  <summary sort="Users and Groups">
		 *  {@link Machine} not deleted.
		 */
		machineNotDeleted,
		 *  <summary sort="Users and Groups">
		 * The {@link Machine} cannot access the requested API.
		 */
		machineNotAllowed,

		 *  <summary sort="">
		 * Invalid operation.
		 * Due to either the request or the objects' state, the operation cannot be performed.
		 */
		invalidOperation,

		 *  <summary sort="Users and Groups">
		 * A client using a {@link Machine} is trying to access the system from an unknown URL.
		 */
		referrerNotAllowed,

		 *  <summary sort="File Hosting">
		 *  {@link FormTemplate} not found.
		 */
		formTemplateNotFound,
		 *  <summary sort="File Hosting">
		 *  {@link FormTemplate} not deleted.
		 */
		formTemplateNotDeleted,
		 *  <summary sort="File Hosting">
		 *  {@link FormResult} not found.
		 */
		formResultNotFound,
		 *  <summary sort="File Hosting">
		 *  {@link FormResult} not deleted.
		 */
		formResultNotDeleted,
		 *  <summary sort="File Hosting">
		 * One or more {@link FormResult}s in the list not found.
		 */
		formResultsListNotFound,

		 *  <summary sort="Dispatch">
		 *  {@link DispatchTemplate} not found.
		 */
		dispatchTemplateNotFound,
		 *  <summary sort="Dispatch">
		 *  {@link DispatchTemplate} not deleted.
		 */
		dispatchTemplateNotDeleted,
		 *  <summary sort="Dispatch">
		 *  {@link DispatchJob} not found.
		 */
		dispatchJobNotFound,
		 *  <summary sort="Dispatch">
		 *  {@link DispatchJob} not deleted.
		 */
		dispatchJobNotDeleted,
		 *  <summary sort="File Hosting">
		 * One or more {@link DispatchJob}s in the list not found.
		 */
		dispatchJobsListNotFound,

		 *  <summary sort="File Hosting">
		 *  {@link FormTemplate} currently in use by one or more {@link FormResult}s.
		 * In order to delete a {@link FormTemplate}, all {@link FormResult}s must first be expired or deleted.
		 */
		formTemplateInUse,
	}