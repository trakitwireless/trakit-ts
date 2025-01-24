

	/**
	 * Gets details of the specified <see cref="document"/>.
	 */
	export abstract class ReqDocumentList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted <see cref="Document"/>s.
		 */
		includeDeleted: boolean = false;
	}
	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class ReqDocumentListByCompany extends ReqDocumentList implements IReqListByCompany {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		company: ParamId;
	}