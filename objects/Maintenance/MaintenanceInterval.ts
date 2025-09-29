import { FLOAT } from "../API/Constants";
import { DATE, JSON_DATE, ID } from "../API/Functions";
import { IBelongAsset } from "../API/Interfaces/IBelongAsset";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { datetime, double, ulong } from "../API/Types";
import { Asset } from "../Assets/Asset";
import { ASSETS, MAINTENANCE_JOBS } from "../storage";
import { MaintenanceJob } from "./MaintenanceJob";

/**
 * The detail for calculating Maintenance Schedule recurrence.
 */
export class MaintenanceInterval
	implements IBelongAsset, ISerializable {
	static fromJSON(json: JsonObject) {
		return new MaintenanceInterval(
			json["asset"] as ulong,
			json["date"] as datetime,
			json["odometer"] as double,
			json["engineHours"] as double,
			json["lastJob"] as ulong,
		);
	}
	/**
	 * The Vehicle or Trailer to which this recurrence detail belongs.
	 * {@link Asset.id}
	 */
	assetId: ulong;
	/**
	 * The Vehicle or Trailer to which this recurrence detail belongs.
	 * {@link Asset.id}
	 */
	get asset(): Asset { return ASSETS.get(this.assetId) as Asset; }
	/**
	 * The date of the last calculation.
	 */
	date: Date;
	/**
	 * The odometer at the time of the last calculation.
	 */
	odometer: double;
	/**
	 * The operating time at the time of the last calculation.
	 */
	engineHours: double;
	/**
	 * The last "completed" job related to this schedule interval.
	 */
	lastJobId: ulong;
	/**
	 * The last "completed" job related to this schedule interval.
	 */
	get lastJob(): MaintenanceJob { return MAINTENANCE_JOBS.get(this.lastJobId) as MaintenanceJob; }

	constructor(
		asset?: ulong,
		date?: Date | number | datetime,
		odometer?: double,
		engineHours?: double,
		lastJob?: ulong,
	) {
		this.assetId = ID(asset);
		this.date = DATE(date);
		this.odometer = FLOAT(odometer as any);
		this.engineHours = FLOAT(engineHours as any);
		this.lastJobId = ID(lastJob);
	}

	toJSON() {
		return {
			"asset": this.assetId || null,
			"date": JSON_DATE(this.date),
			"odometer": this.odometer || 0,
			"engineHours": this.engineHours || 0,
			"lastJob": this.lastJobId || null
		}
	}
}