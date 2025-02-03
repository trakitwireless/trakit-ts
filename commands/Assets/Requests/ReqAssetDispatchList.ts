

	/**
	 * Gets a list of {@link AssetDispatch}s.
	 */
	export abstract class ReqAssetDispatchList extends Request implements IReqIDeletable, IReqISuspendable {
		/**
		 * When true, the command will also return {@link AssetDispatchMessage}s for the asset.
		 */
		includeMessages: boolean = false;
		/**
		 * When true, the command will also return {@link DispatchTask}s for the asset.
		 */
		includeTasks: boolean = false;
		/**
		 * When true, the command will also return suspended {@link AssetDispatch}s.
		 */
		includeSuspended: boolean = false;
		/**
		 * When true, the command will also return a deleted {@link AssetDispatch} (if it exists).
		 */
		includeDeleted: boolean = false;
	}

	/**
	 * Gets the list of {@link AssetDispatch}s for the specified {@link Company}.
	 */
	export class ReqAssetDispatchListByCompany extends ReqAssetDispatchList implements IReqListByCompany {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: ParamId;
	}
	/**
	 * Gets the list of {@link AssetDispatch}s for the specified {@link Company} only if the {@link AssetDispatchGeneral.labels} matches all of the given {@link Parameters.labels}.
	 */
	export class ReqAssetDispatchListByCompanyAndLabels extends ReqAssetDispatchListByCompany implements IReqListByLabels {
		/**
		 * The parsed labels given as input.
		 * {@link AssetGeneral.labels}
		 */
		labels: string[] = [];
	}
	/**
	 * Gets the list of {@link AssetDispatch}s for the specified {@link Company} only if one of the specified {@link AssetDispatchGeneral.references} fields match.
	 * If no references are specified, it will match any {@link AssetDispatch} with no references.
	 * If a reference value is null, it will match any {@link AssetDispatch} without that reference key.
	 */
	export class ReqAssetDispatchListByCompanyAndRefPairs extends ReqAssetDispatchListByCompany implements IReqListByReferences {
		/**
		 * The parsed references given as input.
		 * {@link AssetDispatchGeneral.references}
		 */
		references: Map<string, string>;
	}