

	/// <summary>
	/// A container for the <see cref="picture"/> object.
	/// </summary>
	export abstract class ReqPicture extends Request implements IReqSingle {
		/// <summary>
		/// An object to contain the "id" of the <see cref="Picture"/>.
		/// </summary>
		public picture: ParamId;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.picture?.id.toString() ?? "";
	}