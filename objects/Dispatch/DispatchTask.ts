

	/**
	 * A task assigned to an asset which represents a coordinate on the map which must be visited.
	 * @deprecated Use DispatchJob instead
	 */
	export class DispatchTask extends Component implements IIdUlong, IBelongCompany, IBelongAsset, IDeletable {
		/**
		 * Unique identifier of this task.
		 */
		id: ulong = NaN;
		/**
		 * The company to which this task belongs.
		 * {@link Company.id}
		 */
		company: ulong = NaN;
		/**
		 * The asset to which this task belongs.
		 * {@link Asset.id}
		 */
		asset: ulong = NaN;
		/**
		 * The name of this task or the work needed to be performed.
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
		 * An optional place which can be used as a template instead of providing lat/long coordinates and a street address.
		 * {@link Place.id}
		 */
		place: ulong = NaN;
		/**
		 * The street address of where the task must be completed.
		 *  <override max-length="500" />
		 */
		address: string = "";
		/**
		 * The lat/long coordinates of where the task must be completed.
		 */
		latlng: LatLng;
		/**
		 * The progress of this task.
		 */
		status: DispatchTaskStatus;
		/**
		 * When this task was created.
		 */
		created: Date = DATE();
		/**
		 * The optional estimated time of arrival for the asset.
		 */
		eta: Date = DATE();
		/**
		 * The optional expected duration of the work for this task.
		 */
		duration?: TimeSpan;
		/**
		 * The date/time stamp of when the asset arrived at this task.
		 */
		arrived: Date = DATE();
		/**
		 * The date/time stamp of when this task was completed.
		 */
		completed: Date = DATE();
		/**
		 * Instructions (filled out by dispatcher) for the field-employee to help them completed the task.
		 */
		instructions: string = "";
		/**
		 * Indicates whether the task has a signature.
		 */
		signature: boolean = false;
		/**
		 * The name of the person who signed the task's completion.
		 *  <override max-length="100" />
		 */
		signatory: string = "";
		/**
		 * Notes about the status of the work filled in by field-employee.
		 */
		notes: string = "";
		/**
		 * A list of hosted <see cref="Document"/> identifiers attached to this task.
		 *  <override max-count="10">
		 *  <values>
		 * {@link Document.id}
		 *  </values>
		 *  </override>
		 */
		attachments: ulong[] = [];
		/**
		 * Either the user's login, or provider's identifier that changed this task
		 */
		updatedBy: string = "";
		/**
		 * Timestamp from the last change made to this task
		 */
		updatedUtc: Date = DATE();

		// IRequestable
		/**
		 * The <see cref="id"/> is the key.
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