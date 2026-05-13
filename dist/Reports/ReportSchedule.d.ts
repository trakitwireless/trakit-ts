import { BaseComponent } from "../API/BaseComponent";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IEnabled } from "../API/Interfaces/IEnabled";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { INamed } from "../API/Interfaces/INamed";
import { email, ulong, JsonObject, nothing } from "../API/Types";
import { Company } from "../Companies/Company";
import { ReportNotifications } from "./ReportNotifications";
import { ReportOptions } from "./ReportOptions";
import { ReportRecurrence } from "./ReportRecurrence";
import { ReportTemplate } from "./ReportTemplate";
import { ReportResult } from "./ReportResult";
/**
 * Determines when and how often a report schedule runs automatically.
 */
export declare class ReportSchedule extends BaseComponent implements IIdUlong, INamed, IEnabled, IBelongCompany {
    /**
     * Unique identifier
     */
    id: ulong;
    /**
     * The company to which this schedule belongs.
     * {@link Company.id}
     */
    companyId: ulong;
    /**
     * The {@link Company} to which this schedule belongs.
     */
    get company(): Company;
    /**
     * A reference to the Template used to create this result.
     * {@link ReportTemplate.id}
     */
    templateId: ulong;
    /**
     * A reference to the Template used to create this result.
     * {@link ReportTemplate.id}
     */
    get template(): ReportTemplate;
    /**
     * Login of the user who has ownership of this report schedule.
     * {@link User.login}
     */
    owner: email;
    /**
     * Name of this report.
     */
    name: string;
    /**
     * Notes about this report.
     */
    notes: string;
    /**
     * Indicates whether this schedule is allowed to run.
     */
    enabled: boolean;
    /**
     * The recurring schedule to generate report results.
     */
    repetition: ReportRecurrence | null;
    /**
     * Specified parameters for the report logic, targeted Assets, and filtering Places.
     */
    options: ReportOptions | null;
    /**
     * A list of users and a targeting expression for assets which receive report results notifications.
     */
    notify: ReportNotifications | null;
    constructor(json?: JsonObject | nothing);
    toJSON(): {
        id: number | null;
        company: number | null;
        template: number | null;
        v: number[];
        name: string;
        notes: string;
        owner: string;
        enabled: boolean;
        repetition: {
            kind: import("./ReportRecurrenceType").ReportRecurrenceType;
            weekdays: string;
            weekday: number | null;
            start: string | null;
            end: string | null;
            iterations: number | null;
            lastResult: number | null;
            nextStartDate: string | null;
            nextEndDate: string | null;
            lastStartDate: string | null;
            lastEndDate: string | null;
        } | null;
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
        } | null;
        notify: {
            users: string[];
            assets: string | null;
        } | null;
    };
    fromJSON(json: JsonObject, force?: boolean): boolean;
    /**
     * The {@link id} is the key.
     */
    getKey(): number;
    getReportResults(): ReportResult[];
}
//# sourceMappingURL=ReportSchedule.d.ts.map