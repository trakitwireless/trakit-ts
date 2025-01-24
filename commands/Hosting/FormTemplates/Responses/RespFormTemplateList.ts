


	/**
	 * A container for the requested <see cref="formTemplates"/>.
	 */
	export abstract class RespFormTemplateList extends Response {
		/**
		 * The list of requested <see cref="FormTemplate"/>s.
		 */
		formTemplates: FormTemplate[] = [];
	}

	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class RespFormTemplateListByCompany extends RespFormTemplateList {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		company: RespId;
	}