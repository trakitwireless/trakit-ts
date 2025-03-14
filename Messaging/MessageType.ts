/**
 * The kind of protocol used for this memo.
 */
export enum MessageType {
	/**
	 * If the type of memo has not yet been determined, or there was an error determining its type.
	 */
	unknown = "unknown",
	/**
	 * Short Message Service (text message)
	 */
	sms = "sms",
	/**
	 * Email
	 */
	email = "email",
	/**
	 * Garmin/Magellan/etc (Personal Navigation Device)
	 */
	pnd = "pnd",
	/**
	 * Google Cloud Message
	 */
	gcm = "gcm",
	/**
	 * Apple Push Notification Service
	 */
	apn = "apn",
	/**
	 * WebSocket alert message
	 */
	socket = "socket",
}