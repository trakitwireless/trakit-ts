

	/**
	 * Gets details of the specified {@link contact}.
	 */
	export abstract class ReqContactList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted {@link Contact}s.
		 */
		includeDeleted: boolean = false;
	}
	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class ReqContactListByCompany extends ReqContactList implements IReqListByCompany {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: ParamId;
	}