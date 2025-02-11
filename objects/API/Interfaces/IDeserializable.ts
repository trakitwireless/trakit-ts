/**
 * An interface for types that are updated using JSON values.
 */
export interface IDeserializable {
    /**
     * Updates this {@link IDeserializable} from the given input.
     * @param json      A JSON value used to update this class.
     * @param forced    When true, forces the update.
     * @returns True when an update was completed.
     */
    fromJSON(json: any, force?: boolean): boolean;
}