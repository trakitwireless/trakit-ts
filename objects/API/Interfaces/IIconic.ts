import { Icon } from '../../Images/Icon';
import { ulong } from '../Types';

/**
 * An interface for objcts that have an "icon".
*/
export interface IIconic {
	/**
	 * This thing's {@link Icon.id}.
	 */
	iconId: ulong;
	/**
	 * This thing's {@link Icon}.
	 */
	get icon(): Icon;
}