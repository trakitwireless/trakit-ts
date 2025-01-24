
	/**
	 * Progress lifetime of changing the on-board information of a remote device.
	 */
	export enum ProvisioningStatus {
		/**
		 * The new configuration has been created, but not yet sent to the provider.
		 */
		created,
		/**
		 * Your guess is as good as mine.  It should never be this.
		 */
		unknown,
		/**
		 * Provider is notified of new configuration, but has not yet checked in.
		 */
		pending,
		/**
		 * A message was sent to the provider asking it to check in.
		 */
		otaSent,
		/**
		 * Currently sending configuration over-the-air to the provider.
		 */
		inProgress,
		/**
		 * Only a partial configuration was sent to the provider.
		 */
		partial,
		/**
		 * The maximum number of retries were attempted before giving up.
		 */
		maxRetries,
		/**
		 * Something went wrong while trying to send configuration.
		 */
		error,
		/**
		 * New configuration successfully sent to provider.
		 */
		completed,
		/**
		 * Sending of the new configuration was halted by a user.
		 */
		cancelled,
	}