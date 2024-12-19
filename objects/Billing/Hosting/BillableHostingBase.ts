

	/// <summary>
	/// Hosted things share a lot of common attributes.
	/// </summary>
	export abstract class BillableHostingBase extends Component implements IIdUlong, IBelongBillingProfile, IBelongCompany, IDeletable {
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