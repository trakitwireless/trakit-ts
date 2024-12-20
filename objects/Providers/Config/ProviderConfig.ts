

	/// <summary>
	/// The configured script loaded onto the provider over-the-air to control it's reporting schedule and behaviour.
	/// </summary>
	export class ProviderConfig extends Component implements IIdUlong, INamed, IBelongCompany, IDeletable {
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
		/// The script which this configuration implements.
		/// </summary>
		/// <seealso cref="ProviderScript.id" />
		public script: ulong = NaN;
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
		/// The list of defined variable name/value pairs that the script requires.
		/// </summary>
		public parameters: Map<string, string>;
		/// <summary>
		/// A search pattern used to filter which Places' geometry are used as geofences.
		/// Use null to disable.
		/// Use "*" to match all the Places the Provider's Asset can match.
		/// Or use "#123456" or "label:term" like other Place search patterns.
		/// </summary>
		/// <override type="System.String" format="expression" />
		public geofences: string = "";

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