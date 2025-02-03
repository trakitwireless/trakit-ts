

	/**
	 * A container for the requested {@link companyGenerals}.
	 */
	export abstract class RespCompanyGeneralList extends Response {
		/**
		 * The list of requested {@link CompanyGeneral}s.
		 */
		companyGenerals: CompanyGeneral[] = [];
	}

	/**
	 * A container owner {@link Company} of the collection.
	 */
	export class RespCompanyGeneralListByCompany extends RespCompanyGeneralList {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: RespId;
	}
	/**
	 * A container owner {@link Company} of the collection.
	 */
	export class RespCompanyGeneralListByCompanyAndLabels extends RespCompanyGeneralListByCompany {
		/**
		 * The labels given as input.
		 * {@link CompanyGeneral.labels}
		 */
		labels: string[] = [];
	}
	/**
	 * A container owner {@link Company} of the collection.
	 */
	export class RespCompanyGeneralListByCompanyAndRefPairs extends RespCompanyGeneralListByCompany {
		/**
		 * The reference string given as input.
		 * {@link CompanyGeneral.references}
		 */
		references: Map<string, string>;
	}