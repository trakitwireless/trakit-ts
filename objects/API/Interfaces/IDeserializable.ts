import { JsonValue } from "../Types";

/**
 * An interface for types that are updated using JSON values.
 */
export interface IDeserializable {
    /**
     * Updates this {@link IDeserializable} from the given {@link JsonValue}.
     * @param input 
     */
    fromJSON(input: JsonValue): void;
}