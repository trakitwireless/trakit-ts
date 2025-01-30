import { JsonValue } from "../Types";

/**
 * 
 */
export interface ISerializable {
    /**
     * 
     * @param input 
     */
    fromJSON(input: JsonValue): void;
}