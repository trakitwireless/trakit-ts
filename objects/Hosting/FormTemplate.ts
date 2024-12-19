

	/// <summary>
	/// The full definition of a form that needs to be filled out.
	/// </summary>
	export class FormTemplate extends Component implements IIdUlong, INamed, IBelongCompany, ILabelled, IVisual, IDeletable {
		/// <summary>
		/// Unique identifier of this form.
		/// </summary>
		public id: ulong = NaN;
		/// <summary>
		/// The <see cref="Company"/> to which this form belongs.
		/// </summary>
		/// <seealso cref="Company.id" />
		public company: ulong = NaN;
		/// <summary>
		/// Name of this form.
		/// </summary>
		/// <override max-length="100" />
		public name: string = "";
		/// <summary>
		/// Notes about this form.
		/// </summary>
		public notes: string = "";
		/// <summary>
		/// Codified label names used to relate forms to <see cref="Asset"/>s.
		/// </summary>
		/// <override>
		/// <values format="codified">
		/// <seealso cref="LabelStyle.code" />
		/// </values>
		/// </override>
		public labels: string[] = [];
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
		/// The name of the symbol for this template.
		/// </summary>
		/// <override max-length="22" format="codified" />
		public graphic: string = "";
		/// <summary>
		/// All the user fillable fields by name.
		/// </summary>
		public fields: FormFieldBase[] = [];

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