

	/**
	 * A container for the requested <see cref="companyDirectorys"/>.
	 */
	export abstract class RespCompanyDirectoryList extends Response {
		/**
		 * The list of requested <see cref="CompanyDirectory"/>s.
		 */
		public companyDirectorys: CompanyDirectory[] = [];
	}

	/**
	 * A container owner <see cref="Company"/> of the collection.
	 */
	export class RespCompanyDirectoryListByCompany extends RespCompanyDirectoryList {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public company: RespId;
	}
	/**
	 * A container owner <see cref="Company"/> of the collection.
	 */
	export class RespCompanyDirectoryListByCompanyAndLabels extends RespCompanyDirectoryListByCompany {
		/**
		 * The labels given as input.
		 * {@link CompanyDirectory.labels}
		 */
		public labels: string[] = [];
	}
	/**
	 * A container owner <see cref="Company"/> of the collection.
	 */
	export class RespCompanyDirectoryListByCompanyAndRefPairs extends RespCompanyDirectoryListByCompany {
		/**
		 * The reference string given as input.
		 * {@link CompanyDirectory.references}
		 */
		public references: Map<string, string>;
	}