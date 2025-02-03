

	/**
	 * A container for the {@link picture} object.
	 */
	export abstract class ReqPicture extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the {@link Picture}.
		 */
		picture: ParamId;

		/**
		 *  
		 */
public string GetKey() => this.picture?.id.toString() ?? "";
	}