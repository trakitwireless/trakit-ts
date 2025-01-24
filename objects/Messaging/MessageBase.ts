

	/**
	 * A base class for Alerts and Messages.
	 */
	export abstract class MessageBase extends Component implements IIdUlong, IBelongCompany, IBelongAsset, IDeletable {
		/**
		 * Unique identifier of this memo.
		 */
		public id: ulong = NaN;
		/**
		 * The company to which this memo belongs.
		 * {@link Company.id}
		 */
		public company: ulong = NaN;
		/**
		 * Lifetime status
		 */
		public status: MessageStatus;
		/**
		 * Protocol type
		 */
		public kind: MessageType;
		/**
		 * Recipient address
		 *  <override min-length="6" max-length="254" />
		 */
		public to: string = "";
		/**
		 * Sender address
		 *  <override min-length="6" max-length="254" />
		 */
		public from: string = "";
		/**
		 * The main contents of the memo.
		 */
		public body: string = "";
		/**
		 * Date/time stamp of when the memo was processed.
		 */
		public processed: Date = DATE();
		/**
		 * Date/time stamp of when the memo was delivered (or sent if delivery information unavailable).
		 */
		public delivered: Date = DATE();

		/**
		 * The subject of this message.
		 *  <override max-length="100" />
		 */
		public subject: string = "";
		/**
		 * The asset to which this message relates.
		 * {@link Asset.id}
		 */
		public asset: ulong = NaN;
		/**
		 * The user who sent/received this message.
		 * {@link User.login}
		 *  <override max-length="254" format="email" />
		 */
		public user: string = "";

		// IRequestable
		/**
		 * The <see cref="id"/> is the key.
		 */
public getKey(): string { return this.id.toString(); }

		// IDeletable
		/**
		 * Indicates whether this object was deleted.
		 */
		public deleted: boolean = false;
		/**
		 * Timestamp from the action that deleted or suspended this object.
		 */
		public since: Date = DATE();
	}