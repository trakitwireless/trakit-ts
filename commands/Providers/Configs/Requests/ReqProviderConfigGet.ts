

	/// <summary>
	/// Gets details of the specified <see cref="ProviderConfig"/>.
	/// </summary>
	export class ReqProviderConfigGet extends ReqProviderConfig implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return a deleted <see cref="ProviderConfig"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
	}