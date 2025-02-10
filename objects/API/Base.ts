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
     * Updates this {@link IDeserializable} from the given input.
     * @param json 
     */
    abstract fromJSON(json: any): this;
}