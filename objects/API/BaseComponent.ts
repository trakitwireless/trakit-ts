import { Base, } from './Base';
import { IRequestable, } from './Interfaces/IRequestable';
import { ISerializable, } from './Interfaces/ISerializable';
import { email, guid, int, ulong } from './Types';

/**
 * Any derived class can/should be serialized and given to a user.
 */
export abstract class BaseComponent
	extends Base
	implements IRequestable, ISerializable {
	/**
	 * Object version keys used to validate synchronization for all object properties.
	 */
	private _version: int = -1;
	/**
	 * Object version keys used to validate synchronization for all object properties.
	 */
	get v(): int[] { return [this._version]; }
	/**
	 * 
	 * @param version 
	 * @returns 
	 */
	protected updateVersion(version: int | int[]): boolean {
		if (version instanceof Array) {
			return this.updateVersion(version[0]);
		} else {
			const json = (version + 1) || 0,
				existing = (this._version + 1) || 0,
				update = !existing || json > existing;
			// if the existing version is -1, accept new value even if it's also -1
			if (update) this._version = json - 1;
			return update;
		}
	}
	/**
	 * 
	 * @param version 
	 * @returns 
	 */
	protected updateVersions(versions: int[] = []) {
		return versions?.map(v => this.updateVersion(v));
	}

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