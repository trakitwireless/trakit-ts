
	/**
	 * Details for how a circular company tree would have been created.
	 */
	export class ErrorDetailParent extends ErrorDetail {
		/**
		 * The <see cref="Company.parent"/> specified in the parameters.
		 */
		public parent: ulong = NaN;
		/**
		 * ID of the child <see cref="Company"/> that would cause a circular reference.
		 */
		public descendant: ulong = NaN;
	}