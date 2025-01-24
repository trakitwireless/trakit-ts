


	/**
	 * Gets details of the specified <see cref="formResult"/>.
	 */
	export abstract class ReqFormResultList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted <see cref="FormResult"/>s.
		 */
		public includeDeleted: boolean = false;
	}
	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class ReqFormResultListByCompany extends ReqFormResultList implements IReqListByCompany {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public company: ParamId;
	}