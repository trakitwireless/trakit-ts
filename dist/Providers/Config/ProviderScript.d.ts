import { BaseComponent } from "../../API/BaseComponent";
import { IBelongCompany } from "../../API/Interfaces/IBelongCompany";
import { IGlobal } from "../../API/Interfaces/IGlobal";
import { IIdUlong } from "../../API/Interfaces/IIdUlong";
import { INamed } from "../../API/Interfaces/INamed";
import { IVisual } from "../../API/Interfaces/IVisual";
import { JsonObject, codified, colour, nothing, ulong } from "../../API/Types";
import { Company } from "../../Companies/Company";
import { ProviderType } from "../ProviderType";
import { ProviderScriptBlock } from "./ProviderScriptBlock";
import { ProviderScriptParameter } from "./ProviderScriptParameter";
/**
 * This class describes a type of logic applied to a provider.
 * A script will generate a file which is loaded onto a provider in the field.
 */
export declare class ProviderScript extends BaseComponent implements IIdUlong, INamed, IBelongCompany, IGlobal, IVisual {
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
     * The nickname given to this configuration
     */
    name: string;
    /**
     * Simple details about how the providers are expected to behave.
     */
    notes: string;
    /**
     * The fill/background colour of the icon.
     */
    fill: colour;
    /**
     * Outline and graphic colour.
     */
    stroke: colour;
    /**
     * The name of the symbol for this script.
     */
    graphic: codified;
    /**
     * Indicates whether this script is available to child companies.
     */
    global: boolean;
    /**
     * The type of provider for which this script can be used.
     * Limiting to a specific model from a manufacturer is accomplished through the block conditions.
     */
    kind: ProviderType;
    /**
     * Blocks of file data which are (optionally) included in the script data file.
     */
    blocks: ProviderScriptBlock[];
    /**
     * Parameter definitions for this script, including type-hints and default values.
     */
    parameters: Map<string, ProviderScriptParameter>;
    constructor(json?: JsonObject | nothing);
    toJSON(): {
        id: number | null;
        v: number[];
        company: number | null;
        name: string;
        notes: string;
        fill: string;
        stroke: string;
        graphic: string;
        global: boolean;
        kind: ProviderType;
        blocks: any[];
        parameters: JsonObject;
    };
    fromJSON(json: JsonObject, force?: boolean): boolean;
    /**
     * The {@link id} is the key.
     */
    getKey(): number;
}
//# sourceMappingURL=ProviderScript.d.ts.map