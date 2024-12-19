

	/// <summary>
	/// Creates a new or updates an existing <see cref="Picture"/>.
	/// </summary>
	export class ReqPictureMerge extends Request implements IReqSingle {
		/// <summary>
		/// Parameters given to create or update a <see cref="Picture"/>.
		/// </summary>
		public picture: ParamPictureMerge;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.picture?.id?.toString() ?? "";
	}