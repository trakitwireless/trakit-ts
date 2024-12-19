

	/// <summary>
	/// Gets a list of <see cref="AssetAdvanced"/>s.
	/// </summary>
	export abstract class ReqAssetAdvancedList extends Request implements IReqIDeletable, IReqISuspendable {
		/// <summary>
		/// When true, the command will also return <see cref="AssetAdvancedMessage"/>s for the asset.
		/// </summary>
		public includeMessages: boolean = false;
		/// <summary>
		/// When true, the command will also return <see cref="DispatchTask"/>s for the asset.
		/// </summary>
		public includeTasks: boolean = false;
		/// <summary>
		/// When true, the command will also return suspended <see cref="AssetAdvanced"/>s.
		/// </summary>
		public includeSuspended: boolean = false;
		/// <summary>
		/// When true, the command will also return a deleted <see cref="AssetAdvanced"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
	}

	/// <summary>
	/// Gets the list of <see cref="AssetAdvanced"/>s for the specified <see cref="Company"/>.
	/// </summary>
	export class ReqAssetAdvancedListByCompany extends ReqAssetAdvancedList implements IReqListByCompany {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: ParamId;
	}
	/// <summary>
	/// Gets the list of <see cref="AssetAdvanced"/>s for the specified <see cref="Company"/> only if the <see cref="AssetAdvancedGeneral.labels"/> matches all of the given <see cref="Parameters.labels"/>.
	/// </summary>
	export class ReqAssetAdvancedListByCompanyAndLabels extends ReqAssetAdvancedListByCompany implements IReqListByLabels {
		/// <summary>
		/// The parsed labels given as input.
		/// </summary>
		/// <seealso cref="AssetGeneral.labels"/>
		public labels: string[] = [];
	}
	/// <summary>
	/// Gets the list of <see cref="AssetAdvanced"/>s for the specified <see cref="Company"/> only if one of the specified <see cref="AssetAdvancedGeneral.references"/> fields match.
	/// If no references are specified, it will match any <see cref="AssetAdvanced"/> with no references.
	/// If a reference value is null, it will match any <see cref="AssetAdvanced"/> without that reference key.
	/// </summary>
	export class ReqAssetAdvancedListByCompanyAndRefPairs extends ReqAssetAdvancedListByCompany implements IReqListByReferences {
		/// <summary>
		/// The parsed references given as input.
		/// </summary>
		/// <seealso cref="AssetAdvancedGeneral.references"/>
		public references: Map<string, string>;
	}