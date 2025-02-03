

	/**
	 * Gets a list of {@link AssetAdvanced}s.
	 */
	export abstract class ReqAssetAdvancedList extends Request implements IReqIDeletable, IReqISuspendable {
		/**
		 * When true, the command will also return {@link AssetAdvancedMessage}s for the asset.
		 */
		includeMessages: boolean = false;
		/**
		 * When true, the command will also return {@link DispatchTask}s for the asset.
		 */
		includeTasks: boolean = false;
		/**
		 * When true, the command will also return suspended {@link AssetAdvanced}s.
		 */
		includeSuspended: boolean = false;
		/**
		 * When true, the command will also return a deleted {@link AssetAdvanced} (if it exists).
		 */
		includeDeleted: boolean = false;
	}

	/**
	 * Gets the list of {@link AssetAdvanced}s for the specified {@link Company}.
	 */
	export class ReqAssetAdvancedListByCompany extends ReqAssetAdvancedList implements IReqListByCompany {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: ParamId;
	}
	/**
	 * Gets the list of {@link AssetAdvanced}s for the specified {@link Company} only if the {@link AssetAdvancedGeneral.labels} matches all of the given {@link Parameters.labels}.
	 */
	export class ReqAssetAdvancedListByCompanyAndLabels extends ReqAssetAdvancedListByCompany implements IReqListByLabels {
		/**
		 * The parsed labels given as input.
		 * {@link AssetGeneral.labels}
		 */
		labels: string[] = [];
	}
	/**
	 * Gets the list of {@link AssetAdvanced}s for the specified {@link Company} only if one of the specified {@link AssetAdvancedGeneral.references} fields match.
	 * If no references are specified, it will match any {@link AssetAdvanced} with no references.
	 * If a reference value is null, it will match any {@link AssetAdvanced} without that reference key.
	 */
	export class ReqAssetAdvancedListByCompanyAndRefPairs extends ReqAssetAdvancedListByCompany implements IReqListByReferences {
		/**
		 * The parsed references given as input.
		 * {@link AssetAdvancedGeneral.references}
		 */
		references: Map<string, string>;
	}