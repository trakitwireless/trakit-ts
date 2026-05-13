import { BaseComponent } from "../API/BaseComponent";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { INamed } from "../API/Interfaces/INamed";
import { IVisual } from "../API/Interfaces/IVisual";
import { JsonObject, codified, colour, nothing, ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { ReportOptions } from "./ReportOptions";
import { ReportResult } from "./ReportResult";
import { ReportSchedule } from "./ReportSchedule";
import { ReportType } from "./ReportType";
/**
 * A partially created report used to quickly build results.
 */
export declare class ReportTemplate extends BaseComponent implements IIdUlong, INamed, IBelongCompany, IVisual {
    /**
     * Unique identifier
     */
    id: ulong;
    /**
     * The company to which this template belongs.
     * {@link Company.id}
     */
    companyId: ulong;
    /**
     * The {@link Company} to which this template belongs.
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
    options: ReportOptions | null;
    /**
     * The fill/background colour of the icon.
     */
    fill: colour;
    /**
     * Outline and graphic colour.
     */
    stroke: colour;
    /**
     * The name of the symbol for this report.
     */
    graphic: codified;
    constructor(json?: JsonObject | nothing);
    toJSON(): {
        id: number | null;
        company: number | null;
        v: number[];
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
        } | null;
        fill: string;
        stroke: string;
        graphic: string;
    };
    fromJSON(json: JsonObject, force?: boolean): boolean;
    /**
     * The {@link id} is the key.
     */
    getKey(): number;
    /**
     * Retrieves the {@link ReportResult}s using this template.
     * @returns
     */
    getReportResults(): ReportResult[];
    /**
     * Retrieves the {@link ReportSchedule}s for this template.
     * @returns
     */
    getReportSchedules(): ReportSchedule[];
}
//# sourceMappingURL=ReportTemplate.d.ts.map