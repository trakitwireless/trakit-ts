import { int, uint,  } from './Types';
import { IRequestable, } from './Interfaces/IRequestable';
import { ISerializable, } from './Interfaces/ISerializable';
import { IDeserializable, } from './Interfaces/IDeserializable';
import { MAX } from './Constants';

/**
 * Any derived class can/should be serialized and given to a user.
 */
export abstract class Component
	implements IRequestable, ISerializable, IDeserializable {
	/**
	 * Object version keys used to validate synchronization for all object properties.
	 */
	protected _version: int = -1;
	/**
	 * Object version keys used to validate synchronization for all object properties.
	 */
	get v(): int[] { return [this._version]; }
	//set v(value: int[]) { this._version = value; }
	/**
	 * 
	 * @param version 
	 * @returns 
	 */
	protected updateVersion(version: int = -1) {
		const json = (version + 1) || 0,
			existing = (this._version + 1) || 0,
			update = !existing || json > existing;
		// if the existing version is -1, accept new value even if it's also -1
		if (update) this._version = json - 1;
		return update;
	}
	/**
	 * 
	 * @param versions 
	 * @returns 
	 */
	protected updateVersions(versions: int[] = []) {
		return [
			this.updateVersion(versions[0]),
		];
	}

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