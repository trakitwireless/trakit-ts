

	/// <summary>
	/// A container for the requested <see cref="dashcams"/>.
	/// </summary>
	export abstract class RespDashcamList extends Response {
		/// <summary>
		/// The list of requested <see cref="Dashcam"/>s.
		/// </summary>
		public dashcams: Dashcam[] = [];
	}

	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	export class RespDashcamListByCompany extends RespDashcamList {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: RespId;
	}