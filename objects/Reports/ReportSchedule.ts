import { BaseComponent } from "../API/BaseComponent";
import { ID, IS_AN } from "../API/Functions";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IEnabled } from "../API/Interfaces/IEnabled";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { INamed } from "../API/Interfaces/INamed";
import { email, ulong, JsonObject, int } from "../API/Types";
import { Company } from "../Companies/Company";
import { COMPANIES, REPORT_TEMPLATES } from "../storage";
import { ReportNotifications } from "./ReportNotifications";
import { ReportOptions } from "./ReportOptions";
import { ReportRecurrence } from "./ReportRecurrence";
import { ReportTemplate } from "./ReportTemplate";

/**
 * Determines when and how often a report schedule runs automatically.
 */
export class ReportSchedule
	extends BaseComponent
	implements IIdUlong, INamed, IEnabled, IBelongCompany {
	/**
	 * Unique identifier
	 */
	id: ulong = NaN;
	/**
	 * The company to which this schedule belongs.
	 * {@link Company.id}
	 */
	companyId: ulong = NaN;
	/**
	 * The {@link Company} to which this schedule belongs.
	 */
	get company(): Company { return COMPANIES.get(this.companyId) as Company; }
	/**
	 * A reference to the Template used to create this result.
	 * {@link ReportTemplate.id}
	 */
	templateId: ulong = NaN;
	/**
	 * A reference to the Template used to create this result.
	 * {@link ReportTemplate.id}
	 */
	get template(): ReportTemplate { return REPORT_TEMPLATES.get(this.templateId) as ReportTemplate; }
	/**
	 * Login of the user who has ownership of this report schedule.
	 * {@link User.login}
	 */
	owner: email = "";
	/**
	 * Name of this report.
	 */
	name: string = "";
	/**
	 * Notes about this report.
	 */
	notes: string = "";
	/**
	 * Indicates whether this schedule is allowed to run.
	 */
	enabled: boolean = false;
	/**
	 * The recurring schedule to generate report results.
	 */
	repetition: ReportRecurrence | null = null;
	/**
	 * Specified parameters for the report logic, targeted Assets, and filtering Places.
	 */
	options: ReportOptions | null = null;
	/**
	 * A list of users and a targeting expression for assets which receive report results notifications.
	 */
	notify: ReportNotifications | null = null;

	override toJSON() {
		return {
			"id": this.id || null,
			"company": this.companyId || null,
			"template": this.templateId || null,
			"v": [...this.v],
			"name": this.name || "",
			"notes": this.notes || "",
			"owner": this.owner || "",
			"enabled": !!this.enabled,
			"repetition": this.repetition?.toJSON() ?? null,
			"options": this.options?.toJSON() ?? null,
			"notify": this.notify?.toJSON() ?? null,
		};
	}
	override fromJSON(json: JsonObject, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"] as int[]) || !!(force && json);
		if (update) {
			if (!IS_AN(this.id)) this.id = ID(json["id"]);
			this.companyId = ID(json["company"]);
			this.templateId = ID(json["template"]);
			this.name = json["name"] as string || "";
			this.notes = json["notes"] as string || "";
			this.owner = json["owner"] as string || "";
			this.enabled = !!json["enabled"];
			this.repetition = json["repetition"]
				? ReportRecurrence.fromJSON(json["repetition"] as JsonObject)
				: null;
			this.options = json["options"]
				? ReportOptions.fromJSON(json["options"] as JsonObject)
				: null;
			this.notify = json["notify"]
				? ReportNotifications.fromJSON(json["notify"] as JsonObject)
				: null;
		}
		return update;
	}

	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey() { return this.id; }
}