

	/// <summary>
	/// Parameter values for updating the <see cref="DispatchStep"/> for a <see cref="DispatchJob"/>.
	/// </summary>
	export class ParamDispatchStepMerge extends ParamMergeSubscribable {
		/// <summary>
		/// The identifier of the step.
		/// Identifiers are unique to a <see cref="DispatchJob"/>, but are not unique system-wide.
		/// </summary>
		public id: ulong = NaN;
		/// <summary>
		/// A name for the work needed to be performed.
		/// </summary>
		public name: string = "";
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
		public address: string = "";
		/// <summary>
		/// The lat/long coordinates of where the step must be <see cref="DispatchStepStatus.completed"/>.
		/// </summary>
		public latlng: LatLng;
		/// <summary>
		/// When true, will mean a signature is required to complete this <see cref="DispatchStep"/>.
		/// </summary>
		public signature: boolean = false;
	}