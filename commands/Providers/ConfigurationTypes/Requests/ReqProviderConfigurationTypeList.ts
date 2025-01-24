

	/**
	 * Gets details of the specified <see cref="providerConfigurationType"/>.
	 * @deprecated Use ReqProviderScriptList instead
	 */
	export abstract class ReqProviderConfigurationTypeList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted <see cref="ProviderConfigurationType"/>s.
		 */
		includeDeleted: boolean = false;
	}
	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 * @deprecated Use ReqProviderScriptListByCompany instead
	 */
	export class ReqProviderConfigurationTypeListByCompany extends ReqProviderConfigurationTypeList implements IReqListByCompany {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		company: ParamId;
	}