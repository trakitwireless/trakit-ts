

	/**
	 * Gets a list of {@link UserAdvanced}s.
	 */
	export abstract class ReqUserAdvancedList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted {@link UserAdvanced} (if it exists).
		 */
		includeDeleted: boolean = false;
	}

	/**
	 * Gets the list of {@link UserAdvanced}s for the specified {@link Company}.
	 */
	export class ReqUserAdvancedListByCompany extends ReqUserAdvancedList implements IReqListByCompany {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: ParamId;
	}
	/**
	 * Gets the list of {@link UserAdvanced}s for the specified {@link Company} only if the {@link UserAdvancedGeneral.labels} matches all of the given {@link Parameters.labels}.
	 */
	export class ReqUserAdvancedListByCompanyAndLabels extends ReqUserAdvancedListByCompany implements IReqListByLabels {
		/**
		 * The parsed labels given as input.
		 * {@link UserGeneral.labels}
		 */
		labels: string[] = [];
	}
	/**
	 * Gets the list of {@link UserAdvanced}s for the specified {@link Company} only if one of the specified {@link UserAdvancedGeneral.references} fields match.
	 * If no references are specified, it will match any {@link UserAdvanced} with no references.
	 * If a reference value is null, it will match any {@link UserAdvanced} without that reference key.
	 */
	export class ReqUserAdvancedListByCompanyAndRefPairs extends ReqUserAdvancedListByCompany implements IReqListByReferences {
		/**
		 * The parsed references given as input.
		 * {@link UserAdvancedGeneral.references}
		 */
		references: Map<string, string>;
	}