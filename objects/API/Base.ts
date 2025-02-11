import { IDeserializable } from './Interfaces/IDeserializable';

/**
 * A base class used to construct objects from the sync system.
 */
export abstract class Base
    implements IDeserializable {
    
    /**
     * Almost all objects can be constructed using a simple JSON object.
     * @param json 
     */
    constructor(json: any = null) {
        if (json) this.fromJSON(json);
    }

    /**
     * Updates this class from the given input.
     * @param json      A JSON value used to update this class.
     * @param forced    When true, forces the update.
     * @returns True when an update was completed.
     */
    abstract fromJSON(json: any, force?: boolean): boolean;
}