/**
 * An interface for types that can be converted to JSON for transmission or storage.
 */
export interface ISerializable {
	/**
	 * Creates a literal of this {@link ISerializable} object.
	 * Used internally by {@link JSON.stringify}.
	 */
	toJSON(): any;
}