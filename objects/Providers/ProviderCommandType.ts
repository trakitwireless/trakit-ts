
	/**
	 * The kind of command for the device/modem.
	 */
	export enum ProviderCommandType {
		/**
		 * If the type of command has not yet been determined, or there was an error determining its type.
		 */
		unknown,
		/**
		 * Configuration
		 */
		config,
		/**
		 * Geofence
		 */
		geofence,
		/**
		 * Dispatch Job
		 */
		dispatch,
		/**
		 * GPS report
		 */
		gps,
		/**
		 * Status report
		 */
		status,
		/**
		 * Control output wire
		 */
		output,
		/**
		 * Custom (modem specific) message
		 */
		custom,
	}