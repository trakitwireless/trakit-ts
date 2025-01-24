

	/**
	 * A container for the requested <see cref="companies"/>.
	 */
	export abstract class RespCompanyList extends Response {
		/**
		 * The list of requested <see cref="Company"/>s.
		 */
		public companies: Company[] = [];
	}

	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class RespCompanyListByCompany extends RespCompanyList {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public company: RespId;
	}
	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class RespCompanyListByCompanyAndRefPairs extends RespCompanyListByCompany implements IReqListByReferences {
		/**
		 * The parsed references given as input.
		 * {@link CompanyGeneral.references}
		 */
		public references: Map<string, string>;
	}