import { FLOAT } from "../API/Constants";
import { MERGE } from "../API/Objects";
import { double } from "../API/Types";
import { AssetAdvanced } from "./AssetAdvanced";

/**
 * Often changing details about a vehicle.
 */
export class VehicleAdvanced
	extends AssetAdvanced {
	/**
	 * The cumulative duration that the vehicle's engine has been running (in decimal hours).
	 */
	engineHours: double = NaN;

	override toJSON(): any {
		return MERGE(super.toJSON(), {
			"engineHours": this.engineHours || null,
		});
	}
	override fromJSON(json: any, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"]) || !!(force && json);
		super.fromJSON(json, update);
		if (update) {
			this.engineHours = FLOAT(json["engineHours"]);
		}
		return update;
	}
}