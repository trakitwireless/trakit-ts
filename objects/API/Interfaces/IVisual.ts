
/// <summary>
/// An interface for objects that make them more easily visually identifiable.
/// </summary>
export interface IVisual {
	/// <summary>
	/// The background colour of the graphic.
	/// </summary>
	/// <override max-length="22" format="colour" />
	fill: string;
	/// <summary>
	/// Outline and graphic colour.
	/// </summary>
	/// <override max-length="22" format="colour" />
	stroke: string;
	/// <summary>
	/// The name of the symbol for this object.
	/// </summary>
	/// <override max-length="22" format="codified" />
	graphic: string;
}