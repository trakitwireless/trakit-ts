

	/**
	 * A container for the requested <see cref="companyStyless"/>.
	 */
	export abstract class RespCompanyStylesList extends Response {
		/**
		 * The list of requested <see cref="CompanyStyles"/>s.
		 */
		companyStyless: CompanyStyles[] = [];
	}

	/**
	 * A container owner <see cref="Company"/> of the collection.
	 */
	export class RespCompanyStylesListByCompany extends RespCompanyStylesList {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		company: RespId;
	}
	/**
	 * A container owner <see cref="Company"/> of the collection.
	 */
	export class RespCompanyStylesListByCompanyAndLabels extends RespCompanyStylesListByCompany {
		/**
		 * The labels given as input.
		 * {@link CompanyStyles.labels}
		 */
		labels: string[] = [];
	}
	/**
	 * A container owner <see cref="Company"/> of the collection.
	 */
	export class RespCompanyStylesListByCompanyAndRefPairs extends RespCompanyStylesListByCompany {
		/**
		 * The reference string given as input.
		 * {@link CompanyStyles.references}
		 */
		references: Map<string, string>;
	}