
	/**
	 * Memos have a lifetime and each status represents a memos's progress through it's life.
	 */
	export enum MessageStatus {
		/**
		 * Waiting to be sent.
		 */
		created,
		/**
		 * Sent or received.
		 */
		processed,
		/**
		 * Failed to send.
		 */
		failed,
		/**
		 * Failed to send because too many memos were sent.
		 */
		throttled,
		/**
		 * Memo sent, but returned with error from receiving server.
		 */
		bounceback,
		/**
		 * Memo has been responded to or acknowledged by the recipient.
		 */
		acknowledged,
	}