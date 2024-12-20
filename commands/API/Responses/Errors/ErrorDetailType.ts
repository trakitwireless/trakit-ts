
	/// <summary>
	/// <see cref="ErrorDetail"/>s are identified for deserialization using <see cref="ErrorDetail.kind"/>.
	/// </summary>
	public enum ErrorDetailType {
		/// <summary>
		/// These are the details of an exception while trying to parse the JSON input.
		/// </summary>
		parse,
		/// <summary>
		/// For unhandled exceptions, a full stack trace may be given.
		/// </summary>
		stack,
		/// <summary>
		/// Details for how long a resource is locked, or if a command cannot be executed right away, how long until it can be executed.
		/// </summary>
		locked,
		/// <summary>
		/// Details of a command or session being throttled.
		/// </summary>
		throttled,
		/// <summary>
		/// These are the details when a number of things create the exception.
		/// </summary>
		count,
		/// <summary>
		/// These are the details of when a value needed to be within a certain range, and was not.
		/// </summary>
		minMax,
		/// <summary>
		/// These are the details of an input or format exception.
		/// </summary>
		input,
		/// <summary>
		/// These are the details of an enum input that failed to parse.
		/// </summary>
		@enum,
		/// <summary>
		/// These are the details of a phone number input that failed to parse.
		/// </summary>
		phone,
		/// <summary>
		/// These details contain a list of bad keys, labels or tags, or parameter names that caused the failure.
		/// </summary>
		badKeys,
		/// <summary>
		/// These details contain unique identifiers that caused the failure.
		/// </summary>
		badIds,
		/// <summary>
		/// These details contain array indexes that caused the failure.
		/// </summary>
		badIndexes,
		/// <summary>
		/// Details of a permission escallation error thrown when modifying a resource or user that would grant the following extra permissions.
		/// </summary>
		escalation,
		/// <summary>
		/// These are the errors/warnings taken from the output of some other system.
		/// </summary>
		externals,
		/// <summary>
		/// Details for how a circular <see cref="Company"/> tree would have been created.
		/// </summary>
		parent,
		/// <summary>
		/// Details for how many and which <see cref="User"/>s are still in the <see cref="UserGroup"/>.
		/// </summary>
		userGroupInUse,
		/// <summary>
		/// Details for how many and which <see cref="Asset"/>s and <see cref="User"/>s are still using this <see cref="Contact"/>.
		/// </summary>
		contactInUse,
		/// <summary>
		/// Details for how many and which <see cref="FormResult"/>s are still using this <see cref="FormTemplate"/>.
		/// </summary>
		formTemplateInUse,
		/// <summary>
		/// For batch commands, these are the errors thrown by the sub-command.
		/// </summary>
		batch,
		/// <summary>
		/// Details about why the request failed an authentication process when a <see cref="Machine.secret"/> is used.
		/// </summary>
		secret,
	}