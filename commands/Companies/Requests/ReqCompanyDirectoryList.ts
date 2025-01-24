

	/**
	 * Gets a list of <see cref="CompanyDirectory"/>s.
	 */
	export abstract class ReqCompanyDirectoryList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted <see cref="CompanyDirectory"/> (if it exists).
		 */
		includeDeleted: boolean = false;
	}

	/**
	 * Gets the list of <see cref="CompanyDirectory"/>s for the specified <see cref="Company"/>.
	 */
	export class ReqCompanyDirectoryListByCompany extends ReqCompanyDirectoryList implements IReqListByCompany {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		company: ParamId;
	}
	/**
	 * Gets the list of <see cref="CompanyDirectory"/>s for the specified <see cref="Company"/> only if the <see cref="CompanyDirectoryDirectory.labels"/> matches all of the given <see cref="Parameters.labels"/>.
	 */
	export class ReqCompanyDirectoryListByCompanyAndLabels extends ReqCompanyDirectoryListByCompany implements IReqListByLabels {
		/**
		 * The parsed labels given as input.
		 * {@link CompanyDirectory.labels}
		 */
		labels: string[] = [];
	}
	/**
	 * Gets the list of <see cref="CompanyDirectory"/>s for the specified <see cref="Company"/> only if one of the specified <see cref="CompanyDirectoryDirectory.references"/> fields match.
	 * If no references are specified, it will match any <see cref="CompanyDirectory"/> with no references.
	 * If a reference value is null, it will match any <see cref="CompanyDirectory"/> without that reference key.
	 */
	export class ReqCompanyDirectoryListByCompanyAndRefPairs extends ReqCompanyDirectoryListByCompany implements IReqListByReferences {
		/**
		 * The parsed references given as input.
		 * {@link CompanyDirectoryDirectory.references}
		 */
		references: Map<string, string>;
	}