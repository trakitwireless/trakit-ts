

	/**
	 * Gets details of the specified {@link dashcam}.
	 */
	export abstract class ReqDashcamList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted {@link Dashcam}s.
		 */
		includeDeleted: boolean = false;
	}
	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class ReqDashcamListByCompany extends ReqDashcamList implements IReqListByCompany {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: ParamId;
	}