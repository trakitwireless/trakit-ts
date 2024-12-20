

	/// <summary>
	/// Gets details of the specified <see cref="providerConfiguration"/>.
	/// </summary>
	[Obsolete("Use ReqProviderConfigList instead")]
	export abstract class ReqProviderConfigurationList extends Request implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return  deleted <see cref="ProviderConfiguration"/>s.
		/// </summary>
		public includeDeleted: boolean = false;
	}
	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	[Obsolete("Use ReqProviderConfigListByCompany instead")]
	export class ReqProviderConfigurationListByCompany extends ReqProviderConfigurationList implements IReqListByCompany {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: ParamId;
	}