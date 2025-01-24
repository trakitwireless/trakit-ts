

	/**
	 * This class describes a type of logic applied to a provider.
	 * A script will generate a file which is loaded onto a provider in the field.
	 */
	export class ProviderScript extends Component implements IIdUlong, INamed, IBelongCompany, IGlobal, IVisual, IDeletable {
		/**
		 * Unique identifier of this configuration.
		 */
		public id: ulong = NaN;
		/**
		 * The company to which this configuration belongs.
		 * {@link Company.id}
		 */
		public company: ulong = NaN;
		/**
		 * The nickname given to this configuration
		 *  <override max-length="100" />
		 */
		public name: string = "";
		/**
		 * Simple details about how the providers are expected to behave.
		 */
		public notes: string = "";

		/**
		 * The fill/background colour of the icon.
		 *  <override max-length="22" format="colour" />
		 */
		public fill: string = "";
		/**
		 * Outline and graphic colour.
		 *  <override max-length="22" format="colour" />
		 */
		public stroke: string = "";
		/**
		 * The name of the symbol for this script.
		 *  <override max-length="22" format="codified" />
		 */
		public graphic: string = "";

		/**
		 * Indicates whether this script is available to child companies.
		 */
		public global: boolean = false;
		/**
		 * The type of provider for which this script can be used.
		 * Limiting to a specific model from a manufacturer is accomplished through the block conditions.
		 */
		public kind: ProviderType;
		/**
		 * Blocks of file data which are (optionally) included in the script data file.
		 */
		public blocks: ProviderScriptBlock[] = [];
		/**
		 * Parameter definitions for this script, including type-hints and default values.
		 */
		public parameters: Map<string, ProviderScriptParameter>;

		// IRequestable
		/**
		 * The <see cref="id"/> is the key.
		 */
public getKey(): string { return this.id.toString(); }

		// IDeletable
		/**
		 * Indicates whether this object was deleted.
		 */
		public deleted: boolean = false;
		/**
		 * Timestamp from the action that deleted or suspended this object.
		 */
		public since: Date = DATE();
	}