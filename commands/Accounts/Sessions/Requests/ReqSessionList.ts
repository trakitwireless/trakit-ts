

	/// <summary>
	/// Gets the list of <see cref="Session"/> for the specified <see cref="Company"/>.
	/// </summary>
	export class ReqSessionListByCompany extends Request implements IReqListByCompany {
		/// <summary>
		/// An object to contain the "id" of the <see cref="Company"/>.
		/// </summary>
		public company: ParamId;
	}
	/// <summary>
	/// Gets the list of <see cref="Session"/>s for the specified <see cref="User"/>.
	/// </summary>
	export class ReqSessionListByUser extends Request implements IReqListByUser {
		/// <summary>
		/// An object to contain the "login" of the <see cref="User"/>.
		/// </summary>
		public user: ParamLogin;
	}