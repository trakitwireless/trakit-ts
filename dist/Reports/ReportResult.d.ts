import { BaseComponent } from "../API/BaseComponent";
import { LatLngBounds } from "../API/Geography/LatLngBounds";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { INamed } from "../API/Interfaces/INamed";
import { Timezone } from "../API/Timezone";
import { JsonObject, byte, email, nothing, ulong } from "../API/Types";
import { Company } from "../Companies/Company";
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
export declare class ReportResult extends BaseComponent implements IIdUlong, INamed, IBelongCompany {
    /**
     * Unique identifier.
     */
    id: ulong;
    /**
     * The company to which this report belongs.
     * {@link Company.id}
     */
    companyId: ulong;
    /**
     * The {@link Company} to which this report belongs.
     */
    get company(): Company;
    /**
     * Refers to the type of logic used by this report.
     */
    kind: ReportType;
    /**
     * Name of this report.
     */
    name: string;
    /**
     * Notes about this report.
     */
    notes: string;
    /**
     * Specified parameters for the report logic, targeted Assets, and filtering Places.
     */
    options: ReportOptions;
    /**
     * A reference to the Template used to create this result.  This field is optional because templates are not necessarily required; they just make life a lot easier.
     * {@link ReportTemplate.id}
     */
    templateId: ulong;
    /**
     * A reference to the Template used to create this result.  This field is optional because templates are not necessarily required; they just make life a lot easier.
     * {@link ReportTemplate.id}
     */
    get template(): ReportTemplate;
    /**
     * A reference to the schedule used to create this result.
     * This field is optional as not all results are created on a schedule.
     * {@link ReportSchedule.id}
     */
    scheduleId: ulong;
    /**
     * A reference to the schedule used to create this result.
     * This field is optional as not all results are created on a schedule.
     * {@link ReportSchedule.id}
     */
    get schedule(): ReportSchedule;
    /**
     * Preserve these results for later review.  Results are regularly culled from the system.
     */
    archive: boolean;
    /**
     * The timezone code used to adjust dates/times used in processing and saving this report.
     * {@link Timezone.code}
     */
    timezone: Timezone;
    /**
     * The login of the user that ran this report.
     * {@link User.login}
     */
    runBy: email;
    /**
     * The date/time this result was requested.
     */
    created: Date;
    /**
     * The date/time this result was finished processing.
     */
    completed: Date;
    /**
     * The processing status of this report.
     */
    status: ReportStatus;
    /**
     * The progress in processing/saving this result is a number between 0 and 100.
     */
    progress: byte;
    /**
     * After processing, the boundary of the results are given so that a map can be focused on that area.
     */
    bounds: LatLngBounds | null;
    /**
     * When the report runs, a list of targeted assets is calculated based on the ReportOption's targeting expression.
     */
    targeted: ulong[];
    /**
     * When the report runs, a list of filtered places is calculated based on the ReportOption's place filtering expression.
     */
    filtered: ulong[];
    /**
     * After processing, the report totals the values from all summary instances for a quick overview of the kind of results generated.
     */
    totals: ReportTotal[];
    /**
     * Scorecards for all the targeted assets based on the scorecard rules.
     */
    scorecards: ReportScorecard[];
    /**
     * A field which contains report error details if the {@link status} is {@link ReportStatus.failed}.
     * {@link ReportStatus}
     */
    error: string;
    constructor(json?: JsonObject | nothing);
    toJSON(): {
        id: number | null;
        company: number | null;
        kind: ReportType;
        name: string;
        notes: string;
        options: {
            parameters: any[];
            targets: string | null;
            filtering: import("./ReportFilterMode").ReportFilterMode;
            places: string | null;
            regions: string[];
            scorecardRules: {
                baseScore: number | null;
                parameters: any[];
            } | null;
        };
        template: number | null;
        schedule: number | null;
        archive: boolean;
        timezone: string;
        runBy: string;
        created: string | null;
        completed: string | null;
        status: ReportStatus;
        progress: number;
        bounds: (import("..").ILatLngBounds & JsonObject) | null;
        targeted: number[];
        filtered: number[];
        totals: ReportTotal[];
        scorecards: ReportScorecard[];
        error: string;
    };
    fromJSON(json: JsonObject, force?: boolean): boolean;
    /**
     * The {@link id} is the key.
     */
    getKey(): number;
}
//# sourceMappingURL=ReportResult.d.ts.map