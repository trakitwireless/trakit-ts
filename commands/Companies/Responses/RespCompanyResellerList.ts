

	/**
	 * A container for the requested <see cref="companyResellers"/>.
	 */
	export abstract class RespCompanyResellerList extends Response {
		/**
		 * The list of requested <see cref="CompanyReseller"/>s.
		 */
		public companyResellers: CompanyReseller[] = [];
	}

	/**
	 * A container owner <see cref="Company"/> of the collection.
	 */
	export class RespCompanyResellerListByCompany extends RespCompanyResellerList {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public company: RespId;
	}
	/**
	 * A container owner <see cref="Company"/> of the collection.
	 */
	export class RespCompanyResellerListByCompanyAndLabels extends RespCompanyResellerListByCompany {
		/**
		 * The labels given as input.
		 * {@link CompanyReseller.labels}
		 */
		public labels: string[] = [];
	}
	/**
	 * A container owner <see cref="Company"/> of the collection.
	 */
	export class RespCompanyResellerListByCompanyAndRefPairs extends RespCompanyResellerListByCompany {
		/**
		 * The reference string given as input.
		 * {@link CompanyReseller.references}
		 */
		public references: Map<string, string>;
	}