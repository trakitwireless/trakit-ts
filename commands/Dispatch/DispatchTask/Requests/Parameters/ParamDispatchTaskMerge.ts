

	/// <summary>
	/// Parameters used to create a new, or update an existing <see cref="DispatchTask"/>.
	/// </summary>
	export class ParamDispatchTaskMerge extends ParamMergeSubscribable {
		/// <summary>
		/// The unique identifier of the <see cref="DispatchTask"/> you want to update.
		/// </summary>
		public id: ulong = NaN;
		/// <summary>
		/// The identifier of the <see cref="Asset"/> assigned to this <see cref="DispatchTask"/>.
		/// </summary>
		public asset: ulong = NaN;
		/// <summary>
		/// Name for the <see cref="DispatchTask"/>.
		/// </summary>
		public name: string = "";
		/// <summary>
		/// Notes completed by the driver about the <see cref="DispatchTask"/>.
		/// Such as service notes, damaged goods upon pick-up, etc...
		/// </summary>
		public notes: string = "";
		/// <summary>
		/// A custom field used to refer this <see cref="DispatchTask"/> an external system. Examples are a work order, pick-up, waybill, etc...
		/// If value is null, the field is removed from the <see cref="DispatchTask"/>.
		/// If a new value or null is not provided for a current attribute, no change is made.
		/// </summary>
		public references: Map<string, string>;
		/// <summary>
		/// The street address of this <see cref="DispatchTask"/>.
		/// Condition: You must provide a <c>place</c>, a <c>latlng</c>, or an <c>address</c>.
		/// Note: If you ommit the <c>address</c>, the geocoder attempts to populate the field, but will not return an error if it fails.
		/// </summary>
		public address: string = "";
		/// <summary>
		/// An optional identifier of a <see cref="Place"/> for this <see cref="DispatchTask"/>.  		/// <summary>
		/// Instructions for the driver to help them complete the <see cref="DispatchTask"/>.
		/// Such as which door to use, a buzz code to enter the facility, etc...
		/// </summary>
		public instructions: string = "";
		/// <summary>
		/// A list of <see cref="Document"/> identifiers to attach to this <see cref="DispatchTask"/> for both driver and dispatcher review.
		/// </summary>
		public attachments: ulong[] = [];
		/// <summary>
		/// The lat/long coordinates of the street address.
		/// Condition: You must provide a <c>place</c>, a <c>latlng</c>, or an <c>address</c>.
		/// Note: If you invoke the geocoder, the <c>address</c> is also replaced with the geocoded value.
		/// </summary>
		public latlng: LatLng;
		/// <summary>
		/// Estimated time of arrival.
		/// </summary>
		public eta: Date = DATE();
		/// <summary>
		/// The duration on site, or how much time is expected to complete the <see cref="DispatchTask"/>.  Used to help calculate other <see cref="DispatchTask"/> ETAs when routing is performed.
		/// </summary>
		public duration?: TimeSpan;
		/// <summary>
		/// <see cref="DispatchTask"/>s have a lifetime and each status represents a <see cref="DispatchTask"/>'s progress through it's life.
		/// </summary>
		public status?: DispatchTaskStatus;
	}