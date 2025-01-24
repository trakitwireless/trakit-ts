
	/**
	 * The kind of protocol used for this memo.
	 */
	export enum MessageType {
		/**
		 * If the type of memo has not yet been determined, or there was an error determining its type.
		 */
		unknown,
		/**
		 * Short Message Service (text message)
		 */
		sms,
		/**
		 * Email
		 */
		email,
		/**
		 * Garmin/Magellan/etc (Personal Navigation Device)
		 */
		pnd,
		/**
		 * Google Cloud Message
		 */
		gcm,
		/**
		 * Apple Push Notification Service
		 */
		apn,
		/**
		 * WebSocket alert message
		 */
		socket,
	}