

	/// <summary>
	/// A container for the requested <see cref="documents"/>.
	/// </summary>
	export abstract class RespDocumentList extends Response {
		/// <summary>
		/// The list of requested <see cref="Document"/>s.
		/// </summary>
		public documents: Document[] = [];
	}

	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	export class RespDocumentListByCompany extends RespDocumentList {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: RespId;
	}