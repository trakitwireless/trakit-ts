

	/**
	 * Parameters used to create or update an <see cref="Asset"/>.
	 */
	export class ParamAssetMerge extends ParamMergeSubscribable {
		/**
		 * The unique identifier of the <see cref="Asset"/> you want to update.
		 *  <override required="update" />
		 */
		id: ulong = NaN;
		/**
		 * The identifier of the <see cref="Company"/> to which this <see cref="Asset"/> belongs.
		 * After creation, this value is read-only.
		 *  <override required="create" />
		 */
		company: ulong = NaN;
		/**
		 * The kind of <see cref="Asset"/> being created.
		 * After creation, this value is read-only.
		 *  <override required="create" />
		 */
		kind?: AssetType;
		/**
		 * Name for the <see cref="Asset"/>.
		 *  <override required="create" max-length="100" />
		 */
		name: string = "";
		/**
		 * Notes for the <see cref="Asset"/>.
		 */
		notes: string = "";
		/**
		 * The identifier of the <see cref="Icon"/> used to represent this <see cref="Asset"/> in the UI.
		 *  <override required="create" />
		 * {@link Icon.id}
		 */
		icon: ulong = NaN;
		/**
		 * A list of <format id="codified"/>&amp;nbsp;<see cref="CompanyStyles.labels">label</see> names to categorize/organize this <see cref="Asset"/>.
		 *  <override>
		 *  <values format="codified">
		 * {@link LabelStyle.code}
		 *  </values>
		 *  </override>
		 */
		labels: string[] = [];
		/**
		 * Replaces the <see cref="Asset"/>'s status tags with the given list of <format id="codified"/> tags.
		 */
		tags: string[] = [];
		/**
		 * Allows you to add, remove, and replace attributes.
		 * For each <see cref="AssetAttribute"/> in the attributes object,
		 * the value will be replaced on the <see cref="Asset"/>.
		 * If value is null, the attribute is removed from the <see cref="Asset"/>.
		 * If the key in the attributes object is different from the <format id="codified"/>(<see cref="AssetAttribute.name"/>)
		 * in the object, the attribute of the key is removed from the <see cref="Asset"/>, and one of the codified name is added to the <see cref="Asset"/>.
		 * If a new value or null is not provided for a current attribute, no change is made.
		 */
		attributes: Map<string, AssetAttribute?>;
		/**
		 * The email address or phone number of this <see cref="Asset"/> when a <see cref="Person"/>'s <see cref="Contact"/> card is blank, or the <see cref="Provider"/>'s <see cref="ProviderGeneral.pnd">PND</see> is not installed.
		 */
		messagingAddress: string = "";
		/**
		 * The identifiers of <see cref="Picture"/>s of this <see cref="Asset"/>.
		 *  <override>
		 *  <values>
		 * {@link Picture.id}
		 *  </values>
		 *  </override>
		 */
		pictures: ulong[] = [];
		/**
		 * Name/value collections of custom fields used to refer to external systems.
		 * If the value is null, the references are removed from the <see cref="Asset"/>.
		 */
		references: Map<string, string>;
		/**
		 * The contact card details for this <see cref="Asset"/>.
		 * Only applicable if <c>asset.kind</c> is <see cref="AssetType.person"/>.
		 *  <override required="create (for person)" />
		 */
		contact: ulong = NaN;
		/**
		 * The year this <see cref="Vehicle"/> or <see cref="Trailer"/> was built.
		 * Only applicable if <c>asset.kind</c> is <see cref="AssetType.vehicle"/> or <see cref="AssetType.trailer"/>.
		 */
		year: ushort = NaN;
		/**
		 * The license plate of this <see cref="Vehicle"/> or <see cref="Trailer"/>.
		 * Only applicable if <c>asset.kind</c> is <see cref="AssetType.vehicle"/> or <see cref="AssetType.trailer"/>.
		 */
		plate: string = "";
		/**
		 * The manufacturer of this <see cref="Vehicle"/> or <see cref="Trailer"/>.
		 * Only applicable if <c>asset.kind</c> is <see cref="AssetType.vehicle"/> or <see cref="AssetType.trailer"/>.
		 */
		make: string = "";
		/**
		 * The model of this <see cref="Vehicle"/> or <see cref="Trailer"/>.
		 * Only applicable if <c>asset.kind</c> is <see cref="AssetType.vehicle"/> or <see cref="AssetType.trailer"/>.
		 */
		model: string = "";
		/**
		 * The pretty-pretty colour of this <see cref="Vehicle"/> or <see cref="Trailer"/>.
		 * Only applicable if <c>asset.kind</c> is <see cref="AssetType.vehicle"/> or <see cref="AssetType.trailer"/>.
		 *  <override max-length="22" format="colour" />
		 */
		colour: string = "";
		/**
		 * The manufacturer's identification number of this <see cref="Trailer"/>.
		 * Only applicable if <c>asset.kind</c> is <see cref="AssetType.vehicle"/>.
		 */
		serial: string = "";
		/**
		 * The Vehicle Identification Number of this <see cref="Vehicle"/>.
		 * Only applicable if <c>asset.kind</c> is <see cref="AssetType.trailer"/>.
		 */
		vin: string = "";
		/**
		 * The distance travelled by this <see cref="Asset"/>.
		 * Can be a GPS odometer, OBD-II odometer, or other depending on scripts.
		 */
		odometer: double = NaN;
		/**
		 * The number of hours the engine has been running for this <see cref="Vehicle"/>.
		 * Only applicable if <c>asset.kind</c> is <see cref="AssetType.vehicle"/>.
		 */
		engineHours: double = NaN;
		/**
		 * A list of related asset identifiers like a driver for a <see cref="Vehicle"/>, or <see cref="Trailer"/> for a truck.
		 *  <override>
		 *  <values>
		 * {@link Asset.id}
		 *  </values>
		 *  </override>
		 */
		relationships: ulong[] = [];
	}