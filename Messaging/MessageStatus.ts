/**
 * Memos have a lifetime and each status represents a memos's progress through it's life.
 */
export enum MessageStatus {
	/**
	 * Waiting to be sent.
	 */
	created = "created",
	/**
	 * Sent or received.
	 */
	processed = "processed",
	/**
	 * Failed to send.
	 */
	failed = "failed",
	/**
	 * Failed to send because too many memos were sent.
	 */
	throttled = "throttled",
	/**
	 * Memo sent, but returned with error from receiving server.
	 */
	bounceback = "bounceback",
	/**
	 * Memo has been responded to or acknowledged by the recipient.
	 */
	acknowledged = "acknowledged",
}