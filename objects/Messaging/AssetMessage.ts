
	/// <summary>
	/// A conversational message between users and assets.
	/// </summary>
	export class AssetMessage extends MessageBase {
		/// <summary>
		/// The folder under which this message is stored.
		/// </summary>
		public folder: MessageFolder;
		/// <summary>
		/// Indicates that this is a received message instead of a sent message.
		/// </summary>
		public incoming: boolean = false;
		/// <summary>
		/// The user that read this message.  This field is blank/null when unread.
		/// </summary>
		/// <seealso cref="User.login" />
		/// <override max-length="254" format="email" />
		public readBy: string = "";
	}