

	/**
	 * Creates a new or updates an existing <see cref="Document"/>.
	 */
	export class ReqDocumentMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a <see cref="Document"/>.
		 */
		public document: ParamDocumentMerge;

		/**
		 *  
		 */
public string GetKey() => this.document?.id?.toString() ?? "";
	}