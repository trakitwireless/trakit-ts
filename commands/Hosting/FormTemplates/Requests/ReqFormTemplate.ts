


	/// <summary>
	/// A container for the <see cref="formTemplate"/> object.
	/// </summary>
	export abstract class ReqFormTemplate extends Request implements IReqSingle {
		/// <summary>
		/// An object to contain the "id" of the <see cref="FormTemplate"/>.
		/// </summary>
		public formTemplate: ParamId;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.formTemplate?.id.toString() ?? "";
	}