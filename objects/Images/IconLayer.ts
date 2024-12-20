
	/// <summary>
	/// The layers of the map used to visualize the icon.
	/// </summary>
	export enum IconLayer {
		/// <summary>
		/// An SVG only layer just above the roads used for solid Places and accuracy radius fill.
		/// </summary>
		fills,
		/// <summary>
		/// An HTML only layer intended for use by an icon's drop-shadow.
		/// </summary>
		shadows,
		/// <summary>
		/// An SVG only layer intended for use by shape and accuracy radius outlines.
		/// </summary>
		outlines,
		/// <summary>
		/// An HTML only layer intended for use by an icon's main images.
		/// </summary>
		markers,
		/// <summary>
		/// An HTML only layer intended for use by an icon's label.
		/// </summary>
		labels,
		/// <summary>
		/// An SVG only layer for special drawing controls.  Icons should not use this layer.
		/// </summary>
		drawings,
		/// <summary>
		/// An HTML only layer for special drawing controls.  Icons should not use this layer.
		/// </summary>
		edits,
	}