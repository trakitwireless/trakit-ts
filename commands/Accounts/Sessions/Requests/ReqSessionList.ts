

	/**
	 * Gets the list of {@link Session} for the specified {@link Company}.
	 */
	export class ReqSessionListByCompany extends Request implements IReqListByCompany {
		/**
		 * An object to contain the "id" of the {@link Company}.
		 */
		company: ParamId;
	}
	/**
	 * Gets the list of {@link Session}s for the specified {@link User}.
	 */
	export class ReqSessionListByUser extends Request implements IReqListByUser {
		/**
		 * An object to contain the "login" of the {@link User}.
		 */
		user: ParamLogin;
	}