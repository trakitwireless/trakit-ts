

	/**
	 * A profile used to generate billable orders for a customer.
	 */
	export class BillingProfile extends Component implements IIdUlong, INamed, IBelongCompany, IDeletable {
		/**
		 * Unique identifier of this billing profile
		 */
		public id: ulong = NaN;
		/**
		 * Unique identifier of the Company that owns this profile and is sending the bill.
		 * {@link Company.id}
		 */
		public company: ulong = NaN;
		/**
		 * Unique identifier of the Company to which this rule pertains.
		 * {@link Company.id}
		 */
		public target: ulong = NaN;
		/**
		 * Unique identifier of the Company receiving the bill.
		 * Most of the time, this value is the same as the target.
		 * {@link Company.id}
		 */
		public billee: ulong = NaN;
		/**
		 * The name for this profile
		 *  <override max-length="254" />
		 */
		public name: string = "";
		/**
		 * Notes about the billing profile for the billee or target.
		 *  <override max-length="1000" />
		 */
		public notes: string = "";
		/**
		 * SMS messaging tiers
		 */
		public messages: BillableSmsProfile[] = [];
		/**
		 * Repeating cycle used for generating bills
		 */
		public cycle: BillingCycle;
		/**
		 * When is the first day of the billing cycle
		 */
		public cycleStart: Date = DATE();
		/**
		 * When should the cycle end (customer cancelled)
		 */
		public cycleEnd: Date = DATE();
		/**
		 * Pro-rated, or post-dated.
		 */
		public cyclePostDated: boolean = false;
		/**
		 * kind of money
		 */
		public currency: BillingCurrency;
		/**
		 * Are the Google services available to be proxied by the service?
		 */
		public googleServicesEnabled: boolean = false;

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