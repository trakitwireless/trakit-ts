import { FLOAT } from "../API/Constants";
import { double, int, JsonObject } from "../API/Types";
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

	override toJSON() {
		return {
			...super.toJSON(),
			"engineHours": this.engineHours || null,
		};
	}
	override fromJSON(json: JsonObject, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"] as int[]) || !!(force && json);
		super.fromJSON(json, update);
		if (update) {
			this.engineHours = FLOAT(json["engineHours"] as any);
		}
		return update;
	}
}