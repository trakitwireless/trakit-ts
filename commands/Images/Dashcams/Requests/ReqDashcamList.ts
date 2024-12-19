

	/// <summary>
	/// Gets details of the specified <see cref="dashcam"/>.
	/// </summary>
	export abstract class ReqDashcamList extends Request implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return  deleted <see cref="Dashcam"/>s.
		/// </summary>
		public includeDeleted: boolean = false;
	}
	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	export class ReqDashcamListByCompany extends ReqDashcamList implements IReqListByCompany {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: ParamId;
	}