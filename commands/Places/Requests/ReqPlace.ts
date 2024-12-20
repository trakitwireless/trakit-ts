


	/// <summary>
	/// A container for the <see cref="place"/> object.
	/// </summary>
	export abstract class ReqPlace extends Request implements IReqSingle {
		/// <summary>
		/// An object to contain the "id" of the <see cref="Place"/>.
		/// </summary>
		public place: ParamId;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.place?.id.toString() ?? "";
	}