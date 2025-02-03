

	/**
	 * Gets a list of {@link UserGeneral}s.
	 */
	export abstract class ReqUserGeneralList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted {@link UserGeneral} (if it exists).
		 */
		includeDeleted: boolean = false;
	}

	/**
	 * Gets the list of {@link UserGeneral}s for the specified {@link Company}.
	 */
	export class ReqUserGeneralListByCompany extends ReqUserGeneralList implements IReqListByCompany {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: ParamId;
	}
	/**
	 * Gets the list of {@link UserGeneral}s for the specified {@link Company} only if the {@link UserGeneralGeneral.labels} matches all of the given {@link Parameters.labels}.
	 */
	export class ReqUserGeneralListByCompanyAndLabels extends ReqUserGeneralListByCompany implements IReqListByLabels {
		/**
		 * The parsed labels given as input.
		 * {@link UserGeneral.labels}
		 */
		labels: string[] = [];
	}
	/**
	 * Gets the list of {@link UserGeneral}s for the specified {@link Company} only if one of the specified {@link UserGeneralGeneral.references} fields match.
	 * If no references are specified, it will match any {@link UserGeneral} with no references.
	 * If a reference value is null, it will match any {@link UserGeneral} without that reference key.
	 */
	export class ReqUserGeneralListByCompanyAndRefPairs extends ReqUserGeneralListByCompany implements IReqListByReferences {
		/**
		 * The parsed references given as input.
		 * {@link UserGeneralGeneral.references}
		 */
		references: Map<string, string>;
	}