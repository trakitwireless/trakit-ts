

	/**
	 * Gets details of the specified <see cref="icon"/>.
	 */
	export abstract class ReqIconList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted <see cref="Icon"/>s.
		 */
		public includeDeleted: boolean = false;
	}
	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class ReqIconListByCompany extends ReqIconList implements IReqListByCompany {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public company: ParamId;
	}