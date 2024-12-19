

	/// <summary>
	/// Gets a list of <see cref="ProviderControl"/>s.
	/// </summary>
	export abstract class ReqProviderControlList extends Request implements IReqIDeletable, IReqISuspendable {
		/// <summary>
		/// When true, the command will also return suspended <see cref="ProviderControl"/>s.
		/// </summary>
		public includeSuspended: boolean = false;
		/// <summary>
		/// When true, the command will also return a deleted <see cref="ProviderControl"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
	}

	/// <summary>
	/// Gets the list of <see cref="ProviderControl"/>s for the specified <see cref="Company"/>.
	/// </summary>
	export class ReqProviderControlListByCompany extends ReqProviderControlList implements IReqListByCompany {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: ParamId;
	}
	/// <summary>
	/// Gets the list of <see cref="ProviderControl"/>s for the specified <see cref="Company"/> only if the <see cref="ProviderControlGeneral.labels"/> matches all of the given <see cref="Parameters.labels"/>.
	/// </summary>
	export class ReqProviderControlListByCompanyAndLabels extends ReqProviderControlListByCompany implements IReqListByLabels {
		/// <summary>
		/// The parsed labels given as input.
		/// </summary>
		/// <seealso cref="ProviderGeneral.labels"/>
		public labels: string[] = [];
	}
	/// <summary>
	/// Gets the list of <see cref="ProviderControl"/>s for the specified <see cref="Company"/> only if one of the specified <see cref="ProviderControlGeneral.references"/> fields match.
	/// If no references are specified, it will match any <see cref="ProviderControl"/> with no references.
	/// If a reference value is null, it will match any <see cref="ProviderControl"/> without that reference key.
	/// </summary>
	export class ReqProviderControlListByCompanyAndRefPairs extends ReqProviderControlListByCompany implements IReqListByReferences {
		/// <summary>
		/// The parsed references given as input.
		/// </summary>
		/// <seealso cref="ProviderControlGeneral.references"/>
		public references: Map<string, string>;
	}