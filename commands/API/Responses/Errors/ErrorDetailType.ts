
	/**
	 *  <see cref="ErrorDetail"/>s are identified for deserialization using <see cref="ErrorDetail.kind"/>.
	 */
	public enum ErrorDetailType {
		/**
		 * These are the details of an exception while trying to parse the JSON input.
		 */
		parse,
		/**
		 * For unhandled exceptions, a full stack trace may be given.
		 */
		stack,
		/**
		 * Details for how long a resource is locked, or if a command cannot be executed right away, how long until it can be executed.
		 */
		locked,
		/**
		 * Details of a command or session being throttled.
		 */
		throttled,
		/**
		 * These are the details when a number of things create the exception.
		 */
		count,
		/**
		 * These are the details of when a value needed to be within a certain range, and was not.
		 */
		minMax,
		/**
		 * These are the details of an input or format exception.
		 */
		input,
		/**
		 * These are the details of an enum input that failed to parse.
		 */
		@enum,
		/**
		 * These are the details of a phone number input that failed to parse.
		 */
		phone,
		/**
		 * These details contain a list of bad keys, labels or tags, or parameter names that caused the failure.
		 */
		badKeys,
		/**
		 * These details contain unique identifiers that caused the failure.
		 */
		badIds,
		/**
		 * These details contain array indexes that caused the failure.
		 */
		badIndexes,
		/**
		 * Details of a permission escallation error thrown when modifying a resource or user that would grant the following extra permissions.
		 */
		escalation,
		/**
		 * These are the errors/warnings taken from the output of some other system.
		 */
		externals,
		/**
		 * Details for how a circular <see cref="Company"/> tree would have been created.
		 */
		parent,
		/**
		 * Details for how many and which <see cref="User"/>s are still in the <see cref="UserGroup"/>.
		 */
		userGroupInUse,
		/**
		 * Details for how many and which <see cref="Asset"/>s and <see cref="User"/>s are still using this <see cref="Contact"/>.
		 */
		contactInUse,
		/**
		 * Details for how many and which <see cref="FormResult"/>s are still using this <see cref="FormTemplate"/>.
		 */
		formTemplateInUse,
		/**
		 * For batch commands, these are the errors thrown by the sub-command.
		 */
		batch,
		/**
		 * Details about why the request failed an authentication process when a <see cref="Machine.secret"/> is used.
		 */
		secret,
	}