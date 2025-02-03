

	/**
	 * A container for the {@link icon} object.
	 */
	export abstract class ReqIcon extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the {@link Icon}.
		 */
		icon: ParamId;

		/**
		 *  
		 */
public string GetKey() => this.icon?.id.toString() ?? "";
	}