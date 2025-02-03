


	/**
	 * Gets details of the specified {@link formTemplate}.
	 */
	export abstract class ReqFormTemplateList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted {@link FormTemplate}s.
		 */
		includeDeleted: boolean = false;
	}
	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class ReqFormTemplateListByCompany extends ReqFormTemplateList implements IReqListByCompany {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: ParamId;
	}