


	/**
	 * A container for the {@link place} object.
	 */
	export abstract class ReqPlace extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the {@link Place}.
		 */
		place: ParamId;

		/**
		 *  
		 */
public string GetKey() => this.place?.id.toString() ?? "";
	}