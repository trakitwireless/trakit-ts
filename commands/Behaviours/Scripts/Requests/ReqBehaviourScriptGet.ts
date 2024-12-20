

	/// <summary>
	/// Gets details of the specified <see cref="BehaviourScript"/>.
	/// </summary>
	export class ReqBehaviourScriptGet extends ReqBehaviourScript implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return a deleted <see cref="BehaviourScript"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
	}