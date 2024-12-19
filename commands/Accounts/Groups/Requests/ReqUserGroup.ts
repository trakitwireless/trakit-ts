

	/// <summary>
	/// A container for the <see cref="userGroup"/> object.
	/// </summary>
	export abstract class ReqUserGroup extends Request implements IReqSingle {
		/// <summary>
		/// An object to contain the "id" of the <see cref="UserGroup"/>.
		/// </summary>
		public userGroup: ParamId;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.userGroup?.id.toString() ?? "";
	}