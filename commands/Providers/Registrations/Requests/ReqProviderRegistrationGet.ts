

	/// <summary>
	/// Gets details of the specified <see cref="ProviderRegistration"/>.
	/// </summary>
	export class ReqProviderRegistrationGet extends ReqProviderRegistration implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return a deleted <see cref="ProviderRegistration"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
	}