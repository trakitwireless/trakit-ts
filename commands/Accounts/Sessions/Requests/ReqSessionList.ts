

	/**
	 * Gets the list of <see cref="Session"/> for the specified <see cref="Company"/>.
	 */
	export class ReqSessionListByCompany extends Request implements IReqListByCompany {
		/**
		 * An object to contain the "id" of the <see cref="Company"/>.
		 */
		public company: ParamId;
	}
	/**
	 * Gets the list of <see cref="Session"/>s for the specified <see cref="User"/>.
	 */
	export class ReqSessionListByUser extends Request implements IReqListByUser {
		/**
		 * An object to contain the "login" of the <see cref="User"/>.
		 */
		public user: ParamLogin;
	}