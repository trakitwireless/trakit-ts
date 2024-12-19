

	/// <summary>
	/// Business logic run by the system to react to GPS events and device information.
	/// </summary>
	export class BehaviourScript extends Component implements IIdUlong, INamed, IBelongCompany, IGlobal, IVisual, IDeletable {
		/// <summary>
		/// Unique identifier of this script.
		/// </summary>
		public id: ulong = NaN;
		/// <summary>
		/// The company to which this script belongs.
		/// </summary>
		/// <seealso cref="Company.id" />
		public company: ulong = NaN;
		/// <summary>
		/// The nickname given to this script.
		/// </summary>
		/// <override max-length="100" />
		public name: string = "";
		/// <summary>
		/// Usage notes and instructions for users on how best to setup this script.
		/// </summary>
		public notes: string = "";
		/// <summary>
		/// Indicates whether this script is available to child companies.
		/// </summary>
		public global: boolean = false;
		/// <summary>
		/// The source code.
		/// </summary>
		/// <override max-length="8060" />
		public source: string = "";
		/// <summary>
		/// A list of targeting expressions.  These expressions are defaults for derived Behaviours.
		/// </summary>
		/// <override type="System.String" format="expression" />
		public filters: string = "";
		/// <summary>
		/// Listed parameters for the Behaviour function.
		/// </summary>
		public parameters: Map<string, BehaviourParameter>;
		/// <summary>
		/// Flag set by the compiler if this code compiles
		/// </summary>
		public compiles: boolean = false;
		/// <summary>
		/// The background colour given to this script for easy visual identification.
		/// </summary>
		/// <override max-length="22" format="colour" />
		public fill: string = "";
		/// <summary>
		/// The text/graphic colour given to this script for easy visual identification.
		/// </summary>
		/// <override max-length="22" format="colour" />
		public stroke: string = "";
		/// <summary>
		/// The codified graphic name given to this script for easy visual identification.
		/// </summary>
		/// <override max-length="22" format="codified" />
		public graphic: string = "";

		// IRequestable
		/// <summary>
		/// The <see cref="id"/> is the key.
		/// </summary>
		/// <returns></returns>
		public getKey(): string { return this.id.toString(); }

		// IDeletable
		/// <summary>
		/// Indicates whether this object was deleted.
		/// </summary>
		public deleted: boolean = false;
		/// <summary>
		/// Timestamp from the action that deleted or suspended this object.
		/// </summary>
		public since: Date = DATE();
	}