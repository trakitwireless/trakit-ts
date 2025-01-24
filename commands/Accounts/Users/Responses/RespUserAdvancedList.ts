

	/**
	 * A container for the requested <see cref="userAdvanceds"/>.
	 */
	export abstract class RespUserAdvancedList extends Response {
		/**
		 * The list of requested <see cref="UserAdvanced"/>s.
		 */
		public userAdvanceds: UserAdvanced[] = [];
	}

	/**
	 * A container owner <see cref="Company"/> of the collection.
	 */
	export class RespUserAdvancedListByCompany extends RespUserAdvancedList {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public company: RespId;
	}
	/**
	 * A container owner <see cref="Company"/> of the collection.
	 */
	export class RespUserAdvancedListByCompanyAndLabels extends RespUserAdvancedListByCompany {
		/**
		 * The labels given as input.
		 * {@link UserGeneral.labels}
		 */
		public labels: string[] = [];
	}
	/**
	 * A container owner <see cref="Company"/> of the collection.
	 */
	export class RespUserAdvancedListByCompanyAndRefPairs extends RespUserAdvancedListByCompany {
		/**
		 * The reference string given as input.
		 * {@link UserGeneral.references}
		 */
		public references: Map<string, string>;
	}