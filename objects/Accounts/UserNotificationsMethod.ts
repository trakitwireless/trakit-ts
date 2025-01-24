
	/**
	 * The types of alerts used.
	 *  <override name="NotificationMethod" />
	 */
	export enum UserNotificationsMethod {
		/**
		 * A separate message sent across the WebSocket.
		 */
		popup,
		/**
		 * A text message (SMS).
		 */
		sms,
		/**
		 * Carrier pigeon.
		 */
		email,
	}