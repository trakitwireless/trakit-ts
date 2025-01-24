

	/**
	 * Business logic run by the system to react to GPS events and device information.
	 */
	export class BehaviourScript extends Component implements IIdUlong, INamed, IBelongCompany, IGlobal, IVisual, IDeletable {
		/**
		 * Unique identifier of this script.
		 */
		public id: ulong = NaN;
		/**
		 * The company to which this script belongs.
		 * {@link Company.id}
		 */
		public company: ulong = NaN;
		/**
		 * The nickname given to this script.
		 *  <override max-length="100" />
		 */
		public name: string = "";
		/**
		 * Usage notes and instructions for users on how best to setup this script.
		 */
		public notes: string = "";
		/**
		 * Indicates whether this script is available to child companies.
		 */
		public global: boolean = false;
		/**
		 * The source code.
		 *  <override max-length="8060" />
		 */
		public source: string = "";
		/**
		 * A list of targeting expressions.  These expressions are defaults for derived Behaviours.
		 *  <override type="System.String" format="expression" />
		 */
		public filters: string = "";
		/**
		 * Listed parameters for the Behaviour function.
		 */
		public parameters: Map<string, BehaviourParameter>;
		/**
		 * Flag set by the compiler if this code compiles
		 */
		public compiles: boolean = false;
		/**
		 * The background colour given to this script for easy visual identification.
		 *  <override max-length="22" format="colour" />
		 */
		public fill: string = "";
		/**
		 * The text/graphic colour given to this script for easy visual identification.
		 *  <override max-length="22" format="colour" />
		 */
		public stroke: string = "";
		/**
		 * The codified graphic name given to this script for easy visual identification.
		 *  <override max-length="22" format="codified" />
		 */
		public graphic: string = "";

		// IRequestable
		/**
		 * The <see cref="id"/> is the key.
		 */
public getKey(): string { return this.id.toString(); }

		// IDeletable
		/**
		 * Indicates whether this object was deleted.
		 */
		public deleted: boolean = false;
		/**
		 * Timestamp from the action that deleted or suspended this object.
		 */
		public since: Date = DATE();
	}