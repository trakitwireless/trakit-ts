

	/// <summary>
	/// Gets details of the specified <see cref="ProviderConfigurationType"/>.
	/// </summary>
	[Obsolete("Use ReqProviderScriptGet instead")]
	export class ReqProviderConfigurationTypeGet extends ReqProviderConfigurationType implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return a deleted <see cref="ProviderConfigurationType"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
	}