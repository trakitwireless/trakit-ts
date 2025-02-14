import { BaseComponent } from "../API/BaseComponent";
import { DATE, JSON_DATE, ID, MAP_TO_OBJECT, OBJECT_TO_MAP_KEY_ULONG } from "../API/Functions";
import { LatLng } from "../API/Geography/LatLng";
import { IBelongAsset } from "../API/Interfaces/IBelongAsset";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { ILabelled } from "../API/Interfaces/ILabelled";
import { INamed } from "../API/Interfaces/INamed";
import { codified, ulong } from "../API/Types";
import { Asset } from "../Assets/Asset";
import { Company } from "../Companies/Company";
import { ASSETS, COMPANIES, FORM_TEMPLATES } from "../Storage";
import { FormTemplate } from "./FormTemplate";

/**
 * A completed form submitted by a {@link User} or {@link Asset}.
 */
export class FormResult
	extends BaseComponent
	implements IIdUlong, INamed, IBelongCompany, IBelongAsset, ILabelled {
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
	 * The {@link FormTemplate} to which this form belongs.
	 */
	templateId: ulong = NaN;
	/**
	 * The {@link FormTemplate} to which this form belongs.
	 */
	get template(): FormTemplate { return FORM_TEMPLATES.get(this.templateId) as FormTemplate; }
	set template(value: FormTemplate) { this.templateId = value?.id ?? NaN; }
	/**
	 * The {@link Asset} to which this form belongs.
	 * {@link Asset.id}
	 */
	assetId: ulong = NaN;
	/**
	 * The {@link Asset} to which this form belongs.
	 * {@link Asset.id}
	 */
	get asset(): Asset { return ASSETS.get(this.assetId) as Asset; }
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
	 */
	labels: codified[] = [];
	/**
	 * All the values for fillable fields by index.
	 */
	fields: Map<ulong, string> = new Map;
	/**
	 * A timestamp from when this form was completed by a {@link User} or {@link Asset}.
	 */
	completed: Date = DATE();
	/**
	 * The coordinates of the {@link User} or {@link Asset} from when the form was completed.
	 */
	latlng: LatLng | null = null;
	/**
	 * Clocked-in driver name who made the update.
	 * Null if not clocked-in, or no changes have been made.
	 */
	driver: string = "";

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
			"template": this.templateId || null,
			"asset": this.assetId || null,
			"name": this.name || "",
			"notes": this.notes || "",
			"labels": [...this.labels],
			"fields": MAP_TO_OBJECT(this.fields),
			"completed": JSON_DATE(this.completed),
			"latlng": this.latlng?.toJSON() ?? null,
			"driver": this.driver || null,
		};
	}
	override fromJSON(json: any, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"]) || !!(force && json);
		if (update) {
			this.id = ID(json["id"]);
			this.companyId = ID(json["company"]);
			this.templateId = ID(json["template"]);
			this.assetId = ID(json["asset"]);
			this.name = json["name"] || "";
			this.notes = json["notes"] || "";
			this.labels = [...(json["labels"] || [])];
			this.fields = OBJECT_TO_MAP_KEY_ULONG(json["fields"] || {});
			this.completed = DATE(json["completed"]);
			this.latlng = LatLng.fromJSON(json["latlng"]);
			this.driver = json["driver"] || "";
		}
		return update;
	}
}