
/**
 * The types of alerts used.
 */
export enum NotificationMethod {
	/**
	 * A separate message sent across the WebSocket.
	 */
	popup = "popup",
	/**
	 * A text message (SMS).
	 */
	sms = "sms",
	/**
	 * Carrier pigeon.
	 */
	email = "email",
}