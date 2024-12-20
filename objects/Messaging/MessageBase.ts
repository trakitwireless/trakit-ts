

	/// <summary>
	/// A base class for Alerts and Messages.
	/// </summary>
	export abstract class MessageBase extends Component implements IIdUlong, IBelongCompany, IBelongAsset, IDeletable {
		/// <summary>
		/// Unique identifier of this memo.
		/// </summary>
		public id: ulong = NaN;
		/// <summary>
		/// The company to which this memo belongs.
		/// </summary>
		/// <seealso cref="Company.id" />
		public company: ulong = NaN;
		/// <summary>
		/// Lifetime status
		/// </summary>
		public status: MessageStatus;
		/// <summary>
		/// Protocol type
		/// </summary>
		public kind: MessageType;
		/// <summary>
		/// Recipient address
		/// </summary>
		/// <override min-length="6" max-length="254" />
		public to: string = "";
		/// <summary>
		/// Sender address
		/// </summary>
		/// <override min-length="6" max-length="254" />
		public from: string = "";
		/// <summary>
		/// The main contents of the memo.
		/// </summary>
		public body: string = "";
		/// <summary>
		/// Date/time stamp of when the memo was processed.
		/// </summary>
		public processed: Date = DATE();
		/// <summary>
		/// Date/time stamp of when the memo was delivered (or sent if delivery information unavailable).
		/// </summary>
		public delivered: Date = DATE();

		/// <summary>
		/// The subject of this message.
		/// </summary>
		/// <override max-length="100" />
		public subject: string = "";
		/// <summary>
		/// The asset to which this message relates.
		/// </summary>
		/// <seealso cref="Asset.id" />
		public asset: ulong = NaN;
		/// <summary>
		/// The user who sent/received this message.
		/// </summary>
		/// <seealso cref="User.login" />
		/// <override max-length="254" format="email" />
		public user: string = "";

		// IRequestable
		/// <summary>
		/// The <see cref="id"/> is the key.
		/// </summary>
		/// <returns></returns>
		public getKey(): string { return this.id.toString(); }

		// IDeletable
		/// <summary>
		/// Indicates whether this object was deleted.
		/// </summary>
		public deleted: boolean = false;
		/// <summary>
		/// Timestamp from the action that deleted or suspended this object.
		/// </summary>
		public since: Date = DATE();
	}