import { BaseComponent } from "../API/BaseComponent";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { INamed } from "../API/Interfaces/INamed";
import { SearchPattern } from "../API/SearchPattern";
import { JsonObject, byte, ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { BehaviourLog } from "./BehaviourLog";
import { BehaviourParameter } from "./BehaviourParameter";
import { BehaviourScript } from "./BehaviourScript";
/**
 * The applied behaviour which includes all parameters and targets specific assets.
*/
export declare class Behaviour extends BaseComponent implements IIdUlong, INamed, IBelongCompany {
    /**
     * Unique identifier of this behaviour.
     */
    id: ulong;
    /**
     * The company to which this behaviour belongs.
     * {@link Company.id}
     */
    companyId: ulong;
    /**
     * The {@link Company} to which this behaviour belongs.
     */
    get company(): Company;
    /**
     * The script which this behaviour implements.
     * {@link BehaviourScript.id}
     */
    scriptId: ulong;
    /**
     * The script which this behaviour implements.
     * {@link BehaviourScript.id}
     */
    get script(): BehaviourScript;
    /**
     * The name of this behaviour.
     */
    name: string;
    /**
     * Notes.
     */
    notes: string;
    /**
     * The priority flag allows you to define an execution order for all behaviours for a provider.
     */
    priority: byte;
    /**
     * The search pattern used to target the assets which will embed this behaviour in their execution context.
     */
    targets: SearchPattern[] | null;
    /**
     * A search pattern used to filter the providers which can implement this behaviour.
     */
    filters: SearchPattern[] | null;
    /**
     * The list of defined variable name/value pairs for the script requires.
     */
    parameters: Map<string, BehaviourParameter>;
    constructor(json?: JsonObject);
    toJSON(): {
        id: number | null;
        v: number[];
        company: number | null;
        script: number | null;
        name: string;
        notes: string;
        targets: string | null;
        filters: string | null;
        priority: number;
        parameters: JsonObject;
    };
    fromJSON(json: JsonObject, force?: boolean): boolean;
    /**
     * The {@link id} is the key.
     */
    getKey(): number;
    /**
     * Gets the list of {@link BehaviourLog}s related to this behaviour.
     * @returns An array of {@link BehaviourLog} objects.
     */
    getBehaviourLogs(): BehaviourLog[];
}
//# sourceMappingURL=Behaviour.d.ts.map