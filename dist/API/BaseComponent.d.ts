import { Base } from './Base';
import { IRequestable } from './Interfaces/IRequestable';
import { ISerializable } from './Interfaces/ISerializable';
import { email, guid, int, ulong } from './Types';
/**
 * Any derived class can/should be serialized and given to a user.
 */
export declare abstract class BaseComponent extends Base implements IRequestable, ISerializable {
    /**
     * Object version keys used to validate synchronization for all object properties.
     */
    private _version;
    /**
     * Object version keys used to validate synchronization for all object properties.
     */
    get v(): int[];
    /**
     *
     * @param version
     * @returns
     */
    protected updateVersion(version: int | int[]): boolean;
    /**
     *
     * @param version
     * @returns
     */
    protected updateVersions(versions?: int[]): boolean[];
    /**
     * Returns a value which can be used as a unique identifier for this object.
     * Values are unique for each type of object, but can be identical for different object types.
     * @returns A value unique for this type of object.
     */
    abstract getKey(): ulong | email | guid | string;
    /**
     * Creates a literal of this {@link BaseComponent}.
     * Used internally by {@link JSON.stringify}.
     */
    abstract toJSON(): any;
}
//# sourceMappingURL=BaseComponent.d.ts.map