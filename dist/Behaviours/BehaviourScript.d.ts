import { BaseComponent } from "../API/BaseComponent";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IGlobal } from "../API/Interfaces/IGlobal";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { INamed } from "../API/Interfaces/INamed";
import { IVisual } from "../API/Interfaces/IVisual";
import { SearchPattern } from "../API/SearchPattern";
import { codified, colour, JsonObject, ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { Behaviour } from "./Behaviour";
import { BehaviourLog } from "./BehaviourLog";
import { BehaviourParameter } from "./BehaviourParameter";
/**
 * Business logic run by the system to react to GPS events and device information.
 */
export declare class BehaviourScript extends BaseComponent implements IIdUlong, INamed, IBelongCompany, IGlobal, IVisual {
    /**
     * Unique identifier of this script.
     */
    id: ulong;
    /**
     * The company to which this script belongs.
     * {@link Company.id}
     */
    companyId: ulong;
    /**
     * The {@link Company} to which this script belongs.
     */
    get company(): Company;
    /**
     * The nickname given to this script.
     */
    name: string;
    /**
     * Usage notes and instructions for users on how best to setup this script.
     */
    notes: string;
    /**
     * Indicates whether this script is available to child companies.
     */
    global: boolean;
    /**
     * The source code.
     */
    source: string;
    /**
     * A list of targeting expressions.  These expressions are defaults for derived Behaviours.
     */
    filters: SearchPattern[] | null;
    /**
     * Listed parameters for the Behaviour function.
     */
    parameters: Map<string, BehaviourParameter>;
    /**
     * The background colour given to this script for easy visual identification.
     */
    fill: colour;
    /**
     * The text/graphic colour given to this script for easy visual identification.
     */
    stroke: colour;
    /**
     * The codified graphic name given to this script for easy visual identification.
     */
    graphic: codified;
    constructor(json?: JsonObject);
    toJSON(): {
        id: number | null;
        v: number[];
        company: number | null;
        name: string;
        notes: string;
        global: boolean;
        source: string;
        filters: string | null;
        parameters: JsonObject;
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
     * Gets the list of {@link Behaviour}s related to this script.
     * @returns An array of {@link Behaviour} objects.
     */
    getBehaviours(): Behaviour[];
    /**
     * Gets the list of {@link BehaviourLog}s related to this script.
     * @returns An array of {@link BehaviourLog} objects.
     */
    getBehaviourLogs(): BehaviourLog[];
}
//# sourceMappingURL=BehaviourScript.d.ts.map