

	/**
	 * General details about a company.
	 */
	export class CompanyGeneral extends Component implements IIdUlong, INamed, IAmCompany, IDeletable {
		/**
		 * Unique identifier of the Company.
		 * {@link Company.id}
		 */
		id: ulong = NaN;
		/**
		 * The unique identifier of this company's parent organization.
		 * {@link Company.id}
		 */
		parent: ulong = NaN;
		/**
		 * The organizational name.
		 *  <override max-length="100" />
		 */
		name: string = "";
		/**
		 * Notes.
		 */
		notes: string = "";
		/**
		 * Name/value collections of custom fields used to refer to external systems.
		 *  <override max-count="10">
		 *  <keys max-length="20" />
		 *  <values max-length="100" />
		 *  </override>
		 */
		references: Map<string, string>;

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