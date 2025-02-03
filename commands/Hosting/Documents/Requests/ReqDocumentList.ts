

	/**
	 * Gets details of the specified {@link document}.
	 */
	export abstract class ReqDocumentList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted {@link Document}s.
		 */
		includeDeleted: boolean = false;
	}
	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class ReqDocumentListByCompany extends ReqDocumentList implements IReqListByCompany {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: ParamId;
	}