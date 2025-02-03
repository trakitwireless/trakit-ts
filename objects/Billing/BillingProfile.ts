

	/**
	 * A profile used to generate billable orders for a customer.
	 */
	export class BillingProfile extends Component implements IIdUlong, INamed, IBelongCompany, IDeletable {
		/**
		 * Unique identifier of this billing profile
		 */
		id: ulong = NaN;
		/**
		 * Unique identifier of the Company that owns this profile and is sending the bill.
		 * {@link Company.id}
		 */
		company: ulong = NaN;
		/**
		 * Unique identifier of the Company to which this rule pertains.
		 * {@link Company.id}
		 */
		target: ulong = NaN;
		/**
		 * Unique identifier of the Company receiving the bill.
		 * Most of the time, this value is the same as the target.
		 * {@link Company.id}
		 */
		billee: ulong = NaN;
		/**
		 * The name for this profile
		 *  <override max-length="254" />
		 */
		name: string = "";
		/**
		 * Notes about the billing profile for the billee or target.
		 *  <override max-length="1000" />
		 */
		notes: string = "";
		/**
		 * SMS messaging tiers
		 */
		messages: BillableSmsProfile[] = [];
		/**
		 * Repeating cycle used for generating bills
		 */
		cycle: BillingCycle;
		/**
		 * When is the first day of the billing cycle
		 */
		cycleStart: Date = DATE();
		/**
		 * When should the cycle end (customer cancelled)
		 */
		cycleEnd: Date = DATE();
		/**
		 * Pro-rated, or post-dated.
		 */
		cyclePostDated: boolean = false;
		/**
		 * kind of money
		 */
		currency: BillingCurrency;
		/**
		 * Are the Google services available to be proxied by the service?
		 */
		googleServicesEnabled: boolean = false;

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