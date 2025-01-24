

	/**
	 * Creates a new or updates an existing <see cref="DispatchTask"/>.
	 */
	export class ReqDispatchTaskMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a <see cref="DispatchTask"/>.
		 */
		public dispatchTask: ParamDispatchTaskMerge;

		/**
		 *  
		 */
public string GetKey() => this.dispatchTask?.id?.toString() ?? "";
	}