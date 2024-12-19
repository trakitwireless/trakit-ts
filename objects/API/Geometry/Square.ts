import { double } from '../Types';

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
	/// <summary>
	/// Width
	/// </summary>
	public get width(): double { return this.right - this.left; }
	/// <summary>
	/// Height
	/// </summary>
	public get height(): double { return this.bottom - this.top; }
}