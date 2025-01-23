import { JsonValue } from "../Types";

/**
 * 
 */
export interface ISerializable {
    /**
     * 
     */
    toJSON(): JsonValue;
    /**
     * 
     * @param input 
     */
    fromJSON(input: JsonValue): void;
}