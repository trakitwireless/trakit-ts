

	/**
	 * Gets a list of <see cref="Asset"/>s.
	 */
	export abstract class ReqAssetList extends Request implements IReqIDeletable, IReqISuspendable {
		/**
		 * When true, the command will also return <see cref="AssetMessage"/>s for the asset.
		 */
		includeMessages: boolean = false;
		/**
		 * When true, the command will also return <see cref="DispatchTask"/>s for the asset.
		 */
		includeTasks: boolean = false;
		/**
		 * When true, the command will also return suspended <see cref="Asset"/>s.
		 */
		includeSuspended: boolean = false;
		/**
		 * When true, the command will also return a deleted <see cref="Asset"/> (if it exists).
		 */
		includeDeleted: boolean = false;
	}

	/**
	 * Gets the list of <see cref="Asset"/>s for the specified <see cref="Company"/>.
	 */
	export class ReqAssetListByCompany extends ReqAssetList implements IReqListByCompany {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		company: ParamId;
	}
	/**
	 * Gets the list of <see cref="Asset"/>s for the specified <see cref="Company"/> only if the <see cref="AssetGeneral.labels"/> matches all of the given <see cref="Parameters.labels"/>.
	 */
	export class ReqAssetListByCompanyAndLabels extends ReqAssetListByCompany implements IReqListByLabels {
		/**
		 * The parsed labels given as input.
		 * {@link AssetGeneral.labels}
		 */
		labels: string[] = [];
	}
	/**
	 * Gets the list of <see cref="Asset"/>s for the specified <see cref="Company"/> only if one of the specified <see cref="AssetGeneral.references"/> fields match.
	 * If no references are specified, it will match any <see cref="Asset"/> with no references.
	 * If a reference value is null, it will match any <see cref="Asset"/> without that reference key.
	 */
	export class ReqAssetListByCompanyAndRefPairs extends ReqAssetListByCompany implements IReqListByReferences {
		/**
		 * The parsed references given as input.
		 * {@link AssetGeneral.references}
		 */
		references: Map<string, string>;
	}