

	/**
	 * A container for the requested {@link userAdvanceds}.
	 */
	export abstract class RespUserAdvancedList extends Response {
		/**
		 * The list of requested {@link UserAdvanced}s.
		 */
		userAdvanceds: UserAdvanced[] = [];
	}

	/**
	 * A container owner {@link Company} of the collection.
	 */
	export class RespUserAdvancedListByCompany extends RespUserAdvancedList {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: RespId;
	}
	/**
	 * A container owner {@link Company} of the collection.
	 */
	export class RespUserAdvancedListByCompanyAndLabels extends RespUserAdvancedListByCompany {
		/**
		 * The labels given as input.
		 * {@link UserGeneral.labels}
		 */
		labels: string[] = [];
	}
	/**
	 * A container owner {@link Company} of the collection.
	 */
	export class RespUserAdvancedListByCompanyAndRefPairs extends RespUserAdvancedListByCompany {
		/**
		 * The reference string given as input.
		 * {@link UserGeneral.references}
		 */
		references: Map<string, string>;
	}