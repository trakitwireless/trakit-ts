

	/**
	 * Gets a list of <see cref="ProviderControl"/>s.
	 */
	export abstract class ReqProviderControlList extends Request implements IReqIDeletable, IReqISuspendable {
		/**
		 * When true, the command will also return suspended <see cref="ProviderControl"/>s.
		 */
		public includeSuspended: boolean = false;
		/**
		 * When true, the command will also return a deleted <see cref="ProviderControl"/> (if it exists).
		 */
		public includeDeleted: boolean = false;
	}

	/**
	 * Gets the list of <see cref="ProviderControl"/>s for the specified <see cref="Company"/>.
	 */
	export class ReqProviderControlListByCompany extends ReqProviderControlList implements IReqListByCompany {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public company: ParamId;
	}
	/**
	 * Gets the list of <see cref="ProviderControl"/>s for the specified <see cref="Company"/> only if the <see cref="ProviderControlGeneral.labels"/> matches all of the given <see cref="Parameters.labels"/>.
	 */
	export class ReqProviderControlListByCompanyAndLabels extends ReqProviderControlListByCompany implements IReqListByLabels {
		/**
		 * The parsed labels given as input.
		 * {@link ProviderGeneral.labels}
		 */
		public labels: string[] = [];
	}
	/**
	 * Gets the list of <see cref="ProviderControl"/>s for the specified <see cref="Company"/> only if one of the specified <see cref="ProviderControlGeneral.references"/> fields match.
	 * If no references are specified, it will match any <see cref="ProviderControl"/> with no references.
	 * If a reference value is null, it will match any <see cref="ProviderControl"/> without that reference key.
	 */
	export class ReqProviderControlListByCompanyAndRefPairs extends ReqProviderControlListByCompany implements IReqListByReferences {
		/**
		 * The parsed references given as input.
		 * {@link ProviderControlGeneral.references}
		 */
		public references: Map<string, string>;
	}