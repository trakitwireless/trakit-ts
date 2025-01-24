

	/**
	 * Gets details of the specified <see cref="picture"/>.
	 */
	export abstract class ReqPictureList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted <see cref="Picture"/>s.
		 */
		public includeDeleted: boolean = false;
	}
	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class ReqPictureListByCompany extends ReqPictureList implements IReqListByCompany {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public company: ParamId;
	}