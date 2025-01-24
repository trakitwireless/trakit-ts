

	/**
	 * Creates a new or updates an existing <see cref="Behaviour"/>.
	 */
	export class ReqBehaviourMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a <see cref="Behaviour"/>.
		 */
		behaviour: ParamBehaviourMerge;

		/**
		 *  
		 */
public string GetKey() => this.behaviour?.id?.toString() ?? "";
	}