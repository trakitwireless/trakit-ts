

	/**
	 * Gets a list of {@link CompanyDirectory}s.
	 */
	export abstract class ReqCompanyDirectoryList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted {@link CompanyDirectory} (if it exists).
		 */
		includeDeleted: boolean = false;
	}

	/**
	 * Gets the list of {@link CompanyDirectory}s for the specified {@link Company}.
	 */
	export class ReqCompanyDirectoryListByCompany extends ReqCompanyDirectoryList implements IReqListByCompany {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: ParamId;
	}
	/**
	 * Gets the list of {@link CompanyDirectory}s for the specified {@link Company} only if the {@link CompanyDirectoryDirectory.labels} matches all of the given {@link Parameters.labels}.
	 */
	export class ReqCompanyDirectoryListByCompanyAndLabels extends ReqCompanyDirectoryListByCompany implements IReqListByLabels {
		/**
		 * The parsed labels given as input.
		 * {@link CompanyDirectory.labels}
		 */
		labels: string[] = [];
	}
	/**
	 * Gets the list of {@link CompanyDirectory}s for the specified {@link Company} only if one of the specified {@link CompanyDirectoryDirectory.references} fields match.
	 * If no references are specified, it will match any {@link CompanyDirectory} with no references.
	 * If a reference value is null, it will match any {@link CompanyDirectory} without that reference key.
	 */
	export class ReqCompanyDirectoryListByCompanyAndRefPairs extends ReqCompanyDirectoryListByCompany implements IReqListByReferences {
		/**
		 * The parsed references given as input.
		 * {@link CompanyDirectoryDirectory.references}
		 */
		references: Map<string, string>;
	}