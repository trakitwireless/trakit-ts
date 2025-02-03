


	/**
	 * A container for the requested {@link formTemplates}.
	 */
	export abstract class RespFormTemplateList extends Response {
		/**
		 * The list of requested {@link FormTemplate}s.
		 */
		formTemplates: FormTemplate[] = [];
	}

	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class RespFormTemplateListByCompany extends RespFormTemplateList {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: RespId;
	}