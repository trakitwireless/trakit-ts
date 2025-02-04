/**
 * An interface for types that are updated using JSON values.
 */
export interface IDeserializable {
    /**
     * Updates this {@link IDeserializable} from the given input.
     * @param input 
     */
    fromJSON(input: any): void;
}