import { Base, } from './Base';
import { IRequestable, } from './Interfaces/IRequestable';
import { ISerializable, } from './Interfaces/ISerializable';
import { int } from './Types';

/**
 * Any derived class can/should be serialized and given to a user.
 */
export abstract class BaseComponent
	extends Base
	implements IRequestable, ISerializable {
	/**
	 * Object version keys used to validate synchronization for all object properties.
	 */
	#version: int = -1;
	/**
	 * Object version keys used to validate synchronization for all object properties.
	 */
	get v(): int[] { return [this.#version]; }
	/**
	 * 
	 * @param version 
	 * @returns 
	 */
	protected updateVersion(versions: int[] = [-1]) {
		const version = versions?.[0] ?? -1,
			json = (version + 1) || 0,
			existing = (this.#version + 1) || 0,
			update = !existing || json > existing;
		// if the existing version is -1, accept new value even if it's also -1
		if (update) this.#version = json - 1;
		return update;
	}

	/**
	 * Returns a string which can be used as a unique identifier for this object.
	 * Strings are unique for each type of object, but can be identical for different object types.
	 * @returns A string unique for this type of object.
	 */
	abstract getKey(): string;

	/**
	 * Creates a literal of this {@link BaseComponent}.
	 * Used internally by {@link JSON.stringify}.
	 */
	abstract toJSON(): any;
}