

	/**
	 * The current state of an asset's {@link DispatchJob} route progress.
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
		 * The current list of {@link DispatchJob}s assigned to the asset.
		 * {@link DispatchJob}
		 */
		jobs: ulong[] = [];
		/**
		 * Driving directions and route path details.
		 */
		directions: DispatchDirection[] = [];
		/**
		 * Timestamp from the last update to this {@link AssetDispatch} by a {@link User}, {@link Machine}, {@link Asset}, or an assigned {@link DispatchJob}.
		 */
		lastDispatched: Date = DATE();

		// IRequestable
		/**
		 * The {@link id} is the key.
		 */
public getKey(): string { return this.id.toString(); }
	}