

	/// <summary>
	/// Gets details of the specified <see cref="ProviderConfiguration"/>.
	/// </summary>
	[Obsolete("Use ReqProviderConfigGet instead")]
	export class ReqProviderConfigurationGet extends ReqProviderConfiguration implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return a deleted <see cref="ProviderConfiguration"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
	}