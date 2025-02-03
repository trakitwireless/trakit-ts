

	/**
	 * A container for the {@link behaviour} object.
	 */
	export abstract class ReqBehaviour extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the {@link Behaviour}.
		 */
		behaviour: ParamId;

		/**
		 *  
		 */
public string GetKey() => this.behaviour?.id.toString() ?? "";
	}