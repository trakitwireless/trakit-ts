
	/// <summary>
	/// The kind of protocol used for this memo.
	/// </summary>
	export enum MessageType {
		/// <summary>
		/// If the type of memo has not yet been determined, or there was an error determining its type.
		/// </summary>
		unknown,
		/// <summary>
		/// Short Message Service (text message)
		/// </summary>
		sms,
		/// <summary>
		/// Email
		/// </summary>
		email,
		/// <summary>
		/// Garmin/Magellan/etc (Personal Navigation Device)
		/// </summary>
		pnd,
		/// <summary>
		/// Google Cloud Message
		/// </summary>
		gcm,
		/// <summary>
		/// Apple Push Notification Service
		/// </summary>
		apn,
		/// <summary>
		/// WebSocket alert message
		/// </summary>
		socket,
	}