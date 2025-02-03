

	/**
	 * A container for the {@link dashcam} object.
	 */
	export abstract class ReqDashcam extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the {@link Dashcam}.
		 */
		dashcam: ParamId;

		/**
		 *  
		 */
public string GetKey() => this.dashcam?.id.toString() ?? "";
	}