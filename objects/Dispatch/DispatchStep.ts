




	/**
	 * A portion of work for a <see cref="DispatchJob"/>.
	 */
	export class DispatchStep implements IIdUlong implements INamed {
		/**
		 * Identifier for this <see cref="DispatchStep"/>.
		 * This value is unique per <see cref="DispatchJob"/>, but is not unique system-wide.
		 */
		id: ulong = NaN;
		/**
		 * A name for the work needed to be performed.
		 *  <override max-length="100" />
		 */
		name: string = "";
		/**
		 * The most recently updated state for this step.
		 */
		get status(): DispatchStepStatus { return this.states.OrderByDescending(p => p.Value.updated).FirstOrDefault().Key; }
		/**
		 * The progress of this step.
		 */
		states: Map<DispatchStepStatus, DispatchStepState>;
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
		 *  <override max-length="500" />
		 */
		address: string = "";
		/**
		 * The lat/long coordinates of where the step must be <see cref="DispatchStepStatus.completed"/>.
		 */
		latlng: LatLng;
		/**
		 * Notes about the status of the work filled in by field-employee.
		 */
		notes: string = "";
		/**
		 * Indicates whether this step requires a signature.
		 */
		signature: boolean = false;
		/**
		 * The name of the person who signed the step's completion.
		 *  <override max-length="100" />
		 */
		signatory: string = "";
	}