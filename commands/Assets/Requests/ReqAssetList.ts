

	/**
	 * Gets a list of {@link Asset}s.
	 */
	export abstract class ReqAssetList extends Request implements IReqIDeletable, IReqISuspendable {
		/**
		 * When true, the command will also return {@link AssetMessage}s for the asset.
		 */
		includeMessages: boolean = false;
		/**
		 * When true, the command will also return {@link DispatchTask}s for the asset.
		 */
		includeTasks: boolean = false;
		/**
		 * When true, the command will also return suspended {@link Asset}s.
		 */
		includeSuspended: boolean = false;
		/**
		 * When true, the command will also return a deleted {@link Asset} (if it exists).
		 */
		includeDeleted: boolean = false;
	}

	/**
	 * Gets the list of {@link Asset}s for the specified {@link Company}.
	 */
	export class ReqAssetListByCompany extends ReqAssetList implements IReqListByCompany {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: ParamId;
	}
	/**
	 * Gets the list of {@link Asset}s for the specified {@link Company} only if the {@link AssetGeneral.labels} matches all of the given {@link Parameters.labels}.
	 */
	export class ReqAssetListByCompanyAndLabels extends ReqAssetListByCompany implements IReqListByLabels {
		/**
		 * The parsed labels given as input.
		 * {@link AssetGeneral.labels}
		 */
		labels: string[] = [];
	}
	/**
	 * Gets the list of {@link Asset}s for the specified {@link Company} only if one of the specified {@link AssetGeneral.references} fields match.
	 * If no references are specified, it will match any {@link Asset} with no references.
	 * If a reference value is null, it will match any {@link Asset} without that reference key.
	 */
	export class ReqAssetListByCompanyAndRefPairs extends ReqAssetListByCompany implements IReqListByReferences {
		/**
		 * The parsed references given as input.
		 * {@link AssetGeneral.references}
		 */
		references: Map<string, string>;
	}