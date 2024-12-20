

	/// <summary>
	/// A container for the requested <see cref="machines"/>.
	/// </summary>
	export abstract class RespMachineList extends Response {
		/// <summary>
		/// The list of requested <see cref="Machine"/>s.
		/// </summary>
		public machines: Machine[] = [];
	}

	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	export class RespMachineListByCompany extends RespMachineList {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: RespId;
	}