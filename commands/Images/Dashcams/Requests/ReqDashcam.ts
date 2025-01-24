

	/**
	 * A container for the <see cref="dashcam"/> object.
	 */
	export abstract class ReqDashcam extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the <see cref="Dashcam"/>.
		 */
		public dashcam: ParamId;

		/**
		 *  
		 */
public string GetKey() => this.dashcam?.id.toString() ?? "";
	}