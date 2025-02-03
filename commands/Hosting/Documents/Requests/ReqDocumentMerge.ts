

	/**
	 * Creates a new or updates an existing {@link Document}.
	 */
	export class ReqDocumentMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a {@link Document}.
		 */
		document: ParamDocumentMerge;

		/**
		 *  
		 */
public string GetKey() => this.document?.id?.toString() ?? "";
	}