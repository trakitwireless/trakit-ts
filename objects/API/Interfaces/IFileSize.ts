import { ulong } from '../Types';

/// <summary>
/// An interface for an object's size on a disk.
/// </summary>
export interface IFileSize {
	/// <summary>
	/// Size (in bytes) of the object on the HDD or SSD.
	/// </summary>
	bytes: ulong;
}