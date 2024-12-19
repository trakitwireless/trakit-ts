

	/// <summary>
	/// Creates a new or updates an existing <see cref="Contact"/>.
	/// </summary>
	export class ReqContactMerge extends Request implements IReqSingle {
		/// <summary>
		/// Parameters given to create or update a <see cref="Contact"/>.
		/// </summary>
		public contact: ParamContactMerge;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.contact?.id?.toString() ?? "";
	}