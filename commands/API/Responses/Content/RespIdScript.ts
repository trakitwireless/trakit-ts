
	/**
	 * A container for the id, script id, and owning <see cref="Company.id"/> of the object requested/created.
	 */
	export class RespIdScript extends RespIdCompany {
		/**
		 * Identifier of the script to which this object belongs.
		 */
		script: ulong = NaN;
	}