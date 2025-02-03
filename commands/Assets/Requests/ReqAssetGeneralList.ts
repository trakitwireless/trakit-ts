

	/**
	 * Gets a list of {@link AssetGeneral}s.
	 */
	export abstract class ReqAssetGeneralList extends Request implements IReqIDeletable, IReqISuspendable {
		/**
		 * When true, the command will also return {@link AssetGeneralMessage}s for the asset.
		 */
		includeMessages: boolean = false;
		/**
		 * When true, the command will also return {@link DispatchTask}s for the asset.
		 */
		includeTasks: boolean = false;
		/**
		 * When true, the command will also return suspended {@link AssetGeneral}s.
		 */
		includeSuspended: boolean = false;
		/**
		 * When true, the command will also return a deleted {@link AssetGeneral} (if it exists).
		 */
		includeDeleted: boolean = false;
	}

	/**
	 * Gets the list of {@link AssetGeneral}s for the specified {@link Company}.
	 */
	export class ReqAssetGeneralListByCompany extends ReqAssetGeneralList implements IReqListByCompany {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: ParamId;
	}
	/**
	 * Gets the list of {@link AssetGeneral}s for the specified {@link Company} only if the {@link AssetGeneralGeneral.labels} matches all of the given {@link Parameters.labels}.
	 */
	export class ReqAssetGeneralListByCompanyAndLabels extends ReqAssetGeneralListByCompany implements IReqListByLabels {
		/**
		 * The parsed labels given as input.
		 * {@link AssetGeneral.labels}
		 */
		labels: string[] = [];
	}
	/**
	 * Gets the list of {@link AssetGeneral}s for the specified {@link Company} only if one of the specified {@link AssetGeneralGeneral.references} fields match.
	 * If no references are specified, it will match any {@link AssetGeneral} with no references.
	 * If a reference value is null, it will match any {@link AssetGeneral} without that reference key.
	 */
	export class ReqAssetGeneralListByCompanyAndRefPairs extends ReqAssetGeneralListByCompany implements IReqListByReferences {
		/**
		 * The parsed references given as input.
		 * {@link AssetGeneralGeneral.references}
		 */
		references: Map<string, string>;
	}