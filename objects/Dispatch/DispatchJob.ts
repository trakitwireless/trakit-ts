

	/**
	 * Some work that needs to be done by performing one or more {@link DispatchStep}s.
	 */
	export class DispatchJob extends Component implements IIdUlong, ILabelled, IBelongCompany, IDeletable {
		/**
		 * Unique identifier of this job.
		 */
		id: ulong = NaN;
		/**
		 * The company to which this job belongs.
		 * {@link Company.id}
		 */
		company: ulong = NaN;
		/**
		 * The {@link Asset} to which this job belongs.
		 * This value is null when unassigned.
		 * {@link Asset.id}
		 */
		asset: ulong = NaN;
		/**
		 * A name for the work needed to be performed.
		 *  <override max-length="100" />
		 */
		name: string = "";
		/**
		 * Name/value collections of custom fields used to refer to external systems.
		 *  <override max-count="10">
		 *  <keys max-length="20" />
		 *  <values max-length="100" />
		 *  </override>
		 */
		references: Map<string, string>;
		/**
		 * Instructions (filled out by dispatcher) for the field-employee to help them complete the job.
		 */
		instructions: string = "";
		/**
		 * A list of hosted {@link Document} identifiers attached to this job.
		 *  <override max-count="10">
		 *  <values>
		 * {@link Document.id}
		 *  </values>
		 *  </override>
		 */
		attachments: ulong[] = [];
		/**
		 * A list of hosted {@link FormResult} identifiers attached to this job.
		 *  <override max-count="10">
		 *  <values>
		 * {@link FormResult.id}
		 *  </values>
		 *  </override>
		 */
		forms: ulong[] = [];
		/**
		 * The importance of this job when scheduling for an asset.
		 */
		priority: DispatchJobPriority;
		/**
		 * Codified label names used to relate (unassigned) jobs to {@link Asset}s.
		 *  <override>
		 *  <values format="codified">
		 * {@link LabelStyle.code}
		 *  </values>
		 *  </override>
		 */
		labels: string[] = [];
		/**
		 * The codified status tag names reflecting the conditions of this job.
		 *  <override>
		 *  <values format="codified">
		 * {@link LabelStyle.code}
		 *  </values>
		 *  </override>
		 */
		tags: string[] = [];
		/**
		 * A list of coordinates to visit in order to carry out the work for this job.
		 */
		steps: DispatchStep[] = [];
		/**
		 * When this job was originally created.
		 */
		created: Date = DATE();
		/**
		 * Clocked-in driver name who made the update.
		 * Null if not clocked-in, or no changes have been made.
		 */
		driver: string = "";

		// IRequestable
		/**
		 * The {@link id} is the key.
		 */
public getKey(): string { return this.id.toString(); }

		// IDeletable
		/**
		 * Indicates whether this object was deleted.
		 */
		deleted: boolean = false;
		/**
		 * Timestamp from the action that deleted or suspended this object.
		 */
		since: Date = DATE();
	}