

	/// <summary>
	/// Driving directions and details like duration and distance.
	/// </summary>
	export class DispatchDirection {
		/// <summary>
		/// The total distance of these directions (including sub-directions if applicable).
		/// </summary>
		public distance: double = NaN;
		/// <summary>
		/// The total duration of these directions (including sub-directions if applicable).
		/// </summary>
		public duration?: TimeSpan;
		/// <summary>
		/// Text hint for the driver for the action to perform.
		/// </summary>
		public instructions: string = "";
		/// <summary>
		/// A <format id="polyline">route path</format> to display on a map.
		/// </summary>
		/// <override type="System.String" format="polyline" />
		public path: LatLng[] = [];
		/// <summary>
		/// For complex routes, the sub-directions provide a breakdown or additional details.
		/// </summary>
		public directions: DispatchDirection[] = [];
		/// <summary>
		/// Unique identifier of the <see cref="DispatchJob"/> or <see cref="DispatchTask"/>.
		/// </summary>
		public job: ulong = NaN;
		/// <summary>
		/// The <see cref="DispatchStep.id"/>, if this direction is for <see cref="DispatchJob"/>s.
		/// </summary>
		public step: ulong = NaN;
	}