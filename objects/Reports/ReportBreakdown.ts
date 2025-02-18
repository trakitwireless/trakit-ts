import { ID } from "../API/Functions";
import { uint, ulong } from "../API/Types";
import { AssetAdvanced } from "../Assets/AssetAdvanced";
import { AssetGeneral } from "../Assets/AssetGeneral";

/**
 * Asset information used in calculating a summary instance.
 */
export class ReportBreakdown {
	/**
	 * The asset to which this event data belongs.
	 */
	asset: ulong;
	/**
	 * Report specific identifier of the event data.
	 */
	instance: uint;
	/**
	 * Identifiers of the summary instances that used this event.
	 */
	summaryInstances: uint[];
	/**
	 * General Asset information.
	 */
	general: AssetGeneral | null;
	/**
	 * Advanced/detailed information used.
	 */
	advanced: AssetAdvanced | null;

	constructor(
		asset?: ulong,
		instance?: uint,
		summaryInstances?: uint[],
		general?: AssetGeneral | null,
		advanced?: AssetAdvanced | null
	) {
		this.asset = ID(asset);
		this.instance = ID(instance);
		this.summaryInstances = summaryInstances?.map(ID) ?? [];
		this.general = general || null;
		this.advanced = advanced || null;
	}
}