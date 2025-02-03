

	/**
	 * Creates a new or updates an existing {@link Behaviour}.
	 */
	export class ReqBehaviourMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a {@link Behaviour}.
		 */
		behaviour: ParamBehaviourMerge;

		/**
		 *  
		 */
public string GetKey() => this.behaviour?.id?.toString() ?? "";
	}