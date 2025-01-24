import { ulong } from '../Types';

/**
 * An interface for objects that have "pictures".
*/
export interface IPictured {
	/**
	 * A list of picture identifiers of this object.
	 */
	pictures: ulong[];
}