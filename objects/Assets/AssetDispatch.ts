

	/**
	 * The current state of an asset's <see cref="DispatchJob"/> route progress.
	 */
	export class AssetDispatch extends Component implements IIdUlong, IBelongCompany {
		/**
		 * Unique identifier of this asset.
		 * {@link Asset.id}
		 */
		id: ulong = NaN;
		/**
		 * The company to which this asset belongs.
		 * {@link Company.id}
		 */
		company: ulong = NaN;
		/**
		 * The current list of <see cref="DispatchJob"/>s assigned to the asset.
		 * {@link DispatchJob}
		 */
		jobs: ulong[] = [];
		/**
		 * Driving directions and route path details.
		 */
		directions: DispatchDirection[] = [];
		/**
		 * Timestamp from the last update to this <see cref="AssetDispatch"/> by a <see cref="User"/>, <see cref="Machine"/>, <see cref="Asset"/>, or an assigned <see cref="DispatchJob"/>.
		 */
		lastDispatched: Date = DATE();

		// IRequestable
		/**
		 * The <see cref="id"/> is the key.
		 */
public getKey(): string { return this.id.toString(); }
	}