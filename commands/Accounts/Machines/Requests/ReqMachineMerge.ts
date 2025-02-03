

	/**
	 * Creates a new or updates an existing {@link Machine}.
	 */
	export class ReqMachineMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a {@link Machine}.
		 */
		machine: ParamMachineMerge;

		/**
		 *  
		 */
public string GetKey() => this.machine?.key ?? "";
	}