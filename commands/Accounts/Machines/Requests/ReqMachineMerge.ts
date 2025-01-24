

	/**
	 * Creates a new or updates an existing <see cref="Machine"/>.
	 */
	export class ReqMachineMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a <see cref="Machine"/>.
		 */
		machine: ParamMachineMerge;

		/**
		 *  
		 */
public string GetKey() => this.machine?.key ?? "";
	}