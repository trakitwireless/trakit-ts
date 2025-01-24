

	/**
	 * Gets a list of <see cref="CompanyReseller"/>s.
	 */
	export abstract class ReqCompanyResellerList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted <see cref="CompanyReseller"/> (if it exists).
		 */
		public includeDeleted: boolean = false;
	}

	/**
	 * Gets the list of <see cref="CompanyReseller"/>s for the specified <see cref="Company"/>.
	 */
	export class ReqCompanyResellerListByCompany extends ReqCompanyResellerList implements IReqListByCompany {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public company: ParamId;
	}
	/**
	 * Gets the list of <see cref="CompanyReseller"/>s for the specified <see cref="Company"/> only if the <see cref="CompanyResellerReseller.labels"/> matches all of the given <see cref="Parameters.labels"/>.
	 */
	export class ReqCompanyResellerListByCompanyAndLabels extends ReqCompanyResellerListByCompany implements IReqListByLabels {
		/**
		 * The parsed labels given as input.
		 * {@link CompanyReseller.labels}
		 */
		public labels: string[] = [];
	}
	/**
	 * Gets the list of <see cref="CompanyReseller"/>s for the specified <see cref="Company"/> only if one of the specified <see cref="CompanyResellerReseller.references"/> fields match.
	 * If no references are specified, it will match any <see cref="CompanyReseller"/> with no references.
	 * If a reference value is null, it will match any <see cref="CompanyReseller"/> without that reference key.
	 */
	export class ReqCompanyResellerListByCompanyAndRefPairs extends ReqCompanyResellerListByCompany implements IReqListByReferences {
		/**
		 * The parsed references given as input.
		 * {@link CompanyResellerReseller.references}
		 */
		public references: Map<string, string>;
	}