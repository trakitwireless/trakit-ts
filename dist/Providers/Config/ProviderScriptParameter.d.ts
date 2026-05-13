import { ISerializable } from "../../API/Interfaces/ISerializable";
import { uint, JsonObject } from "../../API/Types";
import { ProviderScriptParameterType } from "./ProviderScriptParameterType";
/**
 * Definition of an argument passed to a ProviderScript.
 */
export declare class ProviderScriptParameter implements ISerializable {
    /**
     *
     * @param json
     * @returns
     */
    static fromJSON(json: JsonObject): ProviderScriptParameter;
    /**
     * Simple type information for the gateway to process.
     */
    kind: ProviderScriptParameterType;
    /**
     * The value is given as a string, but parsed into native type when used by the gateway.
     */
    value: string;
    /**
     * Usage notes.
     */
    notes: string;
    /**
     * Gives a hint to the client on the best UI to use for editing.
     * For example, "checkbox" is a good UI hint for boolean parameter types.
     */
    context: string;
    /**
     * The order in which this parameter is displayed compared to other parameters.
     * The value has no effect on how this parameter is inserted into the ProviderScriptBlocks.
     */
    order: uint;
    /**
     * Used as a hint that this parameter controls an advanced script option and should only be set if you really know what you're doing.
     */
    advanced: boolean;
    constructor(kind?: ProviderScriptParameterType, value?: string, notes?: string, context?: string, order?: uint, advanced?: boolean);
    toJSON(): {
        kind: ProviderScriptParameterType;
        value: string;
        notes: string;
        context: string;
        order: number;
        advanced: boolean;
    };
}
//# sourceMappingURL=ProviderScriptParameter.d.ts.map