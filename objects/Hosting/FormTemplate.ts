import { ARRAY_TO_JSON } from "../API/Arrays";
import { BaseComponent } from "../API/BaseComponent";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { ILabelled } from "../API/Interfaces/ILabelled";
import { INamed } from "../API/Interfaces/INamed";
import { IVisual } from "../API/Interfaces/IVisual";
import { codified, colour, ulong } from "../API/Types";
import { Asset } from "../Assets/Asset";
import { Company } from "../Companies/Company";
import { COMPANIES } from "../Storage";
import { FormFieldAttachments } from './Fields/FormFieldAttachments';
import { FormFieldBoolean } from './Fields/FormFieldBoolean';
import { FormFieldChoice } from './Fields/FormFieldChoice';
import { FormFieldDate } from './Fields/FormFieldDate';
import { FormFieldNumeric } from './Fields/FormFieldNumeric';
import { FormFieldSignature } from './Fields/FormFieldSignature';
import { FormFieldText } from './Fields/FormFieldText';
import { FormFieldTime } from './Fields/FormFieldTime';
import { FormFieldTimezone } from './Fields/FormFieldTimezone';

/**
 * The full definition of a form that needs to be filled out.
 */
export class FormTemplate
	extends BaseComponent
	implements IIdUlong, INamed, IBelongCompany, ILabelled, IVisual {
	/**
	 * Unique identifier of this form.
	 */
	id: ulong = NaN;
	/**
	 * The {@link Company} to which this form belongs.
	 * {@link Company.id}
	 */
	companyId: ulong = NaN;
	/**
	 * The {@link Company} to which this form belongs.
	 * {@link Company.id}
	 */
	get company(): Company { return COMPANIES.get(this.companyId) as Company; }
	/**
	 * Name of this form.
	 *  <override max-length="100" />
	 */
	name: string = "";
	/**
	 * Notes about this form.
	 */
	notes: string = "";
	/**
	 * Codified label names used to relate forms to {@link Asset}s.
	 *  <override>
	 *  <values format="codified">
	 * {@link LabelStyle.code}
	 *  </values>
	 *  </override>
	 */
	labels: codified[] = [];
	/**
	 * The fill/background colour of the icon.
	 *  <override max-length="22" format="colour" />
	 */
	fill: colour = "";
	/**
	 * Outline and graphic colour.
	 *  <override max-length="22" format="colour" />
	 */
	stroke: colour = "";
	/**
	 * The name of the symbol for this template.
	 *  <override max-length="22" format="codified" />
	 */
	graphic: codified = "";
	/**
	 * All the user fillable fields by name.
	 */
	fields: (FormFieldText | FormFieldChoice | FormFieldBoolean | FormFieldNumeric | FormFieldDate | FormFieldTime | FormFieldSignature | FormFieldAttachments | FormFieldTimezone)[] = [];

	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey(): string { return this.id.toString(); }
	
	override toJSON(): any {
		return {
			"id": this.id,
			"company": this.companyId,
			"v": this.v,
			"name": this.name,
			"notes": this.notes,
			"labels": [...this.labels],
			"fields": this.fields.map(ARRAY_TO_JSON),
			"fill": this.fill,
			"stroke": this.stroke,
			"graphic": this.graphic,
		};
	}
	override fromJSON(json: any, force?: boolean): boolean {
		throw new Error("Method not implemented.");
	}
}