import { ISerializable } from "../API/Interfaces/ISerializable";
import { BehaviourParameterType } from "./BehaviourParameterType";
import { JsonObject } from "../API/Types";
/**
 * Definition of an argument passed to a Behaviour Script.
*/
export declare class BehaviourParameter implements ISerializable {
    /**
     *
     * @param json
     * @returns
     */
    static fromJSON(json: JsonObject): BehaviourParameter;
    /**
     * Simple type information for the compiler.
     */
    kind: BehaviourParameterType;
    /**
     * The value is given as a string, but parsed into native type when compiled.
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
    constructor(kind?: BehaviourParameterType, value?: string, notes?: string, context?: string);
    toJSON(): {
        kind: BehaviourParameterType;
        value: string;
        notes: string;
        context: string;
    };
}
//# sourceMappingURL=BehaviourParameter.d.ts.map