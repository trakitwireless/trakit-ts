

	/**
	 * Creates a new or updates an existing <see cref="Picture"/>.
	 */
	export class ReqPictureMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a <see cref="Picture"/>.
		 */
		picture: ParamPictureMerge;

		/**
		 *  
		 */
public string GetKey() => this.picture?.id?.toString() ?? "";
	}