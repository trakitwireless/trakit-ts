import { ID, JSON_NUMBER } from "../API/Functions";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { JsonObject, nothing, uint, ulong } from "../API/Types";
import { Asset } from "../Assets/Asset";
import { AssetAdvanced } from "../Assets/AssetAdvanced";
import { AssetGeneral } from "../Assets/AssetGeneral";
import { ASSETS } from "../storage";

/**
 * Asset information used in calculating a summary instance.
 */
export class ReportBreakdown
	implements ISerializable {
	/**
	 * 
	 * @param json 
	 */
	static fromJSON: (json: JsonObject) => ReportBreakdown;

	/**
	 * The asset to which this event data belongs.
	 */
	assetId: ulong;
	/**
	 * The asset to which this event data belongs.
	 */
	get asset(): Asset { return ASSETS.get(this.assetId) as Asset; }
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
		asset: ulong,
		instance: uint,
		summaryInstances?: uint[] | nothing,
		general?: AssetGeneral | nothing,
		advanced?: AssetAdvanced | nothing,
	) {
		this.assetId = ID(asset);
		this.instance = ID(instance);
		this.summaryInstances = summaryInstances?.map(ID) ?? [];
		this.general = general || null;
		this.advanced = advanced || null;
	}

	toJSON() {
		return {
			"asset": JSON_NUMBER(this.assetId),
			"instance": JSON_NUMBER(this.instance),
			"summaryInstances": [...(this.summaryInstances || [])],
			"general": this.general?.toJSON() ?? null,
			"advanced": this.advanced?.toJSON() ?? null,
		};
	}
}