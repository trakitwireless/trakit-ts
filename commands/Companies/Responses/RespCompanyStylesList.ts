

	/**
	 * A container for the requested {@link companyStyless}.
	 */
	export abstract class RespCompanyStylesList extends Response {
		/**
		 * The list of requested {@link CompanyStyles}s.
		 */
		companyStyless: CompanyStyles[] = [];
	}

	/**
	 * A container owner {@link Company} of the collection.
	 */
	export class RespCompanyStylesListByCompany extends RespCompanyStylesList {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: RespId;
	}
	/**
	 * A container owner {@link Company} of the collection.
	 */
	export class RespCompanyStylesListByCompanyAndLabels extends RespCompanyStylesListByCompany {
		/**
		 * The labels given as input.
		 * {@link CompanyStyles.labels}
		 */
		labels: string[] = [];
	}
	/**
	 * A container owner {@link Company} of the collection.
	 */
	export class RespCompanyStylesListByCompanyAndRefPairs extends RespCompanyStylesListByCompany {
		/**
		 * The reference string given as input.
		 * {@link CompanyStyles.references}
		 */
		references: Map<string, string>;
	}