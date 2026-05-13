import { BaseComponent } from "../../API/BaseComponent";
import { IBelongCompany } from "../../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../../API/Interfaces/IIdUlong";
import { INamed } from "../../API/Interfaces/INamed";
import { SearchPattern } from "../../API/SearchPattern";
import { JsonObject, nothing, ulong } from "../../API/Types";
import { Company } from "../../Companies/Company";
import { ProviderScript } from "./ProviderScript";
/**
 * The configured script loaded onto the provider over-the-air to control it's reporting schedule and behaviour.
 */
export declare class ProviderConfig extends BaseComponent implements IIdUlong, INamed, IBelongCompany {
    /**
     * Unique identifier of this configuration.
     */
    id: ulong;
    /**
     * The company to which this configuration belongs.
     * {@link Company.id}
     */
    companyId: ulong;
    /**
     * The {@link Company} to which this configuration belongs.
     */
    get company(): Company;
    /**
     * The script which this configuration implements.
     * {@link ProviderScript.id}
     */
    scriptId: ulong;
    /**
     * The {@link ProviderScript} which this configuration implements.
     */
    get script(): ProviderScript;
    set script(value: ProviderScript);
    /**
     * The nickname given to this configuration
     */
    name: string;
    /**
     * Simple details about how the providers are expected to behave.
     */
    notes: string;
    /**
     * The list of defined variable name/value pairs that the script requires.
     */
    parameters: Map<string, string>;
    /**
     * A search pattern used to filter which Places' geometry are used as geofences.
     * Use null to disable.
     * Use "*" to match all the Places the Provider's Asset can match.
     * Or use "#123456" or "label:term" like other Place search patterns.
     */
    geofences: SearchPattern[] | null;
    constructor(json?: JsonObject | nothing);
    toJSON(): {
        id: number | null;
        v: number[];
        company: number | null;
        script: number | null;
        name: string;
        notes: string;
        parameters: JsonObject;
        geofences: string | null;
    };
    fromJSON(json: JsonObject, force?: boolean): boolean;
    /**
     * The {@link id} is the key.
     */
    getKey(): number;
}
//# sourceMappingURL=ProviderConfig.d.ts.map