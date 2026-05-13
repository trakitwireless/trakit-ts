import { ISerializable } from "../API/Interfaces/ISerializable";
import { TimeSpan } from "../API/TimeSpan";
import { int, JsonObject, timespan } from "../API/Types";
import { MultiFactorEnforcement } from "./MultiFactorEnforcement";
import { MultiFactorType } from "./MultiFactorType";
/**
 * The multi-factor authentication policy.
 */
export declare class MultiFactorPolicy implements ISerializable {
    /**
     * Creates a new instance of the MultiFactorPolicy class from a JSON object.
     * @param json The JSON object to deserialize.
     */
    static fromJSON(json: JsonObject): MultiFactorPolicy;
    /**
     * Indicates the level of requirement for multi-factor authentication.
     */
    enforcement: MultiFactorEnforcement;
    /**
     * Implementations from which {@link User}s can configure and use.
     */
    kinds: MultiFactorType[];
    /**
     * The length of a PIN.
     */
    length: int;
    /**
     * How often the multi-factor authentication PINs should be expired.
     */
    timeout: TimeSpan;
    constructor(enforcement?: MultiFactorEnforcement, kinds?: MultiFactorType[], length?: int, timeout?: TimeSpan | timespan | number);
    toJSON(): {
        enforcement: MultiFactorEnforcement;
        kinds: MultiFactorType[];
        length: number | null;
        timeout: string;
    };
}
//# sourceMappingURL=MultiFactorPolicy.d.ts.map