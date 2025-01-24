

	/**
	 * Gets a list of <see cref="UserAdvanced"/>s.
	 */
	export abstract class ReqUserAdvancedList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted <see cref="UserAdvanced"/> (if it exists).
		 */
		includeDeleted: boolean = false;
	}

	/**
	 * Gets the list of <see cref="UserAdvanced"/>s for the specified <see cref="Company"/>.
	 */
	export class ReqUserAdvancedListByCompany extends ReqUserAdvancedList implements IReqListByCompany {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		company: ParamId;
	}
	/**
	 * Gets the list of <see cref="UserAdvanced"/>s for the specified <see cref="Company"/> only if the <see cref="UserAdvancedGeneral.labels"/> matches all of the given <see cref="Parameters.labels"/>.
	 */
	export class ReqUserAdvancedListByCompanyAndLabels extends ReqUserAdvancedListByCompany implements IReqListByLabels {
		/**
		 * The parsed labels given as input.
		 * {@link UserGeneral.labels}
		 */
		labels: string[] = [];
	}
	/**
	 * Gets the list of <see cref="UserAdvanced"/>s for the specified <see cref="Company"/> only if one of the specified <see cref="UserAdvancedGeneral.references"/> fields match.
	 * If no references are specified, it will match any <see cref="UserAdvanced"/> with no references.
	 * If a reference value is null, it will match any <see cref="UserAdvanced"/> without that reference key.
	 */
	export class ReqUserAdvancedListByCompanyAndRefPairs extends ReqUserAdvancedListByCompany implements IReqListByReferences {
		/**
		 * The parsed references given as input.
		 * {@link UserAdvancedGeneral.references}
		 */
		references: Map<string, string>;
	}