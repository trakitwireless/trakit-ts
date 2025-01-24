


	/**
	 * Creates a new or updates an existing <see cref="FormTemplate"/>.
	 */
	export class ReqFormTemplateMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a <see cref="FormTemplate"/>.
		 */
		formTemplate: ParamFormTemplateMerge;

		/**
		 *  
		 */
public string GetKey() => this.formTemplate?.id?.toString() ?? "";
	}