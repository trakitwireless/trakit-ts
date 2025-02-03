import { int } from './Types';
import { Component } from './Component';
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
	abstract get Pieces(): Component[];

	/**
	 * Compound objects have multiple {@link v} values; one for each part of the object.
	 */
	override get v(): int[] { return this.Pieces.map(p => p.v[0]); }
	override set v(value: int[]) { value?.forEach((v, i) => this.Pieces[i].v[0] = v); }
}