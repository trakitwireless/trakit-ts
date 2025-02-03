

	/**
	 * A container for the {@link behaviourScript} object.
	 */
	export abstract class ReqBehaviourScript extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the {@link BehaviourScript}.
		 */
		behaviourScript: ParamId;

		/**
		 *  
		 */
public string GetKey() => this.behaviourScript?.id.toString() ?? "";
	}