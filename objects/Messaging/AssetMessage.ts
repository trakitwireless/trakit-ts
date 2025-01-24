﻿
	/**
	 * A conversational message between users and assets.
	 */
	export class AssetMessage extends MessageBase {
		/**
		 * The folder under which this message is stored.
		 */
		public folder: MessageFolder;
		/**
		 * Indicates that this is a received message instead of a sent message.
		 */
		public incoming: boolean = false;
		/**
		 * The user that read this message.  This field is blank/null when unread.
		 * {@link User.login}
		 *  <override max-length="254" format="email" />
		 */
		public readBy: string = "";
	}