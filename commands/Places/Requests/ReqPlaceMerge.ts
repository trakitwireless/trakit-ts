


	/**
	 * Creates a new or updates an existing {@link Place}.
	 */
	export class ReqPlaceMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a {@link Place}.
		 */
		place: ParamPlaceMerge;

		/**
		 *  
		 */
public string GetKey() => this.place?.id?.toString() ?? "";
	}