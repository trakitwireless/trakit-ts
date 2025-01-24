

	/**
	 * A container for the <see cref="behaviour"/> object.
	 */
	export abstract class ReqBehaviour extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the <see cref="Behaviour"/>.
		 */
		public behaviour: ParamId;

		/**
		 *  
		 */
public string GetKey() => this.behaviour?.id.toString() ?? "";
	}