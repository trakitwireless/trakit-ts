import { JsonValue } from "../Types";

/**
 * 
 */
export interface ISerializable {
    /**
     * 
     */
    toJSON(): JsonValue;
}