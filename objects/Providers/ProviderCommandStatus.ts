
	/**
	 * Progress lifetime of command for the device/modem.
	 */
	export enum ProviderCommandStatus {
		/**
		 * The new command has been created, but not yet sent to the provider.
		 */
		created,
		/**
		 * Command was processed and sent to the provider.
		 */
		pending,
		/**
		 * Provider is taking some action related to this command. eg. Checking in for config update or getting tasks list.
		 */
		inProgress,
		/**
		 * Command was successfully processed by the provider.
		 */
		completed,
		/**
		 * Something went wrong while trying to send or process the command.
		 */
		failed,
		/**
		 * Sending of the new command was halted by a user.
		 */
		cancelled,
	}