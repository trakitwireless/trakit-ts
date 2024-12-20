
	/// <summary>
	/// Progress lifetime of changing the on-board information of a remote device.
	/// </summary>
	export enum ProvisioningStatus {
		/// <summary>
		/// The new configuration has been created, but not yet sent to the provider.
		/// </summary>
		created,
		/// <summary>
		/// Your guess is as good as mine.  It should never be this.
		/// </summary>
		unknown,
		/// <summary>
		/// Provider is notified of new configuration, but has not yet checked in.
		/// </summary>
		pending,
		/// <summary>
		/// A message was sent to the provider asking it to check in.
		/// </summary>
		otaSent,
		/// <summary>
		/// Currently sending configuration over-the-air to the provider.
		/// </summary>
		inProgress,
		/// <summary>
		/// Only a partial configuration was sent to the provider.
		/// </summary>
		partial,
		/// <summary>
		/// The maximum number of retries were attempted before giving up.
		/// </summary>
		maxRetries,
		/// <summary>
		/// Something went wrong while trying to send configuration.
		/// </summary>
		error,
		/// <summary>
		/// New configuration successfully sent to provider.
		/// </summary>
		completed,
		/// <summary>
		/// Sending of the new configuration was halted by a user.
		/// </summary>
		cancelled,
	}