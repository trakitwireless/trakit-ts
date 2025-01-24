

	/**
	 * The configured script loaded onto the provider over-the-air to control it's reporting schedule and behaviour.
	 */
	export class ProviderConfig extends Component implements IIdUlong, INamed, IBelongCompany, IDeletable {
		/**
		 * Unique identifier of this configuration.
		 */
		id: ulong = NaN;
		/**
		 * The company to which this configuration belongs.
		 * {@link Company.id}
		 */
		company: ulong = NaN;
		/**
		 * The script which this configuration implements.
		 * {@link ProviderScript.id}
		 */
		script: ulong = NaN;
		/**
		 * The nickname given to this configuration
		 *  <override max-length="100" />
		 */
		name: string = "";
		/**
		 * Simple details about how the providers are expected to behave.
		 */
		notes: string = "";
		/**
		 * The list of defined variable name/value pairs that the script requires.
		 */
		parameters: Map<string, string>;
		/**
		 * A search pattern used to filter which Places' geometry are used as geofences.
		 * Use null to disable.
		 * Use "*" to match all the Places the Provider's Asset can match.
		 * Or use "#123456" or "label:term" like other Place search patterns.
		 *  <override type="System.String" format="expression" />
		 */
		geofences: string = "";

		// IRequestable
		/**
		 * The <see cref="id"/> is the key.
		 */
public getKey(): string { return this.id.toString(); }

		// IDeletable
		/**
		 * Indicates whether this object was deleted.
		 */
		deleted: boolean = false;
		/**
		 * Timestamp from the action that deleted or suspended this object.
		 */
		since: Date = DATE();
	}