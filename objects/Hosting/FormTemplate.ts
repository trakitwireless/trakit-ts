import { ARRAY_TO_JSON } from "../API/Arrays";
import { BaseComponent } from "../API/BaseComponent";
import { ID, IS_AN, JSON_NUMBER } from "../API/Functions";
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
import { FormFieldBase } from "./Fields/FormFieldBase";
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
	 */
	name: string = "";
	/**
	 * Notes about this form.
	 */
	notes: string = "";
	/**
	 * Codified label names used to relate forms to {@link Asset}s.
	 */
	labels: codified[] = [];
	/**
	 * The fill/background colour of the icon.
	 */
	fill: colour = "";
	/**
	 * Outline and graphic colour.
	 */
	stroke: colour = "";
	/**
	 * The name of the symbol for this template.
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
	
	override toJSON() {
		return {
			"id": JSON_NUMBER(this.id),
			"company": JSON_NUMBER(this.companyId),
			"v": [...this.v],
			"name": this.name || "",
			"notes": this.notes || "",
			"labels": [...this.labels],
			"fields": this.fields.map(ARRAY_TO_JSON),
			"fill": this.fill || "",
			"stroke": this.stroke || "",
			"graphic": this.graphic || "",
		};
	}
	override fromJSON(json: any, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"]) || !!(force && json);
		if (update) {
			if (!IS_AN(this.id)) this.id = ID(json["id"]);
			this.companyId = ID(json["companyId"]);
			this.name = json["name"] || "";
			this.notes = json["notes"] || "";
			this.labels = [...(json["labels"] || [])];
			this.fields = (json["fields"] || []).map(FormFieldBase.fromJSON);
			this.fill = json["fill"] || "";
			this.stroke = json["stroke"] || "";
			this.graphic = json["graphic"] || "";
		}
		return update;
	}
}