import { BaseComponent } from "../API/BaseComponent";
import { DATE, ID, IS_AN, JSON_NUMBER } from "../API/Functions";
import { LatLngBounds } from "../API/Geography/LatLngBounds";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { INamed } from "../API/Interfaces/INamed";
import { Timezone } from "../API/Timezone";
import { TIMEZONE_FIND } from "../API/Timezones";
import { JsonObject, byte, codified, datetime, email, int, nothing, ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { COMPANIES, REPORT_SCHEDULES, REPORT_TEMPLATES } from "../storage";
import { ReportOptions } from './ReportOptions';
import { ReportSchedule } from "./ReportSchedule";
import { ReportScorecard } from './ReportScorecard';
import { ReportStatus } from './ReportStatus';
import { ReportTemplate } from "./ReportTemplate";
import { ReportTotal } from './ReportTotal';
import { ReportType } from './ReportType';

/**
 * Report results
 */
export class ReportResult
	extends BaseComponent
	implements IIdUlong, INamed, IBelongCompany {
	/**
	 * Unique identifier.
	 */
	id: ulong = NaN;
	/**
	 * The company to which this report belongs.
	 * {@link Company.id}
	 */
	companyId: ulong = NaN;
	/**
	 * The {@link Company} to which this report belongs.
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
	options: ReportOptions = new ReportOptions;
	/**
	 * A reference to the Template used to create this result.  This field is optional because templates are not necessarily required; they just make life a lot easier.
	 * {@link ReportTemplate.id}
	 */
	templateId: ulong = NaN;
	/**
	 * A reference to the Template used to create this result.  This field is optional because templates are not necessarily required; they just make life a lot easier.
	 * {@link ReportTemplate.id}
	 */
	get template(): ReportTemplate { return REPORT_TEMPLATES.get(this.templateId) as ReportTemplate; }
	/**
	 * A reference to the schedule used to create this result.
	 * This field is optional as not all results are created on a schedule.
	 * {@link ReportSchedule.id}
	 */
	scheduleId: ulong = NaN;
	/**
	 * A reference to the schedule used to create this result.
	 * This field is optional as not all results are created on a schedule.
	 * {@link ReportSchedule.id}
	 */
	get schedule(): ReportSchedule { return REPORT_SCHEDULES.get(this.scheduleId) as ReportSchedule; }
	/**
	 * Preserve these results for later review.  Results are regularly culled from the system.
	 */
	archive: boolean = false;
	/**
	 * The timezone code used to adjust dates/times used in processing and saving this report.
	 * {@link Timezone.code}
	 */
	timezone: Timezone = Timezone.utc;
	/**
	 * The login of the user that ran this report.
	 * {@link User.login}
	 */
	runBy: email = "";
	/**
	 * The date/time this result was requested.
	 */
	created: Date = DATE();
	/**
	 * The date/time this result was finished processing.
	 */
	completed: Date = DATE();
	/**
	 * The processing status of this report.
	 */
	status: ReportStatus = ReportStatus.created;
	/**
	 * The progress in processing/saving this result is a number between 0 and 100.
	 */
	progress: byte = NaN;
	/**
	 * After processing, the boundary of the results are given so that a map can be focused on that area.
	 */
	bounds: LatLngBounds | null = null;
	/**
	 * When the report runs, a list of targeted assets is calculated based on the ReportOption's targeting expression.
	 */
	targeted: ulong[] = [];
	/**
	 * When the report runs, a list of filtered places is calculated based on the ReportOption's place filtering expression.
	 */
	filtered: ulong[] = [];
	/**
	 * After processing, the report totals the values from all summary instances for a quick overview of the kind of results generated.
	 */
	totals: ReportTotal[] = [];
	/**
	 * Scorecards for all the targeted assets based on the scorecard rules.
	 */
	scorecards: ReportScorecard[] = [];
	/**
	 * A field which contains report error details if the {@link status} is {@link ReportStatus.failed}.
	 * {@link ReportStatus}
	 */
	error: string = "";

	constructor(json?: JsonObject | nothing) {
		super();
		if (json) this.fromJSON(json);
	}
	override toJSON() {
		return {
			"id": JSON_NUMBER(this.id),
			"company": JSON_NUMBER(this.companyId),
			"kind": ReportType[this.kind],
			"name": this.name || "",
			"notes": this.notes || "",
			"options": this.options.toJSON(),
			"template": JSON_NUMBER(this.templateId),
			"schedule": JSON_NUMBER(this.scheduleId),
			"archive": !!this.archive,
			"timezone": this.timezone?.code ?? "",
			"runBy": this.runBy || "",
			"created": this.created.toJSON(),
			"completed": this.completed.toJSON(),
			"status": ReportStatus[this.status] || ReportStatus.created,
			"progress": this.progress || 0,
			"bounds": this.bounds?.toJSON() ?? null,
			"targeted": this.targeted || null,
			"filtered": this.filtered || null,
			"totals": this.totals || null,
			"scorecards": this.scorecards || null,
			"error": this.error || "",
		};
	}
	override fromJSON(json: JsonObject, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"] as int[]) || !!(force && json);
		if (update) {
			if (!IS_AN(this.id)) this.id = ID(json["id"]);
			this.companyId = ID(json["company"]);
			this.kind = ReportType[json["kind"] as ReportType];
			this.name = json["name"] as string || "";
			this.notes = json["notes"] as string || "";
			this.options = ReportOptions.fromJSON(json["options"] as JsonObject);
			this.templateId = ID(json["template"]);
			this.scheduleId = ID(json["schedule"]);
			this.archive = !!json["archive"];
			this.timezone = TIMEZONE_FIND(json["timezone"] as codified) || Timezone.utc;
			this.runBy = json["runBy"] as string || "";
			this.created = DATE(json["created"] as datetime);
			this.completed = DATE(json["completed"] as datetime);
			this.status = ReportStatus[json["status"] as ReportStatus] || ReportStatus.created;
			this.progress = ID(json["progress"]);
			this.bounds = LatLngBounds.fromJSON(json["bounds"] as JsonObject);
			this.targeted = (json["targeted"] as ulong[] || []).map(ID);
			this.filtered = (json["filtered"] as ulong[] || []).map(ID);
			this.totals = (json["totals"] as JsonObject[] || []).map(ReportTotal.fromJSON);
			this.scorecards = (json["scorecards"] as JsonObject[] || []).map(ReportScorecard.fromJSON);
			this.error = json["error"] as string || "";
		}
		return update;
	}

	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey() { return this.id; }
}