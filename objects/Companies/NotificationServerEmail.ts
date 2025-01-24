
	/**
	 * The server used for notification and conversational email messages sent and received by the system.
	 */
	export class NotificationServerEmail {
		/**
		 * The type of incoming protocol to use (IMAP or POP3).
		 */
		public incomingType: string = "";
		/**
		 * The domain or IP address of the incoming email server.
		 */
		public incomingAddress: string = "";
		/**
		 * The port number of the incoming email server.
		 */
		public incomingPort: ushort = NaN;
		/**
		 * The username used to login to the incoming email server.
		 */
		public incomingLogin: string = "";
		/**
		 * Is the incoming email server 		/**
		 * IMAP message sequence number so only recent messages are retrieved.
		 */
		public incomingMessageNumber: uint = NaN;
		/**
		 * The type of outgoing protocol to use (only SMTP).
		 */
		public outgoingType: string = "";
		/**
		 * The domain or IP address of the outgoing email server.
		 */
		public outgoingAddress: string = "";
		/**
		 * The port number of the outgoing email server.
		 */
		public outgoingPort: ushort = NaN;
		/**
		 * The username used to login to the outgoing email server.
		 */
		public outgoingLogin: string = "";
		/**
		 * Is the outgoing email server 		/**
		 * An optional field which can be set as the "sent from" and/or "reply-to" address.
		 *  <override format="email" />
		 */
		public outgoingReplyTo: string = "";
	}