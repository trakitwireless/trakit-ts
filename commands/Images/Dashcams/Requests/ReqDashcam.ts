

	/// <summary>
	/// A container for the <see cref="dashcam"/> object.
	/// </summary>
	export abstract class ReqDashcam extends Request implements IReqSingle {
		/// <summary>
		/// An object to contain the "id" of the <see cref="Dashcam"/>.
		/// </summary>
		public dashcam: ParamId;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.dashcam?.id.toString() ?? "";
	}