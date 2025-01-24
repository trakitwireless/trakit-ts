

	/**
	 * Gets details of the specified <see cref="providerConfig"/>.
	 */
	export abstract class ReqProviderConfigList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted <see cref="ProviderConfig"/>s.
		 */
		public includeDeleted: boolean = false;
	}
	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class ReqProviderConfigListByCompany extends ReqProviderConfigList implements IReqListByCompany {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public company: ParamId;
	}