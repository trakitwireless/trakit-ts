

	/**
	 * A container for the requested {@link companyResellers}.
	 */
	export abstract class RespCompanyResellerList extends Response {
		/**
		 * The list of requested {@link CompanyReseller}s.
		 */
		companyResellers: CompanyReseller[] = [];
	}

	/**
	 * A container owner {@link Company} of the collection.
	 */
	export class RespCompanyResellerListByCompany extends RespCompanyResellerList {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: RespId;
	}
	/**
	 * A container owner {@link Company} of the collection.
	 */
	export class RespCompanyResellerListByCompanyAndLabels extends RespCompanyResellerListByCompany {
		/**
		 * The labels given as input.
		 * {@link CompanyReseller.labels}
		 */
		labels: string[] = [];
	}
	/**
	 * A container owner {@link Company} of the collection.
	 */
	export class RespCompanyResellerListByCompanyAndRefPairs extends RespCompanyResellerListByCompany {
		/**
		 * The reference string given as input.
		 * {@link CompanyReseller.references}
		 */
		references: Map<string, string>;
	}