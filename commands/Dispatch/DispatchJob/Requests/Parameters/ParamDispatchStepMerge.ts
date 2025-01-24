

	/**
	 * Parameter values for updating the <see cref="DispatchStep"/> for a <see cref="DispatchJob"/>.
	 */
	export class ParamDispatchStepMerge extends ParamMergeSubscribable {
		/**
		 * The identifier of the step.
		 * Identifiers are unique to a <see cref="DispatchJob"/>, but are not unique system-wide.
		 */
		public id: ulong = NaN;
		/**
		 * A name for the work needed to be performed.
		 */
		public name: string = "";
		/**
		 * The optional estimated time of arrival for the asset.
		 */
		public eta: Date = DATE();
		/**
		 * The optional expected duration of the work for this step.
		 */
		public duration?: TimeSpan;
		/**
		 * An optional place which can be used as a template instead of providing lat/long coordinates and a street address.
		 * {@link Place.id}
		 */
		public place: ulong = NaN;
		/**
		 * The street address of where the step must be completed.
		 */
		public address: string = "";
		/**
		 * The lat/long coordinates of where the step must be <see cref="DispatchStepStatus.completed"/>.
		 */
		public latlng: LatLng;
		/**
		 * When true, will mean a signature is required to complete this <see cref="DispatchStep"/>.
		 */
		public signature: boolean = false;
	}