


	/**
	 * Gets details of the specified {@link place}.
	 */
	export abstract class ReqPlaceList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted {@link Place}s.
		 */
		includeDeleted: boolean = false;
	}
	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class ReqPlaceListByCompany extends ReqPlaceList implements IReqListByCompany {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: ParamId;
	}