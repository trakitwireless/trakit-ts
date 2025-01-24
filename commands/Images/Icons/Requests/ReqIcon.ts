

	/**
	 * A container for the <see cref="icon"/> object.
	 */
	export abstract class ReqIcon extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the <see cref="Icon"/>.
		 */
		icon: ParamId;

		/**
		 *  
		 */
public string GetKey() => this.icon?.id.toString() ?? "";
	}