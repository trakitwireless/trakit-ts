

	/// <summary>
	/// A task assigned to an asset which represents a coordinate on the map which must be visited.
	/// </summary>
	[Obsolete("Use DispatchJob instead")]
	export class DispatchTask extends Component implements IIdUlong, IBelongCompany, IBelongAsset, IDeletable {
		/// <summary>
		/// Unique identifier of this task.
		/// </summary>
		public id: ulong = NaN;
		/// <summary>
		/// The company to which this task belongs.
		/// </summary>
		/// <seealso cref="Company.id" />
		public company: ulong = NaN;
		/// <summary>
		/// The asset to which this task belongs.
		/// </summary>
		/// <seealso cref="Asset.id" />
		public asset: ulong = NaN;
		/// <summary>
		/// The name of this task or the work needed to be performed.
		/// </summary>
		/// <override max-length="100" />
		public name: string = "";
		/// <summary>
		/// Name/value collections of custom fields used to refer to external systems.
		/// </summary>
		/// <override max-count="10">
		/// <keys max-length="20" />
		/// <values max-length="100" />
		/// </override>
		public references: Map<string, string>;
		/// <summary>
		/// An optional place which can be used as a template instead of providing lat/long coordinates and a street address.
		/// </summary>
		/// <seealso cref="Place.id" />
		public place: ulong = NaN;
		/// <summary>
		/// The street address of where the task must be completed.
		/// </summary>
		/// <override max-length="500" />
		public address: string = "";
		/// <summary>
		/// The lat/long coordinates of where the task must be completed.
		/// </summary>
		public latlng: LatLng;
		/// <summary>
		/// The progress of this task.
		/// </summary>
		public status: DispatchTaskStatus;
		/// <summary>
		/// When this task was created.
		/// </summary>
		public created: Date = DATE();
		/// <summary>
		/// The optional estimated time of arrival for the asset.
		/// </summary>
		public eta: Date = DATE();
		/// <summary>
		/// The optional expected duration of the work for this task.
		/// </summary>
		public duration?: TimeSpan;
		/// <summary>
		/// The date/time stamp of when the asset arrived at this task.
		/// </summary>
		public arrived: Date = DATE();
		/// <summary>
		/// The date/time stamp of when this task was completed.
		/// </summary>
		public completed: Date = DATE();
		/// <summary>
		/// Instructions (filled out by dispatcher) for the field-employee to help them completed the task.
		/// </summary>
		public instructions: string = "";
		/// <summary>
		/// Indicates whether the task has a signature.
		/// </summary>
		public signature: boolean = false;
		/// <summary>
		/// The name of the person who signed the task's completion.
		/// </summary>
		/// <override max-length="100" />
		public signatory: string = "";
		/// <summary>
		/// Notes about the status of the work filled in by field-employee.
		/// </summary>
		public notes: string = "";
		/// <summary>
		/// A list of hosted <see cref="Document"/> identifiers attached to this task.
		/// </summary>
		/// <override max-count="10">
		/// <values>
		/// <seealso cref="Document.id" />
		/// </values>
		/// </override>
		public attachments: ulong[] = [];
		/// <summary>
		/// Either the user's login, or provider's identifier that changed this task
		/// </summary>
		public updatedBy: string = "";
		/// <summary>
		/// Timestamp from the last change made to this task
		/// </summary>
		public updatedUtc: Date = DATE();

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