
	/// <summary>
	/// Definition of an argument passed to a ProviderScript.
	/// </summary>
	export class ProviderScriptParameter {
		/// <summary>
		/// Simple type information for the gateway to process.
		/// </summary>
		public kind: ProviderScriptParameterType;
		/// <summary>
		/// The value is given as a string, but parsed into native type when used by the gateway.
		/// </summary>
		public value: string = "";
		/// <summary>
		/// Usage notes.
		/// </summary>
		public notes: string = "";
		/// <summary>
		/// Gives a hint to the client on the best UI to use for editing.
		/// For example, "checkbox" is a good UI hint for booleanean parameter types.
		/// </summary>
		public context: string = "";
		/// <summary>
		/// The order in which this parameter is displayed compared to other parameters.
		/// The value has no effect on how this parameter is inserted into the ProviderScriptBlocks.
		/// </summary>
		public order: uint = NaN;
		/// <summary>
		/// Used as a hint that this parameter controls an advanced script option and should only be set if you really know what you're doing.
		/// </summary>
		public advanced: boolean = false;
	}