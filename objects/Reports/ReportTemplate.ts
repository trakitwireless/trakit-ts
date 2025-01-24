

	/**
	 * A partially created report used to quickly build results.
	 */
	export class ReportTemplate extends Component implements IIdUlong, INamed, IBelongCompany, IVisual, IDeletable {
		/**
		 * Unique identifier
		 */
		id: ulong = NaN;
		/**
		 * The company to which this report belongs
		 * {@link Company.id}
		 */
		company: ulong = NaN;
		/**
		 * Refers to the type of logic used by this report.
		 */
		kind: ReportType;
		/**
		 * Name of this report.
		 *  <override max-length="100" />
		 */
		name: string = "";
		/**
		 * Notes about this report.
		 */
		notes: string = "";
		/**
		 * Specified parameters for the report logic, targeted Assets, and filtering Places.
		 */
		options: ReportOptions;

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
		 * The name of the symbol for this report.
		 *  <override max-length="22" format="codified" />
		 */
		graphic: string = "";

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