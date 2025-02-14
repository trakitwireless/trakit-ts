import { FLOAT } from "../API/Constants";
import { DATE, DATE_JSON, ID } from "../API/Functions";
import { IBelongAsset } from "../API/Interfaces/IBelongAsset";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { double, ulong } from "../API/Types";
import { Asset } from "../Assets/Asset";
import { ASSETS, MAINTENANCE_JOBS } from "../Storage";
import { MaintenanceJob } from "./MaintenanceJob";

/**
 * The detail for calculating Maintenance Schedule recurrence.
 *  <override name="MaintenanceInterval" />
 */
export class MaintenanceInterval
	implements IBelongAsset, ISerializable {
	static fromJSON(json: any) {
		return new MaintenanceInterval(
			ID(json["asset"]),
			DATE(json["date"]),
			FLOAT(json["odometer"]),
			FLOAT(json["engineHours"]),
			ID(json["lastJob"])
		)
	}
	/**
	 * The Vehicle or Trailer to which this recurrence detail belongs.
	 * {@link Asset.id}
	 */
	assetId: ulong = NaN;
	/**
	 * The Vehicle or Trailer to which this recurrence detail belongs.
	 * {@link Asset.id}
	 */
	get asset(): Asset { return ASSETS.get(this.assetId) as Asset; }
	/**
	 * The date of the last calculation.
	 */
	date: Date = DATE();
	/**
	 * The odometer at the time of the last calculation.
	 */
	odometer: double = NaN;
	/**
	 * The operating time at the time of the last calculation.
	 */
	engineHours: double = NaN;
	/**
	 * The last "completed" job related to this schedule interval.
	 */
	lastJobId: ulong = NaN;
	/**
	 * The last "completed" job related to this schedule interval.
	 */
	get lastJob(): MaintenanceJob { return MAINTENANCE_JOBS.get(this.lastJobId) as MaintenanceJob; }

	constructor(
		asset: ulong,
		date: Date | number | string,
		odometer: double,
		engineHours: double,
		lastJob: ulong
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
			"date": DATE_JSON(this.date),
			"odometer": this.odometer || 0,
			"engineHours": this.engineHours || 0,
			"lastJob": this.lastJobId || null
		}
	}
}