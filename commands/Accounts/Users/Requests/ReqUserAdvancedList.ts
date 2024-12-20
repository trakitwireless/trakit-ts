

	/// <summary>
	/// Gets a list of <see cref="UserAdvanced"/>s.
	/// </summary>
	export abstract class ReqUserAdvancedList extends Request implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return a deleted <see cref="UserAdvanced"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
	}

	/// <summary>
	/// Gets the list of <see cref="UserAdvanced"/>s for the specified <see cref="Company"/>.
	/// </summary>
	export class ReqUserAdvancedListByCompany extends ReqUserAdvancedList implements IReqListByCompany {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: ParamId;
	}
	/// <summary>
	/// Gets the list of <see cref="UserAdvanced"/>s for the specified <see cref="Company"/> only if the <see cref="UserAdvancedGeneral.labels"/> matches all of the given <see cref="Parameters.labels"/>.
	/// </summary>
	export class ReqUserAdvancedListByCompanyAndLabels extends ReqUserAdvancedListByCompany implements IReqListByLabels {
		/// <summary>
		/// The parsed labels given as input.
		/// </summary>
		/// <seealso cref="UserGeneral.labels"/>
		public labels: string[] = [];
	}
	/// <summary>
	/// Gets the list of <see cref="UserAdvanced"/>s for the specified <see cref="Company"/> only if one of the specified <see cref="UserAdvancedGeneral.references"/> fields match.
	/// If no references are specified, it will match any <see cref="UserAdvanced"/> with no references.
	/// If a reference value is null, it will match any <see cref="UserAdvanced"/> without that reference key.
	/// </summary>
	export class ReqUserAdvancedListByCompanyAndRefPairs extends ReqUserAdvancedListByCompany implements IReqListByReferences {
		/// <summary>
		/// The parsed references given as input.
		/// </summary>
		/// <seealso cref="UserAdvancedGeneral.references"/>
		public references: Map<string, string>;
	}