

	/**
	 * Gets a list of <see cref="AssetDispatch"/>s.
	 */
	export abstract class ReqAssetDispatchList extends Request implements IReqIDeletable, IReqISuspendable {
		/**
		 * When true, the command will also return <see cref="AssetDispatchMessage"/>s for the asset.
		 */
		public includeMessages: boolean = false;
		/**
		 * When true, the command will also return <see cref="DispatchTask"/>s for the asset.
		 */
		public includeTasks: boolean = false;
		/**
		 * When true, the command will also return suspended <see cref="AssetDispatch"/>s.
		 */
		public includeSuspended: boolean = false;
		/**
		 * When true, the command will also return a deleted <see cref="AssetDispatch"/> (if it exists).
		 */
		public includeDeleted: boolean = false;
	}

	/**
	 * Gets the list of <see cref="AssetDispatch"/>s for the specified <see cref="Company"/>.
	 */
	export class ReqAssetDispatchListByCompany extends ReqAssetDispatchList implements IReqListByCompany {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public company: ParamId;
	}
	/**
	 * Gets the list of <see cref="AssetDispatch"/>s for the specified <see cref="Company"/> only if the <see cref="AssetDispatchGeneral.labels"/> matches all of the given <see cref="Parameters.labels"/>.
	 */
	export class ReqAssetDispatchListByCompanyAndLabels extends ReqAssetDispatchListByCompany implements IReqListByLabels {
		/**
		 * The parsed labels given as input.
		 * {@link AssetGeneral.labels}
		 */
		public labels: string[] = [];
	}
	/**
	 * Gets the list of <see cref="AssetDispatch"/>s for the specified <see cref="Company"/> only if one of the specified <see cref="AssetDispatchGeneral.references"/> fields match.
	 * If no references are specified, it will match any <see cref="AssetDispatch"/> with no references.
	 * If a reference value is null, it will match any <see cref="AssetDispatch"/> without that reference key.
	 */
	export class ReqAssetDispatchListByCompanyAndRefPairs extends ReqAssetDispatchListByCompany implements IReqListByReferences {
		/**
		 * The parsed references given as input.
		 * {@link AssetDispatchGeneral.references}
		 */
		public references: Map<string, string>;
	}