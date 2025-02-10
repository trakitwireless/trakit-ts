import { ulong } from '../Types';
import { Picture } from '../../Images/Picture';

/**
 * An interface for objects that have "pictures".
*/
export interface IPictured {
	/**
	 * An array of picture identifiers of this object.
	 */
	pictureIds: ulong[];
	/**
	 * An array of {@link Picture}s of this object.
	 */
	get pictures(): Picture[];
}