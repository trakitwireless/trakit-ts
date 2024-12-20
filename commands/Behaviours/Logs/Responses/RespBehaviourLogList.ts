

	/// <summary>
	/// A container for the requested <see cref="behaviourLogs"/>.
	/// </summary>
	export abstract class RespBehaviourLogList extends Response {
		/// <summary>
		/// The list of requested <see cref="BehaviourLog"/>s.
		/// </summary>
		public behaviourLogs: BehaviourLog[] = [];
	}

	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	export class RespBehaviourLogListByCompany extends RespBehaviourLogList {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: RespId;
	}