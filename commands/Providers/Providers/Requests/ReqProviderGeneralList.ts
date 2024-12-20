

	/// <summary>
	/// Gets a list of <see cref="ProviderGeneral"/>s.
	/// </summary>
	export abstract class ReqProviderGeneralList extends Request implements IReqIDeletable, IReqISuspendable {
		/// <summary>
		/// When true, the command will also return suspended <see cref="ProviderGeneral"/>s.
		/// </summary>
		public includeSuspended: boolean = false;
		/// <summary>
		/// When true, the command will also return a deleted <see cref="ProviderGeneral"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
	}

	/// <summary>
	/// Gets the list of <see cref="ProviderGeneral"/>s for the specified <see cref="Company"/>.
	/// </summary>
	export class ReqProviderGeneralListByCompany extends ReqProviderGeneralList implements IReqListByCompany {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: ParamId;
	}
	/// <summary>
	/// Gets the list of <see cref="ProviderGeneral"/>s for the specified <see cref="Company"/> only if the <see cref="ProviderGeneralGeneral.labels"/> matches all of the given <see cref="Parameters.labels"/>.
	/// </summary>
	export class ReqProviderGeneralListByCompanyAndLabels extends ReqProviderGeneralListByCompany implements IReqListByLabels {
		/// <summary>
		/// The parsed labels given as input.
		/// </summary>
		/// <seealso cref="ProviderGeneral.labels"/>
		public labels: string[] = [];
	}
	/// <summary>
	/// Gets the list of <see cref="ProviderGeneral"/>s for the specified <see cref="Company"/> only if one of the specified <see cref="ProviderGeneralGeneral.references"/> fields match.
	/// If no references are specified, it will match any <see cref="ProviderGeneral"/> with no references.
	/// If a reference value is null, it will match any <see cref="ProviderGeneral"/> without that reference key.
	/// </summary>
	export class ReqProviderGeneralListByCompanyAndRefPairs extends ReqProviderGeneralListByCompany implements IReqListByReferences {
		/// <summary>
		/// The parsed references given as input.
		/// </summary>
		/// <seealso cref="ProviderGeneralGeneral.references"/>
		public references: Map<string, string>;
	}