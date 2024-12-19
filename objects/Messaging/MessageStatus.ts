
	/// <summary>
	/// Memos have a lifetime and each status represents a memos's progress through it's life.
	/// </summary>
	export enum MessageStatus {
		/// <summary>
		/// Waiting to be sent.
		/// </summary>
		created,
		/// <summary>
		/// Sent or received.
		/// </summary>
		processed,
		/// <summary>
		/// Failed to send.
		/// </summary>
		failed,
		/// <summary>
		/// Failed to send because too many memos were sent.
		/// </summary>
		throttled,
		/// <summary>
		/// Memo sent, but returned with error from receiving server.
		/// </summary>
		bounceback,
		/// <summary>
		/// Memo has been responded to or acknowledged by the recipient.
		/// </summary>
		acknowledged,
	}