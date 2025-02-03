

	/**
	 * Creates a new or updates an existing {@link BehaviourScript}.
	 */
	export class ReqBehaviourScriptMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a {@link BehaviourScript}.
		 */
		behaviourScript: ParamBehaviourScriptMerge;

		/**
		 *  
		 */
public string GetKey() => this.behaviourScript?.id?.toString() ?? "";
	}