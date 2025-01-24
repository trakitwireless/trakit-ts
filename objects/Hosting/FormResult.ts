

	/**
	 * A completed form submitted by a <see cref="User"/> or <see cref="Asset"/>.
	 */
	export class FormResult extends Component implements IIdUlong, INamed, IBelongCompany, ILabelled, IDeletable {
		/**
		 * Unique identifier of this form.
		 */
		public id: ulong = NaN;
		/**
		 * The <see cref="Company"/> to which this form belongs.
		 * {@link Company.id}
		 */
		public company: ulong = NaN;
		/**
		 * The <see cref="FormTemplate"/> to which this form belongs.
		 */
		public template: ulong = NaN;
		/**
		 * The <see cref="Asset"/> to which this form belongs.
		 * {@link Asset.id}
		 */
		public asset: ulong = NaN;
		/**
		 * Name of this form.
		 *  <override max-length="100" />
		 */
		public name: string = "";
		/**
		 * Notes about this form.
		 */
		public notes: string = "";
		/**
		 * Codified label names used to relate forms to <see cref="Asset"/>s.
		 *  <override>
		 *  <values format="codified">
		 * {@link LabelStyle.code}
		 *  </values>
		 *  </override>
		 */
		public labels: string[] = [];
		/**
		 * All the values for fillable fields by index.
		 */
		public fields: Map<ulong, string>;
		/**
		 * A timestamp from when this form was completed by a <see cref="User"/> or <see cref="Asset"/>.
		 */
		public completed: Date = DATE();
		/**
		 * The coordinates of the <see cref="User"/> or <see cref="Asset"/> from when the form was completed.
		 */
		public latlng: LatLng;
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