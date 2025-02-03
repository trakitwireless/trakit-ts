

	/**
	 * A base class for Alerts and Messages.
	 */
	export abstract class MessageBase extends Component implements IIdUlong, IBelongCompany, IBelongAsset, IDeletable {
		/**
		 * Unique identifier of this memo.
		 */
		id: ulong = NaN;
		/**
		 * The company to which this memo belongs.
		 * {@link Company.id}
		 */
		company: ulong = NaN;
		/**
		 * Lifetime status
		 */
		status: MessageStatus;
		/**
		 * Protocol type
		 */
		kind: MessageType;
		/**
		 * Recipient address
		 *  <override min-length="6" max-length="254" />
		 */
		to: string = "";
		/**
		 * Sender address
		 *  <override min-length="6" max-length="254" />
		 */
		from: string = "";
		/**
		 * The main contents of the memo.
		 */
		body: string = "";
		/**
		 * Date/time stamp of when the memo was processed.
		 */
		processed: Date = DATE();
		/**
		 * Date/time stamp of when the memo was delivered (or sent if delivery information unavailable).
		 */
		delivered: Date = DATE();

		/**
		 * The subject of this message.
		 *  <override max-length="100" />
		 */
		subject: string = "";
		/**
		 * The asset to which this message relates.
		 * {@link Asset.id}
		 */
		asset: ulong = NaN;
		/**
		 * The user who sent/received this message.
		 * {@link User.login}
		 *  <override max-length="254" format="email" />
		 */
		user: string = "";

		// IRequestable
		/**
		 * The {@link id} is the key.
		 */
public getKey(): string { return this.id.toString(); }

		// IDeletable
		/**
		 * Indicates whether this object was deleted.
		 */
		deleted: boolean = false;
		/**
		 * Timestamp from the action that deleted or suspended this object.
		 */
		since: Date = DATE();
	}