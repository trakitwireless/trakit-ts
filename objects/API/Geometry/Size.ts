import { double } from '../Types';

/// <summary>
/// Dimensions on a flat surface
/// </summary>
export interface ISize {
	/// <summary>
	/// Width
	/// </summary>
	width: double;
	/// <summary>
	/// Height
	/// </summary>
	height: double;
}

/// <summary>
/// Dimensions on a flat surface
/// </summary>
export class Size implements ISize {
	/// <summary>
	/// Width
	/// </summary>
	public width: double = NaN;
	/// <summary>
	/// Height
	/// </summary>
	public height: double = NaN;

	constructor(width: double, height: double) {
		this.width = width;
		this.height = height;
	}
}