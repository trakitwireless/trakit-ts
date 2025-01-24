

	/**
	 * Parameter values for updating the <see cref="DispatchStep"/> for a <see cref="DispatchJob"/>.
	 */
	export class ParamDispatchStepMerge extends ParamMergeSubscribable {
		/**
		 * The identifier of the step.
		 * Identifiers are unique to a <see cref="DispatchJob"/>, but are not unique system-wide.
		 */
		id: ulong = NaN;
		/**
		 * A name for the work needed to be performed.
		 */
		name: string = "";
		/**
		 * The optional estimated time of arrival for the asset.
		 */
		eta: Date = DATE();
		/**
		 * The optional expected duration of the work for this step.
		 */
		duration?: TimeSpan;
		/**
		 * An optional place which can be used as a template instead of providing lat/long coordinates and a street address.
		 * {@link Place.id}
		 */
		place: ulong = NaN;
		/**
		 * The street address of where the step must be completed.
		 */
		address: string = "";
		/**
		 * The lat/long coordinates of where the step must be <see cref="DispatchStepStatus.completed"/>.
		 */
		latlng: LatLng;
		/**
		 * When true, will mean a signature is required to complete this <see cref="DispatchStep"/>.
		 */
		signature: boolean = false;
	}