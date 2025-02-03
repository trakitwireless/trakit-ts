

	/**
	 * Gets details of the specified {@link userGroup}.
	 */
	export abstract class ReqUserGroupList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted {@link UserGroup}s.
		 */
		includeDeleted: boolean = false;
	}
	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class ReqUserGroupListByCompany extends ReqUserGroupList implements IReqListByCompany {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: ParamId;
	}