


	/// <summary>
	/// Full breakdown of billable details per targeted asset.
	/// </summary>
	export class BillingReportServiceBreakdown implements INamed implements IBelongAsset {
		/// <summary>
		/// The asset to which this breakdown instance belongs.
		/// </summary>
		/// <seealso cref="Asset.id" />
		public asset: ulong = NaN;
		/// <summary>
		/// Type of asset.
		/// </summary>
		public kind: AssetType;
		/// <summary>
		/// Asset's name.
		/// </summary>
		/// <override max-length="100" />
		public name: string = "";
		/// <summary>
		/// Notes about the asset.
		/// </summary>
		public notes: string = "";
		/// <summary>
		/// Indicates when this Asset was created.
		/// </summary>
		public created: Date = DATE();
		/// <summary>
		/// Indicates when this Asset was deleted.
		/// </summary>
		public deleted: Date = DATE();
		/// <summary>
		/// Indicates when this Asset wass suspended from event processing.
		/// </summary>
		public suspended: Date = DATE();
		/// <summary>
		/// Indicates when this Asset was restored after being deleted.
		/// </summary>
		public restored: Date = DATE();
		/// <summary>
		/// Indicates when this Asset was revived after being suspended.
		/// </summary>
		public revived: Date = DATE();
		/// <summary>
		/// Codified label names.
		/// </summary>
		/// <seealso cref="LabelStyle.code" />
		/// <override>
		/// <values format="codified">
		/// <seealso cref="LabelStyle.code" />
		/// </values>
		/// </override>
		public labels: string[] = [];
		/// <summary>
		/// The list of devices providing events for this asset.
		/// </summary>
		/// <seealso cref="Provider.id" />
		public providers: string[] = [];
		/// <summary>
		/// The list of phone numbers for this asset.
		/// </summary>
		/// <override>
		/// <values format="phone" />
		/// </override>
		public phoneNumbers: ulong[] = [];
		/// <summary>
		/// Indicates when this Asset was last updated.
		/// </summary>
		public updatedDts: Date = DATE();
		/// <summary>
		/// Number of days this Asset is being billed for.
		/// </summary>
		public billableDays: double = NaN;
		/// <summary>
		/// Cost per billing cycle for this asset.
		/// </summary>
		public cost: double = NaN;
		/// <summary>
		/// Number of days this Asset was suspended.
		/// </summary>
		public suspendedDays: double = NaN;
		/// <summary>
		/// Cost per billing cycle for suspended asset.
		/// </summary>
		public suspendedCost: double = NaN;
		/// <summary>
		/// Total amount being billed for this asset.
		/// </summary>
		public total: double = NaN;
	}