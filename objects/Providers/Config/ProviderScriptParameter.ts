
	/**
	 * Definition of an argument passed to a ProviderScript.
	 */
	export class ProviderScriptParameter {
		/**
		 * Simple type information for the gateway to process.
		 */
		public kind: ProviderScriptParameterType;
		/**
		 * The value is given as a string, but parsed into native type when used by the gateway.
		 */
		public value: string = "";
		/**
		 * Usage notes.
		 */
		public notes: string = "";
		/**
		 * Gives a hint to the client on the best UI to use for editing.
		 * For example, "checkbox" is a good UI hint for booleanean parameter types.
		 */
		public context: string = "";
		/**
		 * The order in which this parameter is displayed compared to other parameters.
		 * The value has no effect on how this parameter is inserted into the ProviderScriptBlocks.
		 */
		public order: uint = NaN;
		/**
		 * Used as a hint that this parameter controls an advanced script option and should only be set if you really know what you're doing.
		 */
		public advanced: boolean = false;
	}