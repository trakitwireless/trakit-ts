

	/**
	 * Creates a new or updates an existing <see cref="Icon"/>.
	 */
	export class ReqIconMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a <see cref="Icon"/>.
		 */
		icon: ParamIconMerge;

		/**
		 *  
		 */
public string GetKey() => this.icon?.id?.toString() ?? "";
	}