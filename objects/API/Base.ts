import { IDeserializable } from './Interfaces/IDeserializable';
import { JsonObject, nothing } from './Types';

/**
 * A base class used to construct objects from the sync system.
 */
export abstract class Base
    implements IDeserializable {
    
    /**
     * Almost all objects can be constructed using a simple JSON object.
     * @param json 
     */
    constructor(json?: JsonObject | nothing) {
        if (json) this.fromJSON(json);
    }

    /**
     * Updates this class from the given input.
     * @param json      A JSON value used to update this class.
     * @param forced    When true, forces the update.
     * @returns True when an update was completed.
     */
    abstract fromJSON(json: JsonObject, force?: boolean): boolean;
}