import { int, JsonValue, } from './Types';
import { IRequestable, } from './Interfaces/IRequestable';
import { ISerializable, } from './Interfaces/ISerializable';

/**
 * Any derived class can/should be serialized and given to a user.
 */
export abstract class Component implements IRequestable, ISerializable {
	/**
	 * Object version keys used to validate synchronization for all object properties.
	 */
	protected _version: int[] = [-1];
	/**
	 * Object version keys used to validate synchronization for all object properties.
	 */
	get v(): int[] { return this._version; }
	set v(value: int[]) { this._version = value; }

	/**
	 * Returns a string which can be used as a unique identifier for this object.
	 * Strings are unique for each type of object, but can be identical for different object types.
	 * @returns A string unique for this type of object.
	 */
	abstract getKey(): string;

	/**
	 * 
	 */
	abstract toJSON(): JsonValue;
	/**
	 * 
	 * @param input 
	 */
	abstract fromJSON(input: JsonValue): void;
}