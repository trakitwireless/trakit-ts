
	/// <summary>
	/// The kind of command for the device/modem.
	/// </summary>
	export enum ProviderCommandType {
		/// <summary>
		/// If the type of command has not yet been determined, or there was an error determining its type.
		/// </summary>
		unknown,
		/// <summary>
		/// Configuration
		/// </summary>
		config,
		/// <summary>
		/// Geofence
		/// </summary>
		geofence,
		/// <summary>
		/// Dispatch Job
		/// </summary>
		dispatch,
		/// <summary>
		/// GPS report
		/// </summary>
		gps,
		/// <summary>
		/// Status report
		/// </summary>
		status,
		/// <summary>
		/// Control output wire
		/// </summary>
		output,
		/// <summary>
		/// Custom (modem specific) message
		/// </summary>
		custom,
	}