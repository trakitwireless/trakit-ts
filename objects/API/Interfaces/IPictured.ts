import { ulong } from '../Types';

/// <summary>
/// An interface for objects that have "pictures".
/// </summary>
/// <seealso cref="Picture.id" />
export interface IPictured {
	/// <summary>
	/// A list of picture identifiers of this object.
	/// </summary>
	pictures: ulong[];
}