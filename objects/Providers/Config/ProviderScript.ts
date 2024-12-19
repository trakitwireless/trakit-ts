

	/// <summary>
	/// This class describes a type of logic applied to a provider.
	/// A script will generate a file which is loaded onto a provider in the field.
	/// </summary>
	export class ProviderScript extends Component implements IIdUlong, INamed, IBelongCompany, IGlobal, IVisual, IDeletable {
		/// <summary>
		/// Unique identifier of this configuration.
		/// </summary>
		public id: ulong = NaN;
		/// <summary>
		/// The company to which this configuration belongs.
		/// </summary>
		/// <seealso cref="Company.id" />
		public company: ulong = NaN;
		/// <summary>
		/// The nickname given to this configuration
		/// </summary>
		/// <override max-length="100" />
		public name: string = "";
		/// <summary>
		/// Simple details about how the providers are expected to behave.
		/// </summary>
		public notes: string = "";

		/// <summary>
		/// The fill/background colour of the icon.
		/// </summary>
		/// <override max-length="22" format="colour" />
		public fill: string = "";
		/// <summary>
		/// Outline and graphic colour.
		/// </summary>
		/// <override max-length="22" format="colour" />
		public stroke: string = "";
		/// <summary>
		/// The name of the symbol for this script.
		/// </summary>
		/// <override max-length="22" format="codified" />
		public graphic: string = "";

		/// <summary>
		/// Indicates whether this script is available to child companies.
		/// </summary>
		public global: boolean = false;
		/// <summary>
		/// The type of provider for which this script can be used.
		/// Limiting to a specific model from a manufacturer is accomplished through the block conditions.
		/// </summary>
		public kind: ProviderType;
		/// <summary>
		/// Blocks of file data which are (optionally) included in the script data file.
		/// </summary>
		public blocks: ProviderScriptBlock[] = [];
		/// <summary>
		/// Parameter definitions for this script, including type-hints and default values.
		/// </summary>
		public parameters: Map<string, ProviderScriptParameter>;

		// IRequestable
		/// <summary>
		/// The <see cref="id"/> is the key.
		/// </summary>
		/// <returns></returns>
		public getKey(): string { return this.id.toString(); }

		// IDeletable
		/// <summary>
		/// Indicates whether this object was deleted.
		/// </summary>
		public deleted: boolean = false;
		/// <summary>
		/// Timestamp from the action that deleted or suspended this object.
		/// </summary>
		public since: Date = DATE();
	}