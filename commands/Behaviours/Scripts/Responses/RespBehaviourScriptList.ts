

	/// <summary>
	/// A container for the requested <see cref="behaviourScripts"/>.
	/// </summary>
	export abstract class RespBehaviourScriptList extends Response {
		/// <summary>
		/// The list of requested <see cref="BehaviourScript"/>s.
		/// </summary>
		public behaviourScripts: BehaviourScript[] = [];
	}

	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	export class RespBehaviourScriptListByCompany extends RespBehaviourScriptList {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: RespId;
	}