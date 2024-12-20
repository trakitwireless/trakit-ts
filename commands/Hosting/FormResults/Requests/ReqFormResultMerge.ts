


	/// <summary>
	/// Creates a new or updates an existing <see cref="FormResult"/>.
	/// </summary>
	export class ReqFormResultMerge extends Request implements IReqSingle {
		/// <summary>
		/// Parameters given to create or update a <see cref="FormResult"/>.
		/// </summary>
		public formResult: ParamFormResultMerge;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.formResult?.id?.toString() ?? "";
	}