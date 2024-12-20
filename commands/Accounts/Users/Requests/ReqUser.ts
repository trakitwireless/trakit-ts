

	/// <summary>
	/// A container for the <see cref="user"/> object.
	/// </summary>
	export abstract class ReqUser extends Request implements IReqSingle {
		/// <summary>
		/// An object to contain the "id" of the <see cref="User"/>.
		/// </summary>
		public user: ParamLogin;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.user?.login ?? "";
	}