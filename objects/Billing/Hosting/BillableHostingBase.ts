

	/**
	 * Hosted things share a lot of common attributes.
	 */
	export abstract class BillableHostingBase extends Component implements IIdUlong, IBelongBillingProfile, IBelongCompany, IDeletable {
		/**
		 * Unique identifier of this hosting rule.
		 */
		id: ulong = NaN;
		/**
		 * Unique identifier of the Company that owns this hosting rule.
		 * {@link Company.id}
		 */
		company: ulong = NaN;
		/**
		 * Unique identifier of this rule's billing profile.
		 * {@link BillingProfile.id}
		 */
		profile: ulong = NaN;

		// IRequestable
		/**
		 * The {@link id} is the key.
		 */
getKey(): string { return this.id.toString(); }

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