import { BaseComponent } from "../API/BaseComponent";
import { ID, IS_AN } from "../API/Functions";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { INamed } from "../API/Interfaces/INamed";
import { IVisual } from "../API/Interfaces/IVisual";
import { codified, colour, ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { COMPANIES } from "../Storage";
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
	 * The company to which this template belongs.
	 * {@link Company.id}
	 */
	get company(): Company { return COMPANIES.get(this.companyId) as Company; }
	/**
	 * Refers to the type of logic used by this report.
	 */
	kind: ReportType = ReportType.full;
	/**
	 * Name of this report.
	 *  <override max-length="100" />
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

	override toJSON(): any {
		return {
			"id": this.id || null,
			"company": this.companyId || null,
			"v": this.v,
			"name": this.name || "",
			"notes": this.notes || "",
			"options": this.options?.toJSON() ?? null,
			"fill": this.fill || "",
			"stroke": this.stroke || "",
			"graphic": this.graphic || "",
		};
	}
	override fromJSON(json: any, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"]) || !!(force && json);
		if (update) {
			if (!IS_AN(this.id)) this.id = ID(json["id"]);
			this.companyId = ID(json["company"]);
			this.name = json["name"] || "";
			this.notes = json["notes"] || "";
			this.options = json["options"]
				? ReportOptions.fromJSON(json["options"])
				: null;
			this.fill = json["fill"] || "";
			this.stroke = json["stroke"] || "";
			this.graphic = json["graphic"] || "";
		}
		return update;
	}

	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey(): string { return this.id.toString(); }
}