

	/**
	 * Creates a new or updates an existing <see cref="BehaviourScript"/>.
	 */
	export class ReqBehaviourScriptMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a <see cref="BehaviourScript"/>.
		 */
		behaviourScript: ParamBehaviourScriptMerge;

		/**
		 *  
		 */
public string GetKey() => this.behaviourScript?.id?.toString() ?? "";
	}