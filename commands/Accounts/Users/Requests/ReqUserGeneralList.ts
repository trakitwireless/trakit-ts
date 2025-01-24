

	/**
	 * Gets a list of <see cref="UserGeneral"/>s.
	 */
	export abstract class ReqUserGeneralList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted <see cref="UserGeneral"/> (if it exists).
		 */
		includeDeleted: boolean = false;
	}

	/**
	 * Gets the list of <see cref="UserGeneral"/>s for the specified <see cref="Company"/>.
	 */
	export class ReqUserGeneralListByCompany extends ReqUserGeneralList implements IReqListByCompany {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		company: ParamId;
	}
	/**
	 * Gets the list of <see cref="UserGeneral"/>s for the specified <see cref="Company"/> only if the <see cref="UserGeneralGeneral.labels"/> matches all of the given <see cref="Parameters.labels"/>.
	 */
	export class ReqUserGeneralListByCompanyAndLabels extends ReqUserGeneralListByCompany implements IReqListByLabels {
		/**
		 * The parsed labels given as input.
		 * {@link UserGeneral.labels}
		 */
		labels: string[] = [];
	}
	/**
	 * Gets the list of <see cref="UserGeneral"/>s for the specified <see cref="Company"/> only if one of the specified <see cref="UserGeneralGeneral.references"/> fields match.
	 * If no references are specified, it will match any <see cref="UserGeneral"/> with no references.
	 * If a reference value is null, it will match any <see cref="UserGeneral"/> without that reference key.
	 */
	export class ReqUserGeneralListByCompanyAndRefPairs extends ReqUserGeneralListByCompany implements IReqListByReferences {
		/**
		 * The parsed references given as input.
		 * {@link UserGeneralGeneral.references}
		 */
		references: Map<string, string>;
	}