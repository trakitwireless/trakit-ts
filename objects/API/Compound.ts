import { int } from './Types';
import { Component } from './Component';
/**
 * Some objects are made up of the pieces of many objects.
 * <seealso cref="Asset"/>
 * <seealso cref="Company"/>
 * <seealso cref="Provider"/>
 * <seealso cref="User"/>
 **/
export abstract class Compound extends Component {
	/**
	 * A list of individually subscribable objects that make up the compound object.
	 **/
	abstract get Pieces(): Component[];

	/**
	 * Compound objects have multiple <see cref="v"/> values; one for each part of the object.
	 **/
	public override get v(): int[] { return this.Pieces.map(p => p.v[0]); }
	public override set v(value: int[]) { value?.forEach((v, i) => this.Pieces/// @deprecated.v[0] = v); }