

	/**
	 * Gets details of the specified <see cref="userGroup"/>.
	 */
	export abstract class ReqUserGroupList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted <see cref="UserGroup"/>s.
		 */
		includeDeleted: boolean = false;
	}
	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class ReqUserGroupListByCompany extends ReqUserGroupList implements IReqListByCompany {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		company: ParamId;
	}