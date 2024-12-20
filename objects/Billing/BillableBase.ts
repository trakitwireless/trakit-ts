

	/// <summary>
	/// Most billable things share common attibutes.
	/// </summary>
	export abstract class BillableBase extends Component implements IIdUlong, INamed, IBelongBillingProfile, IBelongCompany, IDeletable {
		/// <summary>
		/// Unique identifier of this hosting rule.
		/// </summary>
		public id: ulong = NaN;
		/// <summary>
		/// Unique identifier of the Company that owns this hosting rule.
		/// </summary>
		/// <seealso cref="Company.id" />
		public company: ulong = NaN;
		/// <summary>
		/// Unique identifier of this rule's billing profile.
		/// </summary>
		/// <seealso cref="BillingProfile.id" />
		public profile: ulong = NaN;
		/// <summary>
		/// The name of this billing rule.
		/// </summary>
		/// <override max-length="254" />
		public name: string = "";
		/// <summary>
		/// Notes about billing this rule.
		/// </summary>
		public notes: string = "";
		/// <summary>
		/// A custom field used to refer to an external system.  Examples are a cost codes, SOCs, discount plans...
		/// </summary>
		/// <override max-length="100" />
		public reference: string = "";
		/// <summary>
		/// SKU or SOC code
		/// </summary>
		/// <override max-length="20" />
		public sku: string = "";
		/// <summary>
		/// Date this billing rule takes effect.
		/// These dates are used to determine how much of the cycle is billed.
		/// </summary>
		public start: Date = DATE();
		/// <summary>
		/// Date this billing rule is applied until; null means it never ends.
		/// These dates are used to determine how much of the cycle is billed.
		/// </summary>
		public end: Date = DATE();
		/// <summary>
		/// Cost per cycle for this plan
		/// </summary>
		public amount: double = NaN;

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