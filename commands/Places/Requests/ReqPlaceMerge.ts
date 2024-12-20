


	/// <summary>
	/// Creates a new or updates an existing <see cref="Place"/>.
	/// </summary>
	export class ReqPlaceMerge extends Request implements IReqSingle {
		/// <summary>
		/// Parameters given to create or update a <see cref="Place"/>.
		/// </summary>
		public place: ParamPlaceMerge;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.place?.id?.toString() ?? "";
	}