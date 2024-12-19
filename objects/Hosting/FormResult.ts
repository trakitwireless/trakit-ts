

	/// <summary>
	/// A completed form submitted by a <see cref="User"/> or <see cref="Asset"/>.
	/// </summary>
	export class FormResult extends Component implements IIdUlong, INamed, IBelongCompany, ILabelled, IDeletable {
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
		/// The <see cref="FormTemplate"/> to which this form belongs.
		/// </summary>
		public template: ulong = NaN;
		/// <summary>
		/// The <see cref="Asset"/> to which this form belongs.
		/// </summary>
		/// <seealso cref="Asset.id" />
		public asset: ulong = NaN;
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
		/// All the values for fillable fields by index.
		/// </summary>
		public fields: Map<ulong, string>;
		/// <summary>
		/// A timestamp from when this form was completed by a <see cref="User"/> or <see cref="Asset"/>.
		/// </summary>
		public completed: Date = DATE();
		/// <summary>
		/// The coordinates of the <see cref="User"/> or <see cref="Asset"/> from when the form was completed.
		/// </summary>
		public latlng: LatLng;
		/// <summary>
		/// Clocked-in driver name who made the update.
		/// Null if not clocked-in, or no changes have been made.
		/// </summary>
		public driver: string = "";

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