import { FLOAT } from "../API/Constants";
import { JSON_NUMBER } from "../API/Functions";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { TimeSpan } from "../API/TimeSpan";
import { double, timespan } from "../API/Types";

/**
 * Infraction parameter used to generate scorecard
 */
export class ReportScorecardParameter
	implements ISerializable {
	/**
	 * 
	 * @param json 
	 */
	static fromJSON(json: any) {
		return new ReportScorecardParameter(
			json["condition"],
			new TimeSpan(json["duration"]),
			FLOAT(json["points"]),
		);
	}
	/**
	 * Type of exception, example speeding, idling, etc.
	 */
	condition: string = "";
	/**
	 * Threshold per instance. If the threshold is 0, each instance is used in the calculation
	 */
	duration: TimeSpan;
	/**
	 * Points applied against the base score per instance
	 */
	points: double = NaN;

	constructor(
		condition?: string,
		duration?: TimeSpan | timespan | number,
		points?: double
	) {
		this.condition = condition || "";
		this.duration = new TimeSpan(duration);
		this.points = FLOAT(points as any);
	}

	toJSON() {
		return {
			"condition": this.condition || "",
			"duration": this.duration?.toString() || "",
			"points": JSON_NUMBER(this.points),
		};
	}
}