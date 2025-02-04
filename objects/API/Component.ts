import { int, uint,  } from './Types';
import { IRequestable, } from './Interfaces/IRequestable';
import { ISerializable, } from './Interfaces/ISerializable';
import { IDeserializable, } from './Interfaces/IDeserializable';
import { MAX } from './Constants';

/**
 * Any derived class can/should be serialized and given to a user.
 */
export abstract class Component implements IRequestable, ISerializable, IDeserializable {
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
	 * Creates a literal of this {@link Component}.
	 * Used internally by {@link JSON.stringify}.
	 */
	abstract toJSON(): any;
	/**
	 * 
	 * @param input 
	 */
	abstract fromJSON(json: any): void;
}

/**
 * Compares the two version key arrays and returns a boolean array of which keys to keep.
 * Also replaces the existing version array with the accepted values.
 * @param	existingVersion
 * @param	jsonVersions
 */
export function COMPARE_VERSIONS(existingVersion: int[], jsonVersions: int[] = []) {
	const keepers: boolean[] = [],
		length = MAX(existingVersion.length, jsonVersions.length);
	for (let i = 0; i < length; i++) {
		const json = (jsonVersions[i] + 1) || 0,
			existing = (existingVersion[i] + 1) || 0;
		// if the existing version is -1, accept new value even if it's also -1
		if (keepers[i] = (!existing || json > existing)) {
			existingVersion[i] = json - 1;
		}
	}
	return keepers;
}
/**
 * Used on the results of the {@link COMPARE_VERSIONS} helper, as the predicate in an Array#some.
 * @param	keeper
 **/
function WAS_CHANGED(keeper: boolean) {
	return keeper;
}