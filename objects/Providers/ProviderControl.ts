

	/**
	 * Managing communication with Device/hardware.
	 */
	export class ProviderControl extends Component implements IBelongCompany {
		/**
		 * Unique identifier of this device.
		 * {@link Provider.id}
		 *  <override min-length="10" max-length="50" />
		 */
		id: string = "";
		/**
		 * The company to which this device belongs.
		 * {@link Company.id}
		 */
		company: ulong = NaN;
		/**
		 * Collection of commands for this provider.
		 */
		commands: Map<ProviderCommandType, ProviderCommand>;

		// IRequestable
		/**
		 * The {@link id} is the key.
		 */
public getKey(): string { return this.id; }
	}