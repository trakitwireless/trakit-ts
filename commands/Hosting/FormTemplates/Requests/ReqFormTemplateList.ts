


	/**
	 * Gets details of the specified <see cref="formTemplate"/>.
	 */
	export abstract class ReqFormTemplateList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted <see cref="FormTemplate"/>s.
		 */
		includeDeleted: boolean = false;
	}
	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class ReqFormTemplateListByCompany extends ReqFormTemplateList implements IReqListByCompany {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		company: ParamId;
	}