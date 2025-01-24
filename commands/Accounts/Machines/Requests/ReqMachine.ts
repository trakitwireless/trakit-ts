

	/**
	 * A container for the <see cref="machine"/> object.
	 */
	export abstract class ReqMachine extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the <see cref="Machine"/>.
		 */
		machine: ParamKey;

		/**
		 *  
		 */
public string GetKey() => this.machine?.key ?? "";
	}