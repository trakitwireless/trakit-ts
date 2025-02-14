import { BaseComponent } from "../API/BaseComponent";
import { DATE } from "../API/Functions";
import { LatLngBounds } from "../API/Geography/LatLngBounds";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { INamed } from "../API/Interfaces/INamed";
import { byte, ulong } from "../API/Types";
import { ReportStatus } from './ReportStatus';
import { ReportDataTotal } from './ReportDataTotal';
import { ReportType } from './ReportType';
import { ReportOptions } from './ReportOptions';
import { ReportScorecard } from './ReportScorecard';
import { Company } from "../Companies/Company";
import { COMPANIES, REPORT_SCHEDULES, REPORT_TEMPLATES } from "../Storage";
import { Timezone } from "../API/Timezone";
import { ReportSchedule } from "./ReportSchedule";
import { ReportTemplate } from "./ReportTemplate";

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
	 * The company to which this report belongs.
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
	options: ReportOptions = ReportOptions.fromJSON({});
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
	 *  <override max-length="254" format="email" />
	 */
	runBy: string = "";
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
	totals: ReportDataTotal[] = [];
	/**
	 * Scorecards for all the targeted assets based on the scorecard rules.
	 */
	scorecards: ReportScorecard[] = [];
	/**
	 * A field which contains report error details if the {@link status} is {@link ReportStatus.failed}.
	 * {@link ReportStatus}
	 *  <override max-length="250" />
	 */
	error: string = "";

	override toJSON() {
		throw new Error("Method not implemented.");
	}
	override fromJSON(json: any, force?: boolean): boolean {
		throw new Error("Method not implemented.");
	}

	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey(): string { return this.id.toString(); }
}