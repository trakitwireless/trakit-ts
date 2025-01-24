

	/**
	 * Managing communication with Device/hardware.
	 */
	export class ProviderControl extends Component implements IBelongCompany {
		/**
		 * Unique identifier of this device.
		 * {@link Provider.id}
		 *  <override min-length="10" max-length="50" />
		 */
		public id: string = "";
		/**
		 * The company to which this device belongs.
		 * {@link Company.id}
		 */
		public company: ulong = NaN;
		/**
		 * Collection of commands for this provider.
		 */
		public commands: Map<ProviderCommandType, ProviderCommand>;

		// IRequestable
		/**
		 * The <see cref="id"/> is the key.
		 */
public getKey(): string { return this.id; }
	}