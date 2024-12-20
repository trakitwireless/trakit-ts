

	/// <summary>
	/// Gets details of the specified <see cref="providerScript"/>.
	/// </summary>
	export abstract class ReqProviderScriptList extends Request implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return  deleted <see cref="ProviderScript"/>s.
		/// </summary>
		public includeDeleted: boolean = false;
	}
	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	export class ReqProviderScriptListByCompany extends ReqProviderScriptList implements IReqListByCompany {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: ParamId;
	}