

	/**
	 * Device/hardware information reported from the field.
	 */
	export class ProviderAdvanced extends Component implements IBelongCompany {
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
		 * The last IP address of the device.
		 *  <override type="System.String" format="ipv4" />
		 */
		lastIP: IPEndPoint;
		/**
		 * Often changing values like latitude, longitude, speed, wiring state, VBus information, etc...
		 */
		Map<string, Map<string, ProviderData>> attributes;
		/**
		 * Store-and-forward information like last sequence number of SnF window
		 */
		snf: Map<string, string>;

		// IRequestable
		/**
		 * The {@link id} is the key.
		 */
public getKey(): string { return this.id; }
	}