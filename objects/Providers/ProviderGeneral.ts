

	/**
	 * Device/hardware information and configuration.
	 */
	export class ProviderGeneral extends Component implements INamed, IBelongCompany, ISuspendable, IDeletable {
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
		 * A nickname given to the device/hardware.
		 *  <override max-length="100" />
		 */
		name: string = "";
		/**
		 * Notes!
		 */
		notes: string = "";
		/**
		 * The kind of communication protocol this device uses.
		 */
		kind: ProviderType;
		/**
		 * The asset for which this device provides field data.
		 * {@link Asset.id}
		 */
		asset: ulong = NaN;
		/**
		 * The provider's current (or pending) configuration profile.
		 * {@link ProviderConfig.id}
		 * {@link ProviderConfiguration.id}
		 */
		configuration: ulong = NaN;

		/**
		 * The password programmed on the device used to ensure the system is the only client authorized to make changes.
		 *  <override max-length="50" />
		 */
		password: string = "";
		/**
		 * The firmware/application version number.
		 *  <override max-length="100" />
		 */
		firmware: string = "";
		/**
		 * The phone number of this device.
		 *  <override format="phone" />
		 */
		phoneNumber: ulong = NaN;
		/**
		 * A list of read-only values about the device like IMEI, ESN, firmware version, hardware revision, etc...
		 */
		information: Map<string, string>;
		/**
		 * ICCID of the SIM card installed in this provider
		 */
		sim: string = "";

		// IRequestable
		/**
		 * The {@link id} is the key.
		 */
public getKey(): string { return this.id.toString(); }

		// ISuspendable and IDeletable
		/**
		 * Indicates whether this object was deleted.
		 */
		deleted: boolean = false;
		/**
		 * Indicates whether this object is suspended from event processing.
		 */
		suspended: boolean = false;
		/**
		 * Timestamp from the action that deleted or suspended this object.
		 */
		since: Date = DATE();
	}