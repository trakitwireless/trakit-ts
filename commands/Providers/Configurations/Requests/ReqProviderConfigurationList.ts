

	/**
	 * Gets details of the specified <see cref="providerConfiguration"/>.
	 * @deprecated Use ReqProviderConfigList instead
	 */
	export abstract class ReqProviderConfigurationList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted <see cref="ProviderConfiguration"/>s.
		 */
		includeDeleted: boolean = false;
	}
	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 * @deprecated Use ReqProviderConfigListByCompany instead
	 */
	export class ReqProviderConfigurationListByCompany extends ReqProviderConfigurationList implements IReqListByCompany {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		company: ParamId;
	}