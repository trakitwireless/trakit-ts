import { ISerializable } from "../API/Interfaces/ISerializable";
import { byte, JsonObject } from "../API/Types";
import { PasswordExpiryMode } from "./PasswordExpiryMode";
/**
 * The password complexity and expiry policy.
 */
export declare class PasswordPolicy implements ISerializable {
    /**
     *
     * @param json
     */
    static fromJSON(json: JsonObject): PasswordPolicy;
    /**
     * The minimum number of characters required.
     */
    minimumLength: byte;
    /**
     * Do passwords require alphabetical characters.
     */
    includeLetters: boolean;
    /**
     * Do passwords require numeric characters.
     */
    includeNumbers: boolean;
    /**
     * Do passwords require upper-case and lower-case letters.
     */
    includeUpperLower: boolean;
    /**
     * Do passwords require non-alphanumeric characters.
     */
    includeSpecial: boolean;
    /**
     * Defines how passwords expire.
     */
    expireMode: PasswordExpiryMode;
    /**
     * The threshold for expiry.
     */
    expireThreshold: byte;
    constructor(minimumLength?: byte, includeLetters?: boolean, includeNumbers?: boolean, includeUpperLower?: boolean, includeSpecial?: boolean, expireMode?: PasswordExpiryMode, expireThreshold?: byte);
    toJSON(): {
        minimumLength: number | null;
        includeLetters: boolean;
        includeNumbers: boolean;
        includeUpperLower: boolean;
        includeSpecial: boolean;
        expireMode: PasswordExpiryMode;
        expireThreshold: number | null;
    };
}
//# sourceMappingURL=PasswordPolicy.d.ts.map