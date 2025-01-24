


	/**
	 * Gets details of the specified <see cref="place"/>.
	 */
	export abstract class ReqPlaceList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted <see cref="Place"/>s.
		 */
		public includeDeleted: boolean = false;
	}
	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class ReqPlaceListByCompany extends ReqPlaceList implements IReqListByCompany {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public company: ParamId;
	}