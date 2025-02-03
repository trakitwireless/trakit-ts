

	/**
	 * Gets details of the specified {@link icon}.
	 */
	export abstract class ReqIconList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted {@link Icon}s.
		 */
		includeDeleted: boolean = false;
	}
	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class ReqIconListByCompany extends ReqIconList implements IReqListByCompany {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: ParamId;
	}