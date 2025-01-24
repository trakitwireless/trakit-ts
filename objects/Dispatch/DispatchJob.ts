

	/**
	 * Some work that needs to be done by performing one or more <see cref="DispatchStep"/>s.
	 */
	export class DispatchJob extends Component implements IIdUlong, ILabelled, IBelongCompany, IDeletable {
		/**
		 * Unique identifier of this job.
		 */
		public id: ulong = NaN;
		/**
		 * The company to which this job belongs.
		 * {@link Company.id}
		 */
		public company: ulong = NaN;
		/**
		 * The <see cref="Asset"/> to which this job belongs.
		 * This value is null when unassigned.
		 * {@link Asset.id}
		 */
		public asset: ulong = NaN;
		/**
		 * A name for the work needed to be performed.
		 *  <override max-length="100" />
		 */
		public name: string = "";
		/**
		 * Name/value collections of custom fields used to refer to external systems.
		 *  <override max-count="10">
		 *  <keys max-length="20" />
		 *  <values max-length="100" />
		 *  </override>
		 */
		public references: Map<string, string>;
		/**
		 * Instructions (filled out by dispatcher) for the field-employee to help them complete the job.
		 */
		public instructions: string = "";
		/**
		 * A list of hosted <see cref="Document"/> identifiers attached to this job.
		 *  <override max-count="10">
		 *  <values>
		 * {@link Document.id}
		 *  </values>
		 *  </override>
		 */
		public attachments: ulong[] = [];
		/**
		 * A list of hosted <see cref="FormResult"/> identifiers attached to this job.
		 *  <override max-count="10">
		 *  <values>
		 * {@link FormResult.id}
		 *  </values>
		 *  </override>
		 */
		public forms: ulong[] = [];
		/**
		 * The importance of this job when scheduling for an asset.
		 */
		public priority: DispatchJobPriority;
		/**
		 * Codified label names used to relate (unassigned) jobs to <see cref="Asset"/>s.
		 *  <override>
		 *  <values format="codified">
		 * {@link LabelStyle.code}
		 *  </values>
		 *  </override>
		 */
		public labels: string[] = [];
		/**
		 * The codified status tag names reflecting the conditions of this job.
		 *  <override>
		 *  <values format="codified">
		 * {@link LabelStyle.code}
		 *  </values>
		 *  </override>
		 */
		public tags: string[] = [];
		/**
		 * A list of coordinates to visit in order to carry out the work for this job.
		 */
		public steps: DispatchStep[] = [];
		/**
		 * When this job was originally created.
		 */
		public created: Date = DATE();
		/**
		 * Clocked-in driver name who made the update.
		 * Null if not clocked-in, or no changes have been made.
		 */
		public driver: string = "";

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