

	/// <summary>
	/// Gets a list of <see cref="ProviderAdvanced"/>s.
	/// </summary>
	export abstract class ReqProviderAdvancedList extends Request implements IReqIDeletable, IReqISuspendable {
		/// <summary>
		/// When true, the command will also return suspended <see cref="ProviderAdvanced"/>s.
		/// </summary>
		public includeSuspended: boolean = false;
		/// <summary>
		/// When true, the command will also return a deleted <see cref="ProviderAdvanced"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
	}

	/// <summary>
	/// Gets the list of <see cref="ProviderAdvanced"/>s for the specified <see cref="Company"/>.
	/// </summary>
	export class ReqProviderAdvancedListByCompany extends ReqProviderAdvancedList implements IReqListByCompany {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: ParamId;
	}
	/// <summary>
	/// Gets the list of <see cref="ProviderAdvanced"/>s for the specified <see cref="Company"/> only if the <see cref="ProviderAdvancedGeneral.labels"/> matches all of the given <see cref="Parameters.labels"/>.
	/// </summary>
	export class ReqProviderAdvancedListByCompanyAndLabels extends ReqProviderAdvancedListByCompany implements IReqListByLabels {
		/// <summary>
		/// The parsed labels given as input.
		/// </summary>
		/// <seealso cref="ProviderGeneral.labels"/>
		public labels: string[] = [];
	}
	/// <summary>
	/// Gets the list of <see cref="ProviderAdvanced"/>s for the specified <see cref="Company"/> only if one of the specified <see cref="ProviderAdvancedGeneral.references"/> fields match.
	/// If no references are specified, it will match any <see cref="ProviderAdvanced"/> with no references.
	/// If a reference value is null, it will match any <see cref="ProviderAdvanced"/> without that reference key.
	/// </summary>
	export class ReqProviderAdvancedListByCompanyAndRefPairs extends ReqProviderAdvancedListByCompany implements IReqListByReferences {
		/// <summary>
		/// The parsed references given as input.
		/// </summary>
		/// <seealso cref="ProviderAdvancedGeneral.references"/>
		public references: Map<string, string>;
	}