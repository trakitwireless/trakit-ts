

	/**
	 * A container for the requested {@link companies}.
	 */
	export abstract class RespCompanyList extends Response {
		/**
		 * The list of requested {@link Company}s.
		 */
		companies: Company[] = [];
	}

	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class RespCompanyListByCompany extends RespCompanyList {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: RespId;
	}
	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class RespCompanyListByCompanyAndRefPairs extends RespCompanyListByCompany implements IReqListByReferences {
		/**
		 * The parsed references given as input.
		 * {@link CompanyGeneral.references}
		 */
		references: Map<string, string>;
	}