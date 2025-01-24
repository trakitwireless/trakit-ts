

	/**
	 * A container for the <see cref="picture"/> object.
	 */
	export abstract class ReqPicture extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the <see cref="Picture"/>.
		 */
		public picture: ParamId;

		/**
		 *  
		 */
public string GetKey() => this.picture?.id.toString() ?? "";
	}