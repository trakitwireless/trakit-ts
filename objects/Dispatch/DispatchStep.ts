




	/// <summary>
	/// A portion of work for a <see cref="DispatchJob"/>.
	/// </summary>
	export class DispatchStep implements IIdUlong implements INamed {
		/// <summary>
		/// Identifier for this <see cref="DispatchStep"/>.
		/// This value is unique per <see cref="DispatchJob"/>, but is not unique system-wide.
		/// </summary>
		public id: ulong = NaN;
		/// <summary>
		/// A name for the work needed to be performed.
		/// </summary>
		/// <override max-length="100" />
		public name: string = "";
		/// <summary>
		/// The most recently updated state for this step.
		/// </summary>
		public get status(): DispatchStepStatus { return this.states.OrderByDescending(p => p.Value.updated).FirstOrDefault().Key; }
		/// <summary>
		/// The progress of this step.
		/// </summary>
		public states: Map<DispatchStepStatus, DispatchStepState>;
		/// <summary>
		/// The optional estimated time of arrival for the asset.
		/// </summary>
		public eta: Date = DATE();
		/// <summary>
		/// The optional expected duration of the work for this step.
		/// </summary>
		public duration?: TimeSpan;
		/// <summary>
		/// An optional place which can be used as a template instead of providing lat/long coordinates and a street address.
		/// </summary>
		/// <seealso cref="Place.id" />
		public place: ulong = NaN;
		/// <summary>
		/// The street address of where the step must be completed.
		/// </summary>
		/// <override max-length="500" />
		public address: string = "";
		/// <summary>
		/// The lat/long coordinates of where the step must be <see cref="DispatchStepStatus.completed"/>.
		/// </summary>
		public latlng: LatLng;
		/// <summary>
		/// Notes about the status of the work filled in by field-employee.
		/// </summary>
		public notes: string = "";
		/// <summary>
		/// Indicates whether this step requires a signature.
		/// </summary>
		public signature: boolean = false;
		/// <summary>
		/// The name of the person who signed the step's completion.
		/// </summary>
		/// <override max-length="100" />
		public signatory: string = "";
	}