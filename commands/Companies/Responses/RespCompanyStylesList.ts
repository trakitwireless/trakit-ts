

	/**
	 * A container for the requested <see cref="companyStyless"/>.
	 */
	export abstract class RespCompanyStylesList extends Response {
		/**
		 * The list of requested <see cref="CompanyStyles"/>s.
		 */
		public companyStyless: CompanyStyles[] = [];
	}

	/**
	 * A container owner <see cref="Company"/> of the collection.
	 */
	export class RespCompanyStylesListByCompany extends RespCompanyStylesList {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public company: RespId;
	}
	/**
	 * A container owner <see cref="Company"/> of the collection.
	 */
	export class RespCompanyStylesListByCompanyAndLabels extends RespCompanyStylesListByCompany {
		/**
		 * The labels given as input.
		 * {@link CompanyStyles.labels}
		 */
		public labels: string[] = [];
	}
	/**
	 * A container owner <see cref="Company"/> of the collection.
	 */
	export class RespCompanyStylesListByCompanyAndRefPairs extends RespCompanyStylesListByCompany {
		/**
		 * The reference string given as input.
		 * {@link CompanyStyles.references}
		 */
		public references: Map<string, string>;
	}