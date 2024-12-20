
	/// <summary>
	/// Progress lifetime of command for the device/modem.
	/// </summary>
	export enum ProviderCommandStatus {
		/// <summary>
		/// The new command has been created, but not yet sent to the provider.
		/// </summary>
		created,
		/// <summary>
		/// Command was processed and sent to the provider.
		/// </summary>
		pending,
		/// <summary>
		/// Provider is taking some action related to this command. eg. Checking in for config update or getting tasks list.
		/// </summary>
		inProgress,
		/// <summary>
		/// Command was successfully processed by the provider.
		/// </summary>
		completed,
		/// <summary>
		/// Something went wrong while trying to send or process the command.
		/// </summary>
		failed,
		/// <summary>
		/// Sending of the new command was halted by a user.
		/// </summary>
		cancelled,
	}