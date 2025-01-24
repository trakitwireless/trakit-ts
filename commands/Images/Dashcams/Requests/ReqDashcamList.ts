

	/**
	 * Gets details of the specified <see cref="dashcam"/>.
	 */
	export abstract class ReqDashcamList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted <see cref="Dashcam"/>s.
		 */
		public includeDeleted: boolean = false;
	}
	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class ReqDashcamListByCompany extends ReqDashcamList implements IReqListByCompany {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public company: ParamId;
	}