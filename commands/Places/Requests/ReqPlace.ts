


	/**
	 * A container for the <see cref="place"/> object.
	 */
	export abstract class ReqPlace extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the <see cref="Place"/>.
		 */
		place: ParamId;

		/**
		 *  
		 */
public string GetKey() => this.place?.id.toString() ?? "";
	}