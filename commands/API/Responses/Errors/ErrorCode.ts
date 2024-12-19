

	/// <summary>
	/// The possible errors returned by the system.
	/// </summary>
	public enum ErrorCode : ushort {
		/// <summary sort="">
		/// Success!
		/// Operation completed without error.
		/// </summary>
		success = 0,
		/// <summary sort="">
		/// An unknown error, or some kind or error by the client.
		/// </summary>
		unknown,
		/// <summary sort="">
		/// Service error not because of client input.
		/// </summary>
		service,
		/// <summary sort="">
		/// Invalid data.
		/// Client input could not be properly parsed.
		/// </summary>
		invalidData,
		/// <summary sort="">
		/// Not a valid <see cref="PermissionType"/>.
		/// </summary>
		[Obsolete]
		invalidPermission,
		/// <summary sort="">
		/// Permission denied.
		/// The operation not successful because access is restricted.
		/// </summary>
		permissionDenied,
		/// <summary sort="">
		/// Version keys sent with request do not match service version.
		/// In these cases, treat the service version as most recent.
		/// </summary>
		wrongVersionKey,
		/// <summary sort="Users and Groups">
		/// <see cref="User"/>'s session is expired or unknown.
		/// </summary>
		sessionExpired,
		/// <summary sort="Users and Groups">
		/// Please login before all other operations.
		/// </summary>
		userNotLoggedIn,
		/// <summary sort="Users and Groups">
		/// <see cref="User"/>'s session was forcibly killed by another user, or by <see cref="SessionPolicy"/>'s rules.
		/// </summary>
		sessionKilled,
		/// <summary sort="Users and Groups">
		/// The session has ended.
		/// </summary>
		loggedOut,
		/// <summary sort="Users and Groups">
		/// Invalid credentials.
		/// </summary>
		/// <remarks>
		/// Is your caps-lock on?
		/// </remarks>
		invalidCredentials,
		/// <summary sort="Users and Groups">
		/// The given client UserAgent is not allowed.
		/// </summary>
		applicationNotAllowed,
		/// <summary sort="Users and Groups">
		/// IPAddress not allowed.
		/// IP restrictions are in place, and the client IP is not in the allowed list.
		/// </summary>
		ipNotAllowed,
		/// <summary sort="Users and Groups">
		/// Session is active from another client, and the <see cref="SessionPolicy"/>'s rules are set to <see cref="MultiUserPolicy.deny"/>.
		/// </summary>
		multiUserDenied,
		/// <summary sort="Users and Groups">
		/// Password doesn't comply with the password policy.
		/// See the <see cref="PasswordPolicy"/> for a reason as to why your password does not meet the criteria.
		/// </summary>
		noncompliantPassword,
		/// <summary sort="Users and Groups">
		/// Your password has expired.  Please change your password.
		/// An expired password does not mean your session has expired.
		/// If you create a new session, it will ask you to update your password again.
		/// </summary>
		passwordExpired,
		/// <summary sort="Users and Groups">
		/// When changing a password, it must not be the same as the previous password.
		/// </summary>
		samePassword,
		/// <summary sort="Users and Groups">
		/// Unable to Kill the session.
		/// </summary>
		[Obsolete]
		killSessionFailed,
		/// <summary sort="Users and Groups">
		/// Session not found.
		/// </summary>
		sessionNotFound,
		/// <summary sort="Assets">
		/// <see cref="Asset"/> not found.
		/// </summary>
		assetNotFound,
		/// <summary sort="Assets">
		/// <see cref="Asset"/> not deleted.
		/// </summary>
		assetNotDeleted,
		/// <summary sort="Assets">
		/// One or more <see cref="Asset"/>s in the list not found.
		/// </summary>
		assetsListNotFound,
		/// <summary sort="Behaviours">
		/// <see cref="BehaviourScript"/> not found.
		/// </summary>
		behaviourScriptNotFound,
		/// <summary sort="Behaviours">
		/// <see cref="BehaviourScript"/> not deleted.
		/// </summary>
		behaviourScriptNotDeleted,
		/// <summary sort="Behaviours">
		/// <see cref="BehaviourScript"/> currently implemented by one or more <see cref="Behaviour"/>s.
		/// In order to delete a <see cref="BehaviourScript"/>, all <see cref="Behaviour"/>s implementing the script must be deleted first.
		/// </summary>
		behaviourScriptInUse,
		/// <summary sort="Behaviours">
		/// <see cref="Behaviour"/> not found.
		/// </summary>
		behaviourNotFound,
		/// <summary sort="Behaviours">
		/// <see cref="Behaviour"/> not deleted.
		/// </summary>
		behaviourNotDeleted,
		/// <summary sort="Companies">
		/// <see cref="Company"/> not found.
		/// </summary>
		companyNotFound,
		/// <summary sort="Companies">
		/// <see cref="Company"/> not deleted.
		/// </summary>
		companyNotDeleted,
		/// <summary sort="Users and Groups">
		/// <see cref="UserGroup"/> not found.
		/// </summary>
		userGroupNotFound,
		/// <summary sort="Contacts">
		/// <see cref="Contact"/> not found.
		/// </summary>
		contactNotFound,
		/// <summary sort="Contacts">
		/// <see cref="Contact"/> not deleted.
		/// </summary>
		contactNotDeleted,
		/// <summary sort="File Hosting">
		/// <see cref="Icon"/> not found.
		/// </summary>
		iconNotFound,
		/// <summary sort="File Hosting">
		/// <see cref="Icon"/> not deleted.
		/// </summary>
		iconNotDeleted,
		/// <summary sort="Maintenance">
		/// <see cref="MaintenanceJob"/> not found.
		/// </summary>
		maintenanceJobNotFound,
		/// <summary sort="Maintenance">
		/// <see cref="MaintenanceJob"/> not deleted.
		/// </summary>
		maintenanceJobNotDeleted,
		/// <summary sort="Maintenance">
		/// <see cref="MaintenanceSchedule"/> not found.
		/// </summary>
		maintenanceScheduleNotFound,
		/// <summary sort="Maintenance">
		/// <see cref="MaintenanceSchedule"/> not deleted.
		/// </summary>
		maintenanceScheduleNotDeleted,
		/// <summary sort="Maintenance">
		/// <see cref="MaintenanceSchedule"/> currently in use by one or more <see cref="MaintenanceJob"/>s.
		/// In order to delete a <see cref="MaintenanceSchedule"/>, all <see cref="MaintenanceJob"/>s referencing this schedule must be deleted first.
		/// </summary>
		[Obsolete]
		maintenanceScheduleInUse,
		/// <summary sort="Places">
		/// <see cref="Place"/> not found.
		/// </summary>
		placeNotFound,
		/// <summary sort="Places">
		/// <see cref="Place"/> not deleted.
		/// </summary>
		placeNotDeleted,
		/// <summary sort="Places">
		/// One or more <see cref="Place"/>s in the list not found.
		/// </summary>
		placesListNotFound,
		/// <summary sort="Providers and Configurations">
		/// <see cref="Provider"/> not found.
		/// </summary>
		providerNotFound,
		/// <summary sort="Providers and Configurations">
		/// <see cref="Provider"/> not deleted.
		/// </summary>
		providerNotDeleted,
		/// <summary sort="Providers and Configurations">
		/// One or more <see cref="Provider"/>s in the list not found.
		/// </summary>
		providersListNotFound,
		/// <summary sort="Providers and Configurations">
		/// Cannot access deleted <see cref="Provider"/>.
		/// </summary>
		[Obsolete("Throws providerNotFound instead")]
		deletedProvider,
		/// <summary sort="Providers and Configurations">
		/// <see cref="ProviderConfigurationType"/> not found.
		/// </summary>
		providerConfigurationTypeNotFound,
		/// <summary sort="Providers and Configurations">
		/// <see cref="ProviderConfig"/> or <see cref="ProviderConfiguration"/> not found.
		/// </summary>
		providerConfigurationNotFound,
		/// <summary sort="Providers and Configurations">
		/// <see cref="ProviderConfig"/> or <see cref="ProviderConfiguration"/> not deleted.
		/// </summary>
		providerConfigurationNotDeleted,
		/// <summary sort="Providers and Configurations">
		/// <see cref="ProviderConfig"/> or <see cref="ProviderConfiguration"/> currently in use by one or more <see cref="Provider"/>s.
		/// In order to delete a <see cref="ProviderConfig"/>/<see cref="ProviderConfiguration"/>, all <see cref="Provider"/>s using the configuration must be deleted first, or have their configuration changed.
		/// </summary>
		providerConfigurationInUse,
		/// <summary sort="Providers and Configurations">
		/// Invalid <see cref="ProviderConfiguration"/> options.
		/// </summary>
		invalidConfigurationOptions,
		/// <summary sort="Reports">
		/// <see cref="ReportTemplate"/> not found.
		/// </summary>
		reportTemplateNotFound,
		/// <summary sort="Reports">
		/// <see cref="ReportTemplate"/> not deleted.
		/// </summary>
		reportTemplateNotDeleted,
		/// <summary sort="Users and Groups">
		/// <see cref="User"/> not found.
		/// </summary>
		userNotFound,
		/// <summary sort="Users and Groups">
		/// <see cref="User"/> not deleted.
		/// </summary>
		userNotDeleted,
		/// <summary sort="Users and Groups">
		/// Cannot access deleted <see cref="User"/>.
		/// </summary>
		[Obsolete("Throws userNotFound instead")]
		deletedUser,
		/// <summary sort="Users and Groups">
		/// Cannot kill your own Session, or delete/disable your own <see cref="User"/>.
		/// </summary>
		/// <remarks>
		/// Don't do it! You have so much to live for!
		/// </remarks>
		suicide,
		/// <summary sort="Companies">
		/// <see cref="CompanyLabels.labels"/> codes must be unique.
		/// </summary>
		[Obsolete]
		labelsListNotUnique,
		/// <summary sort="Companies">
		/// <see cref="CompanyLabels.tags"/> codes must be unique.
		/// </summary>
		[Obsolete]
		tagsListNotUnique,
		/// <summary sort="Users and Groups">
		/// One or more <see cref="UserGroup"/>s in the list not found.
		/// </summary>
		userGroupsListNotFound,
		/// <summary sort="">
		/// Unknown command.
		/// </summary>
		/// <remarks>
		/// What are you trying to do genius?
		/// </remarks>
		unknownCommand,
		/// <summary sort="">
		/// <see cref="Timezone"/> not found.
		/// </summary>
		timezoneNotFound,
		/// <summary sort="Assets">
		/// <see cref="Message"/> not found.
		/// </summary>
		assetMessageNotFound,
		/// <summary sort="Dispatch">
		/// <see cref="DispatchTask"/> not found.
		/// </summary>
		dispatchTaskNotFound,
		/// <summary sort="Users and Groups">
		/// <see cref="UserGroup"/> currently in use by one or more <see cref="User"/>s.
		/// In order to delete a <see cref="UserGroup"/>, all <see cref="User"/>s must first be removed as members.
		/// </summary>
		userGroupInUse,
		/// <summary sort="Users and Groups">
		/// <see cref="UserGroup"/> not deleted.
		/// </summary>
		userGroupNotDeleted,
		/// <summary sort="Reports">
		/// <see cref="ReportResult"/> not found.
		/// </summary>
		reportResultNotFound,
		/// <summary sort="File Hosting">
		/// <see cref="Picture"/> not found.
		/// </summary>
		pictureNotFound,
		/// <summary sort="File Hosting">
		/// One or more <see cref="Picture"/>s in the list not found.
		/// </summary>
		picturesListNotFound,
		/// <summary sort="File Hosting">
		/// <see cref="Picture"/> not deleted.
		/// </summary>
		pictureNotDeleted,
		/// <summary sort="Users and Groups">
		/// Unable to perform operation because resulting <see cref="UserPermission"/>s would be greater than your own.
		/// </summary>
		permissionEscalation,
		/// <summary sort="Users and Groups">
		/// A <see cref="User"/> with this login already exists.
		/// </summary>
		userAlreadyExists,
		/// <summary sort="Users and Groups">
		/// Session or connection not allowed due to flooding.
		/// </summary>
		sessionThrottled,
		/// <summary sort="Users and Groups">
		/// One or more <see cref="User"/>s in the list not found.
		/// </summary>
		usersListNotFound,
		/// <summary sort="Reports">
		/// <see cref="ReportResult"/> not deleted.
		/// </summary>
		reportResultNotDeleted,
		/// <summary sort="Hours of Service">
		/// <see cref="HosCarrier"/> not found.
		/// </summary>
		carrierNotFound,
		/// <summary sort="Hours of Service">
		/// <see cref="HosCarrier"/> not deleted.
		/// </summary>
		carrierNotDeleted,
		/// <summary sort="Hours of Service">
		/// <see cref="HosInspection"/> not found.
		/// </summary>
		inspectionNotFound,
		/// <summary sort="Hours of Service">
		/// <see cref="HosInspection"/> not deleted.
		/// </summary>
		inspectionNotDeleted,

		/// <summary sort="Dispatch">
		/// There was an error retrieving the address' coordinates.
		/// Check the <c>errorDetails</c> for more information.
		/// </summary>
		geocoderError,
		/// <summary sort="Dispatch">
		/// No coordinates could be found for the given address.
		/// Ensure the address is correct, or try again without postal code.
		/// </summary>
		geocoderNotFound,
		/// <summary sort="Dispatch">
		/// There was an error calculating the directions or too many stops were given.
		/// Check the <c>errorDetails</c> for more information.
		/// </summary>
		directionsError,
		/// <summary sort="Dispatch">
		/// Directions could not be calculated between two or more stops.
		/// Ensure the each stop is correct, or try a shorter route.
		/// </summary>
		directionsNotFound,

		/// <summary sort="Hours of Service">
		/// <see cref="HosEvent"/> not found.
		/// </summary>
		elogNotFound,

		/// <summary sort="Users and Groups">
		/// <see cref="User"/> has been disabled.
		/// </summary>
		userDisabled,

		/// <summary sort="Providers and Configurations">
		/// Trying to remove an expired or completed <see cref="ProviderRegistration"/>.
		/// </summary>
		/// <remarks>
		/// For GatekeeperType commands, <see cref="Provider"/>'s <see cref="DataName.REGISTRATION_ID">registration identifier</see> is invalid or not found.
		/// </remarks>
		invalidRegistration,
		/// <summary sort="Providers and Configurations">
		/// Verification hash does not match <see cref="Provider"/>'s.
		/// </summary>
		/// <remarks>
		/// For GatekeeperType commands only.
		/// </remarks>
		/// <override skip="true" />
		invalidHash,
		/// <summary sort="Providers and Configurations">
		/// Unknown or invalid <see cref="ProviderRegistration.code"/>.
		/// </summary>
		/// <remarks>
		/// Used exclusively by the provisioning service.
		/// </remarks>
		/// <override skip="true" />
		invalidVerification,
		/// <summary sort="Providers and Configurations">
		/// <see cref="ProviderRegistration"/> timeout has elapsed.
		/// </summary>
		/// <remarks>
		/// Used exclusively by the provisioning service.
		/// </remarks>
		verifyTimeout,

		/// <summary sort="File Hosting">
		/// Unsupported MIME type.
		/// </summary>
		invalidMime,
		/// <summary sort="File Hosting">
		/// File is too large.
		/// </summary>
		filesizeExceeded,

		/// <summary sort="Providers and Configurations">
		/// Unknown or invalid <see cref="ProviderType"/>.
		/// </summary>
		[Obsolete("Use invalidData instead")]
		invalidProviderType,

		/// <summary sort="Reports">
		/// <see cref="ReportSchedule"/> not found.
		/// </summary>
		reportScheduleNotFound,
		/// <summary sort="Reports">
		/// <see cref="ReportSchedule"/> not deleted.
		/// </summary>
		reportScheduleNotDeleted,

		/// <summary sort="Reports">
		/// <see cref="ReportResult"/> not ready to serve <see cref="ReportDataSummaryInstance"/> or <see cref="ReportDataBreakdownInstance"/> data.
		/// </summary>
		reportResultNotReady,

		/// <summary sort="Assets">
		/// <see cref="Asset"/> suspended.
		/// </summary>
		assetSuspended,
		/// <summary sort="Assets">
		/// <see cref="Asset"/> not suspended.
		/// </summary>
		assetNotSuspended,

		/// <summary sort="Providers and Configurations">
		/// <see cref="Provider"/> suspended.
		/// </summary>
		providerSuspended,
		/// <summary sort="Providers and Configurations">
		/// <see cref="Provider"/> not suspended.
		/// </summary>
		providerNotSuspended,

		/// <summary sort="Dispatch">
		/// <see cref="DispatchTask"/> not deleted.
		/// </summary>
		dispatchTaskNotDeleted,
		/// <summary sort="Assets">
		/// <see cref="Message"/> not deleted.
		/// </summary>
		assetMessageNotDeleted,

		/// <summary sort="Providers and Configurations">
		/// <see cref="ProviderScript"/> not found.
		/// </summary>
		providerScriptNotFound,
		/// <summary sort="Providers and Configurations">
		/// <see cref="ProviderScript"/> not deleted.
		/// </summary>
		providerScriptNotDeleted,
		/// <summary sort="Providers and Configurations">
		/// <see cref="ProviderScript"/> currently in use by one or more <see cref="ProviderConfig"/>s.
		/// In order to delete a <see cref="ProviderScript"/>, all <see cref="ProviderConfig"/>s must first be deleted.
		/// </summary>
		providerScriptInUse,

		/// <summary sort="">
		/// Command not processed due to flooding.
		/// </summary>
		commandThrottled,

		/// <summary sort="White-labelling">
		/// <see cref="CompanyReseller"/> not found.
		/// </summary>
		resellerNotFound,
		/// <summary sort="White-labelling">
		/// <see cref="CompanyReseller"/> not deleted.
		/// </summary>
		resellerNotDeleted,

		/// <summary sort="">
		/// The long-running operation is queued, and will run when resources are ready.
		/// </summary>
		operationPending,
		/// <summary sort="">
		/// The long-running operation is currently executing.
		/// </summary>
		operationRunning,
		/// <summary sort="">
		/// The long-running operation has failed; see <c>message</c> and <c>errorDetails</c> for more information.
		/// </summary>
		operationFailed,

		/// <summary sort="Billing">
		/// <see cref="BillingProfile"/> not found.
		/// </summary>
		billingProfileNotFound,
		/// <summary sort="Billing">
		/// <see cref="BillingProfile"/> not deleted.
		/// </summary>
		billingProfileNotDeleted,
		/// <summary sort="Billing">
		/// <see cref="BillableHostingRule"/> not found.
		/// </summary>
		hostingRuleNotFound,
		/// <summary sort="Billing">
		/// <see cref="BillableHostingRule"/> not deleted.
		/// </summary>
		hostingRuleNotDeleted,
		/// <summary sort="Billing">
		/// <see cref="BillableHostingDiscount"/> not found.
		/// </summary>
		/// <override skip="true" />
		[Obsolete("Never implemented.")]
		hostingDiscountNotFound,
		/// <summary sort="Billing">
		/// <see cref="BillableHostingDiscount"/> not deleted.
		/// </summary>
		/// <override skip="true" />
		[Obsolete("Never implemented.")]
		hostingDiscountNotDeleted,
		/// <summary sort="Billing">
		/// <see cref="BillableHostingLicense"/> not found.
		/// </summary>
		hostingLicenseNotFound,
		/// <summary sort="Billing">
		/// <see cref="BillableHostingLicense"/> not deleted.
		/// </summary>
		hostingLicenseNotDeleted,
		/// <summary sort="Billing">
		/// <see cref="BillingReport"/> not found.
		/// </summary>
		billingReportNotFound,
		/// <summary sort="Billing">
		/// <see cref="BillingReport"/> not deleted.
		/// </summary>
		billingReportNotDeleted,

		/// <summary sort="Contacts">
		/// <see cref="Contact"/> currently in use by one or more <see cref="User"/>s and/or <see cref="Asset"/>s.
		/// In order to delete a <see cref="Contact"/>, all <see cref="User"/>s/<see cref="Asset"/>s must first be altered or deleted.
		/// </summary>
		contactInUse,

		/// <summary sort="File Hosting">
		/// <see cref="Document"/> not found.
		/// </summary>
		documentNotFound,
		/// <summary sort="File Hosting">
		/// <see cref="Document"/> not deleted.
		/// </summary>
		documentNotDeleted,
		/// <summary sort="File Hosting">
		/// One or more <see cref="Document"/>s in the list not found.
		/// </summary>
		documentsListNotFound,

		/// <summary sort="">
		/// The object or operation has not changed since the last request.
		/// </summary>
		unchanged,
		/// <summary sort="">
		/// The collection has no content or the operation produced no results.
		/// </summary>
		nothing,

		/// <summary sort="Users and Groups">
		/// <see cref="Machine"/> not found.
		/// </summary>
		machineNotFound,
		/// <summary sort="Users and Groups">
		/// <see cref="Machine"/> not deleted.
		/// </summary>
		machineNotDeleted,
		/// <summary sort="Users and Groups">
		/// The <see cref="Machine"/> cannot access the requested API.
		/// </summary>
		machineNotAllowed,

		/// <summary sort="">
		/// Invalid operation.
		/// Due to either the request or the objects' state, the operation cannot be performed.
		/// </summary>
		invalidOperation,

		/// <summary sort="Users and Groups">
		/// A client using a <see cref="Machine"/> is trying to access the system from an unknown URL.
		/// </summary>
		referrerNotAllowed,

		/// <summary sort="File Hosting">
		/// <see cref="FormTemplate"/> not found.
		/// </summary>
		formTemplateNotFound,
		/// <summary sort="File Hosting">
		/// <see cref="FormTemplate"/> not deleted.
		/// </summary>
		formTemplateNotDeleted,
		/// <summary sort="File Hosting">
		/// <see cref="FormResult"/> not found.
		/// </summary>
		formResultNotFound,
		/// <summary sort="File Hosting">
		/// <see cref="FormResult"/> not deleted.
		/// </summary>
		formResultNotDeleted,
		/// <summary sort="File Hosting">
		/// One or more <see cref="FormResult"/>s in the list not found.
		/// </summary>
		formResultsListNotFound,

		/// <summary sort="Dispatch">
		/// <see cref="DispatchTemplate"/> not found.
		/// </summary>
		dispatchTemplateNotFound,
		/// <summary sort="Dispatch">
		/// <see cref="DispatchTemplate"/> not deleted.
		/// </summary>
		dispatchTemplateNotDeleted,
		/// <summary sort="Dispatch">
		/// <see cref="DispatchJob"/> not found.
		/// </summary>
		dispatchJobNotFound,
		/// <summary sort="Dispatch">
		/// <see cref="DispatchJob"/> not deleted.
		/// </summary>
		dispatchJobNotDeleted,
		/// <summary sort="File Hosting">
		/// One or more <see cref="DispatchJob"/>s in the list not found.
		/// </summary>
		dispatchJobsListNotFound,

		/// <summary sort="File Hosting">
		/// <see cref="FormTemplate"/> currently in use by one or more <see cref="FormResult"/>s.
		/// In order to delete a <see cref="FormTemplate"/>, all <see cref="FormResult"/>s must first be expired or deleted.
		/// </summary>
		formTemplateInUse,
	}