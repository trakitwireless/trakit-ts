
	/**
	 * Details for how a circular company tree would have been created.
	 */
	export class ErrorDetailParent extends ErrorDetail {
		/**
		 * The {@link Company.parent} specified in the parameters.
		 */
		parent: ulong = NaN;
		/**
		 * ID of the child {@link Company} that would cause a circular reference.
		 */
		descendant: ulong = NaN;
	}