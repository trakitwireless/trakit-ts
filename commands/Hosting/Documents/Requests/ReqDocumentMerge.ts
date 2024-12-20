

	/// <summary>
	/// Creates a new or updates an existing <see cref="Document"/>.
	/// </summary>
	export class ReqDocumentMerge extends Request implements IReqSingle {
		/// <summary>
		/// Parameters given to create or update a <see cref="Document"/>.
		/// </summary>
		public document: ParamDocumentMerge;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.document?.id?.toString() ?? "";
	}