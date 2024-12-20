

	/// <summary>
	/// A container for the requested <see cref="dispatchTasks"/>.
	/// </summary>
	export abstract class RespDispatchTaskList extends Response {
		/// <summary>
		/// The list of requested <see cref="DispatchTask"/>s.
		/// </summary>
		public dispatchTasks: DispatchTask[] = [];
	}

	/// <summary>
	/// 
	/// </summary>
	export class RespDispatchTaskListByAsset extends RespDispatchTaskList implements IRespListByAsset {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public asset: RespId;
	}
	/// <summary>
	/// 
	/// </summary>
	export class RespDispatchTaskListByAssetAndRefPairs extends RespDispatchTaskListByAsset {
		/// <summary>
		/// Case-insensitive reference pairs used to match jobs.
		/// </summary>
		/// <seealso cref="DispatchTask.references"/>
		public references: Map<string, string>;
	}

	/// <summary>
	/// 
	/// </summary>
	export class RespDispatchTaskListByCompany extends RespDispatchTaskList implements IRespListByCompany {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: RespId;
	}
	/// <summary>
	/// 
	/// </summary>
	export class RespDispatchTaskListByCompanyAndRefPairs extends RespDispatchTaskListByCompany implements IRespListByReferences {
		/// <summary>
		/// Case-insensitive reference pairs used to match jobs.
		/// </summary>
		/// <seealso cref="DispatchTask.references"/>
		public references: Map<string, string>;
	}