import { int } from './Types';
import { Component } from './Component';
import { Asset } from '../Assets/Asset';
import { Company } from '../Companies/Company';
import { Provider } from '../Providers/Provider';
import { User } from '../Accounts/User';
/**
 * Some objects are made up of the pieces of many objects.
 * {@link Asset}
 * {@link Company}
 * {@link Provider}
 * {@link User}
 */
export abstract class Compound extends Component {
	/**
	 * A list of individually subscribable objects that make up the compound object.
	 */
	abstract get pieces(): Component[];

	/**
	 * Compound objects have multiple {@link v} values; one for each part of the object.
	 */
	override get v(): int[] { return this.pieces.map(p => p?.v[0]??-1); }
	override set v(value: int[]) { value?.forEach((v, i) => this.pieces[i].v[0] = v); }
}