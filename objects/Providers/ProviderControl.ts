

	/// <summary>
	/// Managing communication with Device/hardware.
	/// </summary>
	export class ProviderControl extends Component implements IBelongCompany {
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
		/// Collection of commands for this provider.
		/// </summary>
		public commands: Map<ProviderCommandType, ProviderCommand>;

		// IRequestable
		/// <summary>
		/// The <see cref="id"/> is the key.
		/// </summary>
		/// <returns></returns>
		public getKey(): string { return this.id; }
	}