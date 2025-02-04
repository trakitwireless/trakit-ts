

	/**
	 * A completed form submitted by a {@link User} or {@link Asset}.
	 */
	export class FormResult extends Component implements IIdUlong, INamed, IBelongCompany, ILabelled, IDeletable {
		/**
		 * Unique identifier of this form.
		 */
		id: ulong = NaN;
		/**
		 * The {@link Company} to which this form belongs.
		 * {@link Company.id}
		 */
		company: ulong = NaN;
		/**
		 * The {@link FormTemplate} to which this form belongs.
		 */
		template: ulong = NaN;
		/**
		 * The {@link Asset} to which this form belongs.
		 * {@link Asset.id}
		 */
		asset: ulong = NaN;
		/**
		 * Name of this form.
		 *  <override max-length="100" />
		 */
		name: string = "";
		/**
		 * Notes about this form.
		 */
		notes: string = "";
		/**
		 * Codified label names used to relate forms to {@link Asset}s.
		 *  <override>
		 *  <values format="codified">
		 * {@link LabelStyle.code}
		 *  </values>
		 *  </override>
		 */
		labels: string[] = [];
		/**
		 * All the values for fillable fields by index.
		 */
		fields: Map<ulong, string>;
		/**
		 * A timestamp from when this form was completed by a {@link User} or {@link Asset}.
		 */
		completed: Date = DATE();
		/**
		 * The coordinates of the {@link User} or {@link Asset} from when the form was completed.
		 */
		latlng: LatLng;
		/**
		 * Clocked-in driver name who made the update.
		 * Null if not clocked-in, or no changes have been made.
		 */
		driver: string = "";

		// IRequestable
		/**
		 * The {@link id} is the key.
		 */
getKey(): string { return this.id.toString(); }

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