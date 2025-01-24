

	/**
	 * Creates a new or updates an existing <see cref="Provider"/>.
	 */
	export class ReqProviderMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a <see cref="Provider"/>.
		 */
		public provider: ParamProviderMerge;

		/**
		 *  
		 */
public string GetKey() => this.provider?.id?.toString() ?? "";
	}