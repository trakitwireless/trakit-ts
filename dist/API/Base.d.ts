import { IDeserializable } from './Interfaces/IDeserializable';
import { JsonObject } from './Types';
/**
 * A base class used to construct objects from the sync system.
 */
export declare abstract class Base implements IDeserializable {
    /**
     * Updates this class from the given input.
     * @param json      A JSON value used to update this class.
     * @param forced    When true, forces the update.
     * @returns True when an update was completed.
     */
    abstract fromJSON(json: JsonObject, force?: boolean): boolean;
}
//# sourceMappingURL=Base.d.ts.map