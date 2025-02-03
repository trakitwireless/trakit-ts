

	/**
	 * Creates a new or updates an existing {@link Picture}.
	 */
	export class ReqPictureMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a {@link Picture}.
		 */
		picture: ParamPictureMerge;

		/**
		 *  
		 */
public string GetKey() => this.picture?.id?.toString() ?? "";
	}