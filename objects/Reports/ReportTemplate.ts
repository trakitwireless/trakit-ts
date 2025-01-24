

	/**
	 * A partially created report used to quickly build results.
	 */
	export class ReportTemplate extends Component implements IIdUlong, INamed, IBelongCompany, IVisual, IDeletable {
		/**
		 * Unique identifier
		 */
		public id: ulong = NaN;
		/**
		 * The company to which this report belongs
		 * {@link Company.id}
		 */
		public company: ulong = NaN;
		/**
		 * Refers to the type of logic used by this report.
		 */
		public kind: ReportType;
		/**
		 * Name of this report.
		 *  <override max-length="100" />
		 */
		public name: string = "";
		/**
		 * Notes about this report.
		 */
		public notes: string = "";
		/**
		 * Specified parameters for the report logic, targeted Assets, and filtering Places.
		 */
		public options: ReportOptions;

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
		 * The name of the symbol for this report.
		 *  <override max-length="22" format="codified" />
		 */
		public graphic: string = "";

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