

	/**
	 * Parameters used to create or update an {@link Asset}.
	 */
	export class ParamAssetMerge extends ParamMergeSubscribable {
		/**
		 * The unique identifier of the {@link Asset} you want to update.
		 *  <override required="update" />
		 */
		id: ulong = NaN;
		/**
		 * The identifier of the {@link Company} to which this {@link Asset} belongs.
		 * After creation, this value is read-only.
		 *  <override required="create" />
		 */
		company: ulong = NaN;
		/**
		 * The kind of {@link Asset} being created.
		 * After creation, this value is read-only.
		 *  <override required="create" />
		 */
		kind?: AssetType;
		/**
		 * Name for the {@link Asset}.
		 *  <override required="create" max-length="100" />
		 */
		name: string = "";
		/**
		 * Notes for the {@link Asset}.
		 */
		notes: string = "";
		/**
		 * The identifier of the {@link Icon} used to represent this {@link Asset} in the UI.
		 *  <override required="create" />
		 * {@link Icon.id}
		 */
		icon: ulong = NaN;
		/**
		 * A list of <format id="codified"/>&amp;nbsp;{@link CompanyStyles.labels|label} names to categorize/organize this {@link Asset}.
		 *  <override>
		 *  <values format="codified">
		 * {@link LabelStyle.code}
		 *  </values>
		 *  </override>
		 */
		labels: string[] = [];
		/**
		 * Replaces the {@link Asset}'s status tags with the given list of <format id="codified"/> tags.
		 */
		tags: string[] = [];
		/**
		 * Allows you to add, remove, and replace attributes.
		 * For each {@link AssetAttribute} in the attributes object,
		 * the value will be replaced on the {@link Asset}.
		 * If value is null, the attribute is removed from the {@link Asset}.
		 * If the key in the attributes object is different from the <format id="codified"/>({@link AssetAttribute.name})
		 * in the object, the attribute of the key is removed from the {@link Asset}, and one of the codified name is added to the {@link Asset}.
		 * If a new value or null is not provided for a current attribute, no change is made.
		 */
		attributes: Map<string, AssetAttribute?>;
		/**
		 * The email address or phone number of this {@link Asset} when a {@link Person}'s {@link Contact} card is blank, or the {@link Provider}'s {@link ProviderGeneral.pnd|PND} is not installed.
		 */
		messagingAddress: string = "";
		/**
		 * The identifiers of {@link Picture}s of this {@link Asset}.
		 *  <override>
		 *  <values>
		 * {@link Picture.id}
		 *  </values>
		 *  </override>
		 */
		pictures: ulong[] = [];
		/**
		 * Name/value collections of custom fields used to refer to external systems.
		 * If the value is null, the references are removed from the {@link Asset}.
		 */
		references: Map<string, string>;
		/**
		 * The contact card details for this {@link Asset}.
		 * Only applicable if <c>asset.kind</c> is {@link AssetType.person}.
		 *  <override required="create (for person)" />
		 */
		contact: ulong = NaN;
		/**
		 * The year this {@link Vehicle} or {@link Trailer} was built.
		 * Only applicable if <c>asset.kind</c> is {@link AssetType.vehicle} or {@link AssetType.trailer}.
		 */
		year: ushort = NaN;
		/**
		 * The license plate of this {@link Vehicle} or {@link Trailer}.
		 * Only applicable if <c>asset.kind</c> is {@link AssetType.vehicle} or {@link AssetType.trailer}.
		 */
		plate: string = "";
		/**
		 * The manufacturer of this {@link Vehicle} or {@link Trailer}.
		 * Only applicable if <c>asset.kind</c> is {@link AssetType.vehicle} or {@link AssetType.trailer}.
		 */
		make: string = "";
		/**
		 * The model of this {@link Vehicle} or {@link Trailer}.
		 * Only applicable if <c>asset.kind</c> is {@link AssetType.vehicle} or {@link AssetType.trailer}.
		 */
		model: string = "";
		/**
		 * The pretty-pretty colour of this {@link Vehicle} or {@link Trailer}.
		 * Only applicable if <c>asset.kind</c> is {@link AssetType.vehicle} or {@link AssetType.trailer}.
		 *  <override max-length="22" format="colour" />
		 */
		colour: string = "";
		/**
		 * The manufacturer's identification number of this {@link Trailer}.
		 * Only applicable if <c>asset.kind</c> is {@link AssetType.vehicle}.
		 */
		serial: string = "";
		/**
		 * The Vehicle Identification Number of this {@link Vehicle}.
		 * Only applicable if <c>asset.kind</c> is {@link AssetType.trailer}.
		 */
		vin: string = "";
		/**
		 * The distance travelled by this {@link Asset}.
		 * Can be a GPS odometer, OBD-II odometer, or other depending on scripts.
		 */
		odometer: double = NaN;
		/**
		 * The number of hours the engine has been running for this {@link Vehicle}.
		 * Only applicable if <c>asset.kind</c> is {@link AssetType.vehicle}.
		 */
		engineHours: double = NaN;
		/**
		 * A list of related asset identifiers like a driver for a {@link Vehicle}, or {@link Trailer} for a truck.
		 *  <override>
		 *  <values>
		 * {@link Asset.id}
		 *  </values>
		 *  </override>
		 */
		relationships: ulong[] = [];
	}