

	/**
	 * The full definition of a form that needs to be filled out.
	 */
	export class FormTemplate extends Component implements IIdUlong, INamed, IBelongCompany, ILabelled, IVisual, IDeletable {
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
		 * The fill/background colour of the icon.
		 *  <override max-length="22" format="colour" />
		 */
		public fill: string = "";
		/**
		 * Outline and graphic colour.
		 *  <override max-length="22" format="colour" />
		 */
		public stroke: string = "";
		/**
		 * The name of the symbol for this template.
		 *  <override max-length="22" format="codified" />
		 */
		public graphic: string = "";
		/**
		 * All the user fillable fields by name.
		 */
		public fields: FormFieldBase[] = [];

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