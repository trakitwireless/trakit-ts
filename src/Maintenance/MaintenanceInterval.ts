import { FLOAT } from "../API/Constants";
import { DATE, ID, IS_AN } from "../API/Functions";
import { IBelongAsset } from "../API/Interfaces/IBelongAsset";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { datetime, double, JsonObject, ulong } from "../API/Types";
import { Asset } from "../Assets/Asset";
import { ASSETS, MAINTENANCE_JOBS } from "../storage";
import { MaintenanceJob } from "./MaintenanceJob";
import { MaintenanceSchedule } from "./MaintenanceSchedule";

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
			"date": this.date.toJSON(),
			"odometer": this.odometer || 0,
			"engineHours": this.engineHours || 0,
			"lastJob": this.lastJobId || null
		}
	}

	/**
	 * Tries to predict the next lapse for this interval.
	 * @param schedule 
	 * @returns 
	 */
	predict(schedule: MaintenanceSchedule) {
		return [
			this.predictByDate(schedule.recurDays),
			this.predictByOdometer(schedule.recurDistance),
			this.predictByEngineHours(schedule.recurEngineHours),
		].reduce(function (prev, next) {
			return !IS_AN(prev.valueOf()) || next > prev
				? next
				: prev;
		}, DATE());
	}
	/**
	 * Tries to predict the next lapse for this interval based on the date.
	 * @param days 
	 * @returns 
	 */
	predictByDate(days: number) {
		return new Date(
			this.date.valueOf()
			+ (days * 24 * 60 * 60 * 1000) // milliseconds in a day
		);
	}
	/**
	 * Tries to predict the next lapse for this interval by averaging the odometer.
	 * @param distance 
	 * @returns
	 */
	predictByOdometer(distance: number) {
		// (current - previous) / days		=> Km per day
		// current + (Km per day * prediction)	=> future odometer
		// previous + pattern distance		=> required future odometer to be considered "pending"
		if (distance) {
			var asset = this.asset,
				current = !asset ? 0 : asset.engineHours,
				previous = this.engineHours,
				days = DATE(!asset || !asset.position ? NaN : asset.position.date).valueOf() - this.date.valueOf(),	//) * 24 * 60 * 60 * 1000,
				average = (current - previous) / days;
			return new Date(this.date.valueOf() + (distance / average));
		} else {
			return DATE();
		}
	}
	/**
	 * Tries to predict the next lapse for this interval by averaging the engine hours.
	 * @param engineHours 
	 * @returns 
	 */
	predictByEngineHours(engineHours: number) {
		// (current - previous) / days		=> Km per day
		// current + (Km per day * prediction)	=> future odometer
		// previous + pattern distance		=> required future odometer to be considered "pending"
		if (engineHours) {
			var asset = this.asset,
				current = !asset ? 0 : asset.odometer,
				previous = this.odometer,
				days = DATE(!asset || !asset.position ? NaN : asset.position.date).valueOf() - this.date.valueOf(),	//) * 24 * 60 * 60 * 1000,
				average = (current - previous) / days;
			return new Date(this.date.valueOf() + (engineHours / average));
		} else {
			return DATE();
		}
	}
}