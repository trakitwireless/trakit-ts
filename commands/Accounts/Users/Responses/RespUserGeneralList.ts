

	/**
	 * A container for the requested <see cref="userGenerals"/>.
	 */
	export abstract class RespUserGeneralList extends Response {
		/**
		 * The list of requested <see cref="UserGeneral"/>s.
		 */
		userGenerals: UserGeneral[] = [];
	}

	/**
	 * A container owner <see cref="Company"/> of the collection.
	 */
	export class RespUserGeneralListByCompany extends RespUserGeneralList {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		company: RespId;
	}
	/**
	 * A container owner <see cref="Company"/> of the collection.
	 */
	export class RespUserGeneralListByCompanyAndLabels extends RespUserGeneralListByCompany {
		/**
		 * The labels given as input.
		 * {@link UserGeneral.labels}
		 */
		labels: string[] = [];
	}
	/**
	 * A container owner <see cref="Company"/> of the collection.
	 */
	export class RespUserGeneralListByCompanyAndRefPairs extends RespUserGeneralListByCompany {
		/**
		 * The reference string given as input.
		 * {@link UserGeneral.references}
		 */
		references: Map<string, string>;
	}