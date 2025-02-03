

	/**
	 * Creates a new or updates an existing {@link DispatchTask}.
	 */
	export class ReqDispatchTaskMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a {@link DispatchTask}.
		 */
		dispatchTask: ParamDispatchTaskMerge;

		/**
		 *  
		 */
public string GetKey() => this.dispatchTask?.id?.toString() ?? "";
	}