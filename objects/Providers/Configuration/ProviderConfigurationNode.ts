



	/// <summary>
	/// This tree-like structure is given to the script processor for the device type so that the device can follow a program.
	/// </summary>
	[Obsolete("Use ProviderScriptBlock instead")]
	export class ProviderConfigurationNode {
		/// <summary>
		/// Indicates that this configuration is an advanced property and should only be set by someone who knows what they're doing.
		/// </summary>
		public boolean isAdvanced = true;
		/// <summary>
		/// Unique identifier of the value being mapped.
		/// </summary>
		public string id = string.Empty;
		/// <summary>
		/// The value being set.
		/// </summary>
		public value: object = null;
		/// <summary>
		/// The minimum possible value for this confugration node.
		/// </summary>
		public min: object = null;
		/// <summary>
		/// The maximum possible value for this confugration node.
		/// </summary>
		public max: object = null;
		/// <summary>
		/// Type hint used by the script processor to help format the value.
		/// </summary>
		public type: string = "";
		/// <summary>
		/// Unit hint used to help the script processor format the value.
		/// </summary>
		/// <override type="Vorgon.Units" />
		public unit: string = "";
		/// <summary>
		/// Description of what this configuration does when mapped to a device.
		/// </summary>
		public notes: string = "";
		/// <summary>
		/// Child configuration nodes.
		/// </summary>
		public nodes: Map<string, ProviderConfigurationNode>;
	}