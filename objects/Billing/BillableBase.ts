

	/**
	 * Most billable things share common attibutes.
	 */
	export abstract class BillableBase extends Component implements IIdUlong, INamed, IBelongBillingProfile, IBelongCompany, IDeletable {
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
		/**
		 * The name of this billing rule.
		 *  <override max-length="254" />
		 */
		name: string = "";
		/**
		 * Notes about billing this rule.
		 */
		notes: string = "";
		/**
		 * A custom field used to refer to an external system.  Examples are a cost codes, SOCs, discount plans...
		 *  <override max-length="100" />
		 */
		reference: string = "";
		/**
		 * SKU or SOC code
		 *  <override max-length="20" />
		 */
		sku: string = "";
		/**
		 * Date this billing rule takes effect.
		 * These dates are used to determine how much of the cycle is billed.
		 */
		start: Date = DATE();
		/**
		 * Date this billing rule is applied until; null means it never ends.
		 * These dates are used to determine how much of the cycle is billed.
		 */
		end: Date = DATE();
		/**
		 * Cost per cycle for this plan
		 */
		amount: double = NaN;

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