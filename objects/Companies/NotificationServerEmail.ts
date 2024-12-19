
	/// <summary>
	/// The server used for notification and conversational email messages sent and received by the system.
	/// </summary>
	export class NotificationServerEmail {
		/// <summary>
		/// The type of incoming protocol to use (IMAP or POP3).
		/// </summary>
		public incomingType: string = "";
		/// <summary>
		/// The domain or IP address of the incoming email server.
		/// </summary>
		public incomingAddress: string = "";
		/// <summary>
		/// The port number of the incoming email server.
		/// </summary>
		public incomingPort: ushort = NaN;
		/// <summary>
		/// The username used to login to the incoming email server.
		/// </summary>
		public incomingLogin: string = "";
		/// <summary>
		/// Is the incoming email server 		/// <summary>
		/// IMAP message sequence number so only recent messages are retrieved.
		/// </summary>
		public incomingMessageNumber: uint = NaN;
		/// <summary>
		/// The type of outgoing protocol to use (only SMTP).
		/// </summary>
		public outgoingType: string = "";
		/// <summary>
		/// The domain or IP address of the outgoing email server.
		/// </summary>
		public outgoingAddress: string = "";
		/// <summary>
		/// The port number of the outgoing email server.
		/// </summary>
		public outgoingPort: ushort = NaN;
		/// <summary>
		/// The username used to login to the outgoing email server.
		/// </summary>
		public outgoingLogin: string = "";
		/// <summary>
		/// Is the outgoing email server 		/// <summary>
		/// An optional field which can be set as the "sent from" and/or "reply-to" address.
		/// </summary>
		/// <override format="email" />
		public outgoingReplyTo: string = "";
	}