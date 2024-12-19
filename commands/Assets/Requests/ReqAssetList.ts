

	/// <summary>
	/// Gets a list of <see cref="Asset"/>s.
	/// </summary>
	export abstract class ReqAssetList extends Request implements IReqIDeletable, IReqISuspendable {
		/// <summary>
		/// When true, the command will also return <see cref="AssetMessage"/>s for the asset.
		/// </summary>
		public includeMessages: boolean = false;
		/// <summary>
		/// When true, the command will also return <see cref="DispatchTask"/>s for the asset.
		/// </summary>
		public includeTasks: boolean = false;
		/// <summary>
		/// When true, the command will also return suspended <see cref="Asset"/>s.
		/// </summary>
		public includeSuspended: boolean = false;
		/// <summary>
		/// When true, the command will also return a deleted <see cref="Asset"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
	}

	/// <summary>
	/// Gets the list of <see cref="Asset"/>s for the specified <see cref="Company"/>.
	/// </summary>
	export class ReqAssetListByCompany extends ReqAssetList implements IReqListByCompany {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: ParamId;
	}
	/// <summary>
	/// Gets the list of <see cref="Asset"/>s for the specified <see cref="Company"/> only if the <see cref="AssetGeneral.labels"/> matches all of the given <see cref="Parameters.labels"/>.
	/// </summary>
	export class ReqAssetListByCompanyAndLabels extends ReqAssetListByCompany implements IReqListByLabels {
		/// <summary>
		/// The parsed labels given as input.
		/// </summary>
		/// <seealso cref="AssetGeneral.labels"/>
		public labels: string[] = [];
	}
	/// <summary>
	/// Gets the list of <see cref="Asset"/>s for the specified <see cref="Company"/> only if one of the specified <see cref="AssetGeneral.references"/> fields match.
	/// If no references are specified, it will match any <see cref="Asset"/> with no references.
	/// If a reference value is null, it will match any <see cref="Asset"/> without that reference key.
	/// </summary>
	export class ReqAssetListByCompanyAndRefPairs extends ReqAssetListByCompany implements IReqListByReferences {
		/// <summary>
		/// The parsed references given as input.
		/// </summary>
		/// <seealso cref="AssetGeneral.references"/>
		public references: Map<string, string>;
	}