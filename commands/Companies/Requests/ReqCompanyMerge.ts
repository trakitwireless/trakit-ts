

	/// <summary>
	/// Creates a new or updates an existing <see cref="Company"/>.
	/// </summary>
	export class ReqCompanyMerge extends Request implements IReqSingle {
		/// <summary>
		/// Parameters given to create or update a <see cref="Company"/>.
		/// </summary>
		public company: ParamCompanyMerge;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.company?.id?.toString() ?? "";
	}