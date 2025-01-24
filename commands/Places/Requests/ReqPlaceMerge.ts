


	/**
	 * Creates a new or updates an existing <see cref="Place"/>.
	 */
	export class ReqPlaceMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a <see cref="Place"/>.
		 */
		place: ParamPlaceMerge;

		/**
		 *  
		 */
public string GetKey() => this.place?.id?.toString() ?? "";
	}