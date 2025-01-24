



	/**
	 * This tree-like structure is given to the script processor for the device type so that the device can follow a program.
	 * @deprecated Use ProviderScriptBlock instead
	 */
	export class ProviderConfigurationNode {
		/**
		 * Indicates that this configuration is an advanced property and should only be set by someone who knows what they're doing.
		 */
		public boolean isAdvanced = true;
		/**
		 * Unique identifier of the value being mapped.
		 */
		public string id = string.Empty;
		/**
		 * The value being set.
		 */
		public value: object = null;
		/**
		 * The minimum possible value for this confugration node.
		 */
		public min: object = null;
		/**
		 * The maximum possible value for this confugration node.
		 */
		public max: object = null;
		/**
		 * Type hint used by the script processor to help format the value.
		 */
		public type: string = "";
		/**
		 * Unit hint used to help the script processor format the value.
		 *  <override type="Vorgon.Units" />
		 */
		public unit: string = "";
		/**
		 * Description of what this configuration does when mapped to a device.
		 */
		public notes: string = "";
		/**
		 * Child configuration nodes.
		 */
		public nodes: Map<string, ProviderConfigurationNode>;
	}