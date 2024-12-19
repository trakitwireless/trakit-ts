

	/// <summary>
	/// Some work that needs to be done by performing one or more <see cref="DispatchStep"/>s.
	/// </summary>
	export class DispatchJob extends Component implements IIdUlong, ILabelled, IBelongCompany, IDeletable {
		/// <summary>
		/// Unique identifier of this job.
		/// </summary>
		public id: ulong = NaN;
		/// <summary>
		/// The company to which this job belongs.
		/// </summary>
		/// <seealso cref="Company.id" />
		public company: ulong = NaN;
		/// <summary>
		/// The <see cref="Asset"/> to which this job belongs.
		/// This value is null when unassigned.
		/// </summary>
		/// <seealso cref="Asset.id" />
		public asset: ulong = NaN;
		/// <summary>
		/// A name for the work needed to be performed.
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
		/// Instructions (filled out by dispatcher) for the field-employee to help them complete the job.
		/// </summary>
		public instructions: string = "";
		/// <summary>
		/// A list of hosted <see cref="Document"/> identifiers attached to this job.
		/// </summary>
		/// <override max-count="10">
		/// <values>
		/// <seealso cref="Document.id" />
		/// </values>
		/// </override>
		public attachments: ulong[] = [];
		/// <summary>
		/// A list of hosted <see cref="FormResult"/> identifiers attached to this job.
		/// </summary>
		/// <override max-count="10">
		/// <values>
		/// <seealso cref="FormResult.id" />
		/// </values>
		/// </override>
		public forms: ulong[] = [];
		/// <summary>
		/// The importance of this job when scheduling for an asset.
		/// </summary>
		public priority: DispatchJobPriority;
		/// <summary>
		/// Codified label names used to relate (unassigned) jobs to <see cref="Asset"/>s.
		/// </summary>
		/// <override>
		/// <values format="codified">
		/// <seealso cref="LabelStyle.code" />
		/// </values>
		/// </override>
		public labels: string[] = [];
		/// <summary>
		/// The codified status tag names reflecting the conditions of this job.
		/// </summary>
		/// <override>
		/// <values format="codified">
		/// <seealso cref="LabelStyle.code" />
		/// </values>
		/// </override>
		public tags: string[] = [];
		/// <summary>
		/// A list of coordinates to visit in order to carry out the work for this job.
		/// </summary>
		public steps: DispatchStep[] = [];
		/// <summary>
		/// When this job was originally created.
		/// </summary>
		public created: Date = DATE();
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