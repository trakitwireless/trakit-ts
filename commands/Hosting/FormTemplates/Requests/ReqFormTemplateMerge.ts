


	/**
	 * Creates a new or updates an existing {@link FormTemplate}.
	 */
	export class ReqFormTemplateMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a {@link FormTemplate}.
		 */
		formTemplate: ParamFormTemplateMerge;

		/**
		 *  
		 */
public string GetKey() => this.formTemplate?.id?.toString() ?? "";
	}