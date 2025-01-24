

	/**
	 * A container for the requested <see cref="companyGenerals"/>.
	 */
	export abstract class RespCompanyGeneralList extends Response {
		/**
		 * The list of requested <see cref="CompanyGeneral"/>s.
		 */
		companyGenerals: CompanyGeneral[] = [];
	}

	/**
	 * A container owner <see cref="Company"/> of the collection.
	 */
	export class RespCompanyGeneralListByCompany extends RespCompanyGeneralList {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		company: RespId;
	}
	/**
	 * A container owner <see cref="Company"/> of the collection.
	 */
	export class RespCompanyGeneralListByCompanyAndLabels extends RespCompanyGeneralListByCompany {
		/**
		 * The labels given as input.
		 * {@link CompanyGeneral.labels}
		 */
		labels: string[] = [];
	}
	/**
	 * A container owner <see cref="Company"/> of the collection.
	 */
	export class RespCompanyGeneralListByCompanyAndRefPairs extends RespCompanyGeneralListByCompany {
		/**
		 * The reference string given as input.
		 * {@link CompanyGeneral.references}
		 */
		references: Map<string, string>;
	}