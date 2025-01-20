import { double } from '../Types';

/// <summary>
/// A coordinate on a flat surface
/// </summary>
export interface IPoint {
	/// <summary>
	/// Horizontal coordinate
	/// </summary>
	x: double;
	/// <summary>
	/// Vertical coordinate
	/// </summary>
	y: double;
}

/// <summary>
/// A coordinate on a flat surface
/// </summary>
export class Point implements IPoint {
	/// <summary>
	/// Horizontal coordinate
	/// </summary>
	public x: double = NaN;
	/// <summary>
	/// Vertical coordinate
	/// </summary>
	public y: double = NaN;

	constructor(x: double, y: double) {
		this.x = x;
		this.y = y;
	}
}