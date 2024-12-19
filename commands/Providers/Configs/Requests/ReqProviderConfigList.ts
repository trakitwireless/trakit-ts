

	/// <summary>
	/// Gets details of the specified <see cref="providerConfig"/>.
	/// </summary>
	export abstract class ReqProviderConfigList extends Request implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return  deleted <see cref="ProviderConfig"/>s.
		/// </summary>
		public includeDeleted: boolean = false;
	}
	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	export class ReqProviderConfigListByCompany extends ReqProviderConfigList implements IReqListByCompany {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: ParamId;
	}