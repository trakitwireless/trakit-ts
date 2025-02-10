import { User } from '../Accounts/User';
import { Asset } from '../Assets/Asset';
import { Company } from '../Companies/Company';
import { Provider } from '../Providers/Provider';
import { BaseComponent } from './BaseComponent';
import { int } from './Types';

/**
 * Some objects are made up of the pieces of many objects.
 * {@link Asset}
 * {@link Company}
 * {@link Provider}
 * {@link User}
 */
export abstract class BaseCompound
	extends BaseComponent {
	/**
	 * A list of individually subscribable objects that make up the compound object.
	 */
	abstract get pieces(): BaseComponent[];

	/**
	 * Compound objects have multiple {@link v} values; one for each part of the object.
	 */
	override get v(): int[] { return this.pieces.map(p => p?.v[0] ?? -1); }
	//override set v(value: int[]) { value?.forEach((v, i) => this.pieces[i].v[0] = v); }
}