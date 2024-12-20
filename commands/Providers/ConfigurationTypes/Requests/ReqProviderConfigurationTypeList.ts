

	/// <summary>
	/// Gets details of the specified <see cref="providerConfigurationType"/>.
	/// </summary>
	[Obsolete("Use ReqProviderScriptList instead")]
	export abstract class ReqProviderConfigurationTypeList extends Request implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return  deleted <see cref="ProviderConfigurationType"/>s.
		/// </summary>
		public includeDeleted: boolean = false;
	}
	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	[Obsolete("Use ReqProviderScriptListByCompany instead")]
	export class ReqProviderConfigurationTypeListByCompany extends ReqProviderConfigurationTypeList implements IReqListByCompany {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: ParamId;
	}