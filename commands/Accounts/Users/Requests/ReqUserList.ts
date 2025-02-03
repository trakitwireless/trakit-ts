

	/**
	 * Gets details of the specified {@link user}.
	 */
	export abstract class ReqUserList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted {@link User}s.
		 */
		includeDeleted: boolean = false;
	}
	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class ReqUserListByCompany extends ReqUserList implements IReqListByCompany {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: ParamId;
	}