

	/**
	 * A container for the requested {@link companyDirectorys}.
	 */
	export abstract class RespCompanyDirectoryList extends Response {
		/**
		 * The list of requested {@link CompanyDirectory}s.
		 */
		companyDirectorys: CompanyDirectory[] = [];
	}

	/**
	 * A container owner {@link Company} of the collection.
	 */
	export class RespCompanyDirectoryListByCompany extends RespCompanyDirectoryList {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: RespId;
	}
	/**
	 * A container owner {@link Company} of the collection.
	 */
	export class RespCompanyDirectoryListByCompanyAndLabels extends RespCompanyDirectoryListByCompany {
		/**
		 * The labels given as input.
		 * {@link CompanyDirectory.labels}
		 */
		labels: string[] = [];
	}
	/**
	 * A container owner {@link Company} of the collection.
	 */
	export class RespCompanyDirectoryListByCompanyAndRefPairs extends RespCompanyDirectoryListByCompany {
		/**
		 * The reference string given as input.
		 * {@link CompanyDirectory.references}
		 */
		references: Map<string, string>;
	}