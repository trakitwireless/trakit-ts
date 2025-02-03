

	/**
	 * Gets details of the specified {@link picture}.
	 */
	export abstract class ReqPictureList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted {@link Picture}s.
		 */
		includeDeleted: boolean = false;
	}
	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class ReqPictureListByCompany extends ReqPictureList implements IReqListByCompany {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: ParamId;
	}