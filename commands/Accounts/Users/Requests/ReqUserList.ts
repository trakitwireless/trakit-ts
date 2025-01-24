

	/**
	 * Gets details of the specified <see cref="user"/>.
	 */
	export abstract class ReqUserList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted <see cref="User"/>s.
		 */
		public includeDeleted: boolean = false;
	}
	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class ReqUserListByCompany extends ReqUserList implements IReqListByCompany {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public company: ParamId;
	}