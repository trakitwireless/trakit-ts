

	/// <summary>
	/// Gets details of the specified <see cref="providerRegistration"/>.
	/// </summary>
	export abstract class ReqProviderRegistrationList extends Request implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return  deleted <see cref="ProviderRegistration"/>s.
		/// </summary>
		public includeDeleted: boolean = false;
	}
	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	export class ReqProviderRegistrationListByCompany extends ReqProviderRegistrationList implements IReqListByCompany {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: ParamId;
	}