

	/**
	 * Gets details of the specified <see cref="contact"/>.
	 */
	export abstract class ReqContactList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted <see cref="Contact"/>s.
		 */
		public includeDeleted: boolean = false;
	}
	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class ReqContactListByCompany extends ReqContactList implements IReqListByCompany {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public company: ParamId;
	}