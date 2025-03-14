/**
 * The kind of command for the device/modem.
 */
export enum ProviderCommandType {
	/**
	 * If the type of command has not yet been determined, or there was an error determining its type.
	 */
	unknown = "unknown",
	/**
	 * Configuration
	 */
	config = "config",
	/**
	 * Geofence
	 */
	geofence = "geofence",
	/**
	 * Dispatch Job
	 */
	dispatch = "dispatch",
	/**
	 * GPS report
	 */
	gps = "gps",
	/**
	 * Status report
	 */
	status = "status",
	/**
	 * Control output wire
	 */
	output = "output",
	/**
	 * Custom (modem specific) message
	 */
	custom = "custom",
}