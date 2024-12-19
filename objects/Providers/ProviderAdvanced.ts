

	/// <summary>
	/// Device/hardware information reported from the field.
	/// </summary>
	export class ProviderAdvanced extends Component implements IBelongCompany {
		/// <summary>
		/// Unique identifier of this device.
		/// </summary>
		/// <seealso cref="Provider.id" />
		/// <override min-length="10" max-length="50" />
		public id: string = "";
		/// <summary>
		/// The company to which this device belongs.
		/// </summary>
		/// <seealso cref="Company.id" />
		public company: ulong = NaN;
		/// <summary>
		/// The last IP address of the device.
		/// </summary>
		/// <override type="System.String" format="ipv4" />
		public lastIP: IPEndPoint;
		/// <summary>
		/// Often changing values like latitude, longitude, speed, wiring state, VBus information, etc...
		/// </summary>
		public Map<string, Map<string, ProviderData>> attributes;
		/// <summary>
		/// Store-and-forward information like last sequence number of SnF window
		/// </summary>
		public snf: Map<string, string>;

		// IRequestable
		/// <summary>
		/// The <see cref="id"/> is the key.
		/// </summary>
		/// <returns></returns>
		public getKey(): string { return this.id; }
	}