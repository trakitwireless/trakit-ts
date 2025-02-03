

	/**
	 * A container for the {@link provider}.
	 */
	export class RespProviderBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested {@link Provider}.
		 */
		providers: RespIdendifierDeleted[] = [];
	}