

	/**
	 * The colours and styles used by this company to tag and label Assets, Places, and other things.
	 */
	export class CompanyStyles extends Component implements IIdUlong, IAmCompany {
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
		 * The styles for labels added to Assets, Places, and other things.
		 */
		public labels: Map<string, LabelStyle>;
		/**
		 * The styles for status tags added to Assets.
		 */
		public tags: Map<string, LabelStyle>;

		// IRequestable
		/**
		 * The <see cref="id"/> is the key.
		 */
public getKey(): string { return this.id.toString(); }
	}