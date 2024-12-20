

	/// <summary>
	/// 
	/// </summary>
	export interface IRespTComponent[] where TComponent : Component {
		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		TComponent[] GetCollection();
	}