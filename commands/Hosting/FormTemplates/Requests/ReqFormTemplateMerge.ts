


	/// <summary>
	/// Creates a new or updates an existing <see cref="FormTemplate"/>.
	/// </summary>
	export class ReqFormTemplateMerge extends Request implements IReqSingle {
		/// <summary>
		/// Parameters given to create or update a <see cref="FormTemplate"/>.
		/// </summary>
		public formTemplate: ParamFormTemplateMerge;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.formTemplate?.id?.toString() ?? "";
	}