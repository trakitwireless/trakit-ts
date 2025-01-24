

	/**
	 * The full definition of a form that needs to be filled out.
	 */
	export class FormTemplate extends Component implements IIdUlong, INamed, IBelongCompany, ILabelled, IVisual, IDeletable {
		/**
		 * Unique identifier of this form.
		 */
		id: ulong = NaN;
		/**
		 * The <see cref="Company"/> to which this form belongs.
		 * {@link Company.id}
		 */
		company: ulong = NaN;
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
		 * Codified label names used to relate forms to <see cref="Asset"/>s.
		 *  <override>
		 *  <values format="codified">
		 * {@link LabelStyle.code}
		 *  </values>
		 *  </override>
		 */
		labels: string[] = [];
		/**
		 * The fill/background colour of the icon.
		 *  <override max-length="22" format="colour" />
		 */
		fill: string = "";
		/**
		 * Outline and graphic colour.
		 *  <override max-length="22" format="colour" />
		 */
		stroke: string = "";
		/**
		 * The name of the symbol for this template.
		 *  <override max-length="22" format="codified" />
		 */
		graphic: string = "";
		/**
		 * All the user fillable fields by name.
		 */
		fields: FormFieldBase[] = [];

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