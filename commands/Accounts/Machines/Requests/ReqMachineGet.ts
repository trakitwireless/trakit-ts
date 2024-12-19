

	/// <summary>
	/// Gets details of the specified <see cref="Machine"/>.
	/// </summary>
	export class ReqMachineGet extends ReqMachine implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return a deleted <see cref="Machine"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
	}