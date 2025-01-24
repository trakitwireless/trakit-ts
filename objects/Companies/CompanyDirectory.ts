

	/**
	 * The list of Contacts from this and other companies broken down by contact role.
	 *  <override skip="true" />
	 */
	export class CompanyDirectory extends Component implements IIdUlong, IAmCompany {
		/**
		 * Unique identifier of the Company.
		 * {@link Company.id}
		 */
		public id: ulong = NaN;
		/**
		 * The unique identifier of this company's parent organization.
		 * {@link Company.id}
		 */
		public parent: ulong = NaN;
		/**
		 * The list of Contacts from this and other companies broken down by contact role.
		 *  <override>
		 *  <values>
		 *  <values>
		 * {@link Contact.id}
		 *  </values>
		 *  </values>
		 *  </override>
		 */
		public directory: Map<string, ulong[]>;

		// IRequestable
		/**
		 * The <see cref="id"/> is the key.
		 */
public getKey(): string { return this.id.toString(); }
	}