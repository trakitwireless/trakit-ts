

	/**
	 * Hosted things share a lot of common attributes.
	 */
	export abstract class BillableHostingBase extends Component implements IIdUlong, IBelongBillingProfile, IBelongCompany, IDeletable {
		/**
		 * Unique identifier of this hosting rule.
		 */
		public id: ulong = NaN;
		/**
		 * Unique identifier of the Company that owns this hosting rule.
		 * {@link Company.id}
		 */
		public company: ulong = NaN;
		/**
		 * Unique identifier of this rule's billing profile.
		 * {@link BillingProfile.id}
		 */
		public profile: ulong = NaN;

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