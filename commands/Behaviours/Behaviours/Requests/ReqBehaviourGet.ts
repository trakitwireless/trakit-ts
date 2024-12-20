

	/// <summary>
	/// Gets details of the specified <see cref="Behaviour"/>.
	/// </summary>
	export class ReqBehaviourGet extends ReqBehaviour implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return a deleted <see cref="Behaviour"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
	}