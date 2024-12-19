

	/// <summary>
	/// Gets a list of <see cref="UserGeneral"/>s.
	/// </summary>
	export abstract class ReqUserGeneralList extends Request implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return a deleted <see cref="UserGeneral"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
	}

	/// <summary>
	/// Gets the list of <see cref="UserGeneral"/>s for the specified <see cref="Company"/>.
	/// </summary>
	export class ReqUserGeneralListByCompany extends ReqUserGeneralList implements IReqListByCompany {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: ParamId;
	}
	/// <summary>
	/// Gets the list of <see cref="UserGeneral"/>s for the specified <see cref="Company"/> only if the <see cref="UserGeneralGeneral.labels"/> matches all of the given <see cref="Parameters.labels"/>.
	/// </summary>
	export class ReqUserGeneralListByCompanyAndLabels extends ReqUserGeneralListByCompany implements IReqListByLabels {
		/// <summary>
		/// The parsed labels given as input.
		/// </summary>
		/// <seealso cref="UserGeneral.labels"/>
		public labels: string[] = [];
	}
	/// <summary>
	/// Gets the list of <see cref="UserGeneral"/>s for the specified <see cref="Company"/> only if one of the specified <see cref="UserGeneralGeneral.references"/> fields match.
	/// If no references are specified, it will match any <see cref="UserGeneral"/> with no references.
	/// If a reference value is null, it will match any <see cref="UserGeneral"/> without that reference key.
	/// </summary>
	export class ReqUserGeneralListByCompanyAndRefPairs extends ReqUserGeneralListByCompany implements IReqListByReferences {
		/// <summary>
		/// The parsed references given as input.
		/// </summary>
		/// <seealso cref="UserGeneralGeneral.references"/>
		public references: Map<string, string>;
	}