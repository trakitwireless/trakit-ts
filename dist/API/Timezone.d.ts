import { IRequestable } from "./Interfaces/IRequestable";
import { ISerializable } from "./Interfaces/ISerializable";
import { short, JsonObject } from "./Types";
/**
 * Timezone definition
*/
export declare class Timezone implements IRequestable, ISerializable {
    /**
     *
     * @param json
     */
    static fromJSON(json: JsonObject): Timezone;
    /**
     *
     */
    static utc: Timezone;
    /**
     * Unique timezone code
     */
    code: string;
    /**
     * Common timezone name
     */
    name: string;
    /**
     * Minutes offset from GMT
     */
    offset: short;
    /**
     * Indicates whether this timezone abides by daylight savings
     */
    dst: boolean;
    constructor(code: string, name?: string, offset?: short, dst?: boolean);
    toJSON(): {
        code: string;
        name: string;
        offset: number;
        dst: boolean;
    };
    /**
     * The {@link code} is the key.
     */
    getKey(): string;
}
//# sourceMappingURL=Timezone.d.ts.map