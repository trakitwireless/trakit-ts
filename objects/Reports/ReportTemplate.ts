import { BaseComponent } from "../API/BaseComponent";
import { ID, IS_AN } from "../API/Functions";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { INamed } from "../API/Interfaces/INamed";
import { IVisual } from "../API/Interfaces/IVisual";
import { JsonObject, codified, colour, int, ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { COMPANIES } from "../storage";
import { ReportOptions } from "./ReportOptions";
import { ReportType } from "./ReportType";

/**
 * A partially created report used to quickly build results.
 */
export class ReportTemplate
	extends BaseComponent
	implements IIdUlong, INamed, IBelongCompany, IVisual {
	/**
	 * Unique identifier
	 */
	id: ulong = NaN;
	/**
	 * The company to which this template belongs.
	 * {@link Company.id}
	 */
	companyId: ulong = NaN;
	/**
	 * The {@link Company} to which this template belongs.
	 */
	get company(): Company { return COMPANIES.get(this.companyId) as Company; }
	/**
	 * Refers to the type of logic used by this report.
	 */
	kind: ReportType = ReportType.full;
	/**
	 * Name of this report.
	 */
	name: string = "";
	/**
	 * Notes about this report.
	 */
	notes: string = "";
	/**
	 * Specified parameters for the report logic, targeted Assets, and filtering Places.
	 */
	options: ReportOptions | null = null;

	/**
	 * The fill/background colour of the icon.
	 */
	fill: colour = "";
	/**
	 * Outline and graphic colour.
	 */
	stroke: colour = "";
	/**
	 * The name of the symbol for this report.
	 */
	graphic: codified = "";

	override toJSON() {
		return {
			"id": this.id || null,
			"company": this.companyId || null,
			"v": [...this.v],
			"name": this.name || "",
			"notes": this.notes || "",
			"options": this.options?.toJSON() ?? null,
			"fill": this.fill || "",
			"stroke": this.stroke || "",
			"graphic": this.graphic || "",
		};
	}
	override fromJSON(json: JsonObject, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"] as int[]) || !!(force && json);
		if (update) {
			if (!IS_AN(this.id)) this.id = ID(json["id"]);
			this.companyId = ID(json["company"]);
			this.name = json["name"] as string || "";
			this.notes = json["notes"] as string || "";
			this.options = json["options"]
				? ReportOptions.fromJSON(json["options"] as JsonObject)
				: null;
			this.fill = json["fill"] as string || "";
			this.stroke = json["stroke"] as string || "";
			this.graphic = json["graphic"] as codified || "";
		}
		return update;
	}

	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey() { return this.id; }
}