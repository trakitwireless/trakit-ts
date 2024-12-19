

	/// <summary>
	/// A partially created report used to quickly build results.
	/// </summary>
	export class ReportTemplate extends Component implements IIdUlong, INamed, IBelongCompany, IVisual, IDeletable {
		/// <summary>
		/// Unique identifier
		/// </summary>
		public id: ulong = NaN;
		/// <summary>
		/// The company to which this report belongs
		/// </summary>
		/// <seealso cref="Company.id" />
		public company: ulong = NaN;
		/// <summary>
		/// Refers to the type of logic used by this report.
		/// </summary>
		public kind: ReportType;
		/// <summary>
		/// Name of this report.
		/// </summary>
		/// <override max-length="100" />
		public name: string = "";
		/// <summary>
		/// Notes about this report.
		/// </summary>
		public notes: string = "";
		/// <summary>
		/// Specified parameters for the report logic, targeted Assets, and filtering Places.
		/// </summary>
		public options: ReportOptions;

		/// <summary>
		/// The fill/background colour of the icon.
		/// </summary>
		/// <override max-length="22" format="colour" />
		public fill: string = "";
		/// <summary>
		/// Outline and graphic colour.
		/// </summary>
		/// <override max-length="22" format="colour" />
		public stroke: string = "";
		/// <summary>
		/// The name of the symbol for this report.
		/// </summary>
		/// <override max-length="22" format="codified" />
		public graphic: string = "";

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