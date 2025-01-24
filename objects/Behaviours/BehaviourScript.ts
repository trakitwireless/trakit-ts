

	/**
	 * Business logic run by the system to react to GPS events and device information.
	 */
	export class BehaviourScript extends Component implements IIdUlong, INamed, IBelongCompany, IGlobal, IVisual, IDeletable {
		/**
		 * Unique identifier of this script.
		 */
		id: ulong = NaN;
		/**
		 * The company to which this script belongs.
		 * {@link Company.id}
		 */
		company: ulong = NaN;
		/**
		 * The nickname given to this script.
		 *  <override max-length="100" />
		 */
		name: string = "";
		/**
		 * Usage notes and instructions for users on how best to setup this script.
		 */
		notes: string = "";
		/**
		 * Indicates whether this script is available to child companies.
		 */
		global: boolean = false;
		/**
		 * The source code.
		 *  <override max-length="8060" />
		 */
		source: string = "";
		/**
		 * A list of targeting expressions.  These expressions are defaults for derived Behaviours.
		 *  <override type="System.String" format="expression" />
		 */
		filters: string = "";
		/**
		 * Listed parameters for the Behaviour function.
		 */
		parameters: Map<string, BehaviourParameter>;
		/**
		 * Flag set by the compiler if this code compiles
		 */
		compiles: boolean = false;
		/**
		 * The background colour given to this script for easy visual identification.
		 *  <override max-length="22" format="colour" />
		 */
		fill: string = "";
		/**
		 * The text/graphic colour given to this script for easy visual identification.
		 *  <override max-length="22" format="colour" />
		 */
		stroke: string = "";
		/**
		 * The codified graphic name given to this script for easy visual identification.
		 *  <override max-length="22" format="codified" />
		 */
		graphic: string = "";

		// IRequestable
		/**
		 * The <see cref="id"/> is the key.
		 */
public getKey(): string { return this.id.toString(); }

		// IDeletable
		/**
		 * Indicates whether this object was deleted.
		 */
		deleted: boolean = false;
		/**
		 * Timestamp from the action that deleted or suspended this object.
		 */
		since: Date = DATE();
	}