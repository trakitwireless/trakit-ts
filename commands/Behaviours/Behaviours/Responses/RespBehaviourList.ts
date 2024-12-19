

	/// <summary>
	/// A container for the requested <see cref="behaviours"/>.
	/// </summary>
	export abstract class RespBehaviourList extends Response {
		/// <summary>
		/// The list of requested <see cref="Behaviour"/>s.
		/// </summary>
		public behaviours: Behaviour[] = [];
	}

	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	export class RespBehaviourListByCompany extends RespBehaviourList {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: RespId;
	}