import { double } from '../Types';
import { IS_AN } from '../Functions';
import { Point } from './Point';

/// <summary>
/// A boundary on a flat surface
/// </summary>
export interface ISquare {
	/// <summary>
	/// Highest vertical coordinate
	/// </summary>
	top: double;
	/// <summary>
	/// Right-most horizontal coordinate
	/// </summary>
	right: double;
	/// <summary>
	/// Lowest vertical coordinate
	/// </summary>
	bottom: double;
	/// <summary>
	/// Left-most horizontal coordinate
	/// </summary>
	left: double;
	/// <summary>
	/// Width
	/// </summary>
	get width(): double;
	/// <summary>
	/// Height
	/// </summary>
	get height(): double;
}

/// <summary>
/// A boundary on a flat surface
/// </summary>
export class Square {
	/// <summary>
	/// Highest vertical coordinate
	/// </summary>
	public top: double = NaN;
	/// <summary>
	/// Right-most horizontal coordinate
	/// </summary>
	public right: double = NaN;
	/// <summary>
	/// Lowest vertical coordinate
	/// </summary>
	public bottom: double = NaN;
	/// <summary>
	/// Left-most horizontal coordinate
	/// </summary>
	public left: double = NaN;

	//constructor(lt: Point,  rb: Point)
	constructor(left: double, top: double, bottom: double, right: double) {
		this.left = left;
		this.top = top;
		this.right = right;
		this.bottom = bottom;
	}

	/// <summary>
	/// Width
	/// </summary>
	public get width(): double { return this.right - this.left; }
	/// <summary>
	/// Height
	/// </summary>
	public get height(): double { return this.bottom - this.top; }
}