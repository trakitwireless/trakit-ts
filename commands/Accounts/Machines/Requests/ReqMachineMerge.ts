

	/// <summary>
	/// Creates a new or updates an existing <see cref="Machine"/>.
	/// </summary>
	export class ReqMachineMerge extends Request implements IReqSingle {
		/// <summary>
		/// Parameters given to create or update a <see cref="Machine"/>.
		/// </summary>
		public machine: ParamMachineMerge;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.machine?.key ?? "";
	}