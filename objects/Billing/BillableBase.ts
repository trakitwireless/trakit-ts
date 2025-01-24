

	/**
	 * Most billable things share common attibutes.
	 */
	export abstract class BillableBase extends Component implements IIdUlong, INamed, IBelongBillingProfile, IBelongCompany, IDeletable {
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
		/**
		 * The name of this billing rule.
		 *  <override max-length="254" />
		 */
		public name: string = "";
		/**
		 * Notes about billing this rule.
		 */
		public notes: string = "";
		/**
		 * A custom field used to refer to an external system.  Examples are a cost codes, SOCs, discount plans...
		 *  <override max-length="100" />
		 */
		public reference: string = "";
		/**
		 * SKU or SOC code
		 *  <override max-length="20" />
		 */
		public sku: string = "";
		/**
		 * Date this billing rule takes effect.
		 * These dates are used to determine how much of the cycle is billed.
		 */
		public start: Date = DATE();
		/**
		 * Date this billing rule is applied until; null means it never ends.
		 * These dates are used to determine how much of the cycle is billed.
		 */
		public end: Date = DATE();
		/**
		 * Cost per cycle for this plan
		 */
		public amount: double = NaN;

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