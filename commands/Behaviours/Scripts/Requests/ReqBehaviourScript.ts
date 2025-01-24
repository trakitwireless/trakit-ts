

	/**
	 * A container for the <see cref="behaviourScript"/> object.
	 */
	export abstract class ReqBehaviourScript extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the <see cref="BehaviourScript"/>.
		 */
		public behaviourScript: ParamId;

		/**
		 *  
		 */
public string GetKey() => this.behaviourScript?.id.toString() ?? "";
	}