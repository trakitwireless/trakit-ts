


	/// <summary>
	/// A container for the requested <see cref="formTemplates"/>.
	/// </summary>
	export abstract class RespFormTemplateList extends Response {
		/// <summary>
		/// The list of requested <see cref="FormTemplate"/>s.
		/// </summary>
		public formTemplates: FormTemplate[] = [];
	}

	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	export class RespFormTemplateListByCompany extends RespFormTemplateList {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: RespId;
	}