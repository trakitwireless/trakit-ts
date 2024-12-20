

	/// <summary>
	/// The colours and styles used by this company to tag and label Assets, Places, and other things.
	/// </summary>
	export class CompanyStyles extends Component implements IIdUlong, IAmCompany {
		/// <summary>
		/// Unique identifier of the Company.
		/// </summary>
		/// <seealso cref="Company.id" />
		public id: ulong = NaN;
		/// <summary>
		/// The unique identifier of this company's parent organization.
		/// </summary>
		/// <seealso cref="Company.id" />
		public parent: ulong = NaN;
		/// <summary>
		/// The styles for labels added to Assets, Places, and other things.
		/// </summary>
		public labels: Map<string, LabelStyle>;
		/// <summary>
		/// The styles for status tags added to Assets.
		/// </summary>
		public tags: Map<string, LabelStyle>;

		// IRequestable
		/// <summary>
		/// The <see cref="id"/> is the key.
		/// </summary>
		/// <returns></returns>
		public getKey(): string { return this.id.toString(); }
	}