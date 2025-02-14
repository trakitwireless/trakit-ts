import { ARRAY_TO_JSON } from "../API/Arrays";
import { FLOAT } from "../API/Constants";
import { ID } from "../API/Functions";
import { LatLng } from "../API/Geography/LatLng";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { TimeSpan } from "../API/TimeSpan";
import { double, timespan, ulong } from "../API/Types";

/**
 * Driving directions and details like duration and distance.
 */
export class DispatchDirection
	implements ISerializable {
	/**
	 * 
	 * @param json 
	 */
	static fromJSON(json: any): DispatchDirection {
		return new DispatchDirection(
			FLOAT(json["distance"]),
			new TimeSpan(json["duration"]),
			json["instructions"] || "",
			(json["path"] as any[])?.map(LatLng.fromJSON) as LatLng[],
			(json["directions"] as any[])?.map(DispatchDirection.fromJSON),
			ID(json["job"]),
			ID(json["step"])
		);
	}
	
	/**
	 * The total distance of these directions (including sub-directions if applicable).
	 */
	distance: double = NaN;
	/**
	 * The total duration of these directions (including sub-directions if applicable).
	 */
	duration: TimeSpan | null = null;
	/**
	 * Text hint for the driver for the action to perform.
	 */
	instructions: string = "";
	/**
	 * A <format id="polyline">route path</format> to display on a map.
	 *  <override type="System.String" format="polyline" />
	 */
	path: LatLng[] = [];
	/**
	 * For complex routes, the sub-directions provide a breakdown or additional details.
	 */
	directions: DispatchDirection[] = [];
	/**
	 * Unique identifier of the {@link DispatchJob} or {@link DispatchTask}.
	 */
	job: ulong = NaN;
	/**
	 * The {@link DispatchStep.id}, if this direction is for {@link DispatchJob}s.
	 */
	step: ulong = NaN;

	constructor(
		distance: double,
		duration: TimeSpan | timespan | number,
		instructions: string,
		path: LatLng[],
		directions: DispatchDirection[],
		job: ulong,
		step: ulong
	) {
		this.distance = FLOAT(distance as any);
		this.duration = new TimeSpan(duration);
		this.instructions = instructions || "";
		this.path = path ?? [];
		this.directions = directions ?? [];
		this.job = ID(job);
		this.step = ID(step);
	}

	toJSON() {
		return {
			"distance": this.distance || 0,
			"duration": this.duration?.toString() || null,
			"instructions": this.instructions || "",
			"path": this.path.map(ARRAY_TO_JSON),
			"directions": this.directions.map(ARRAY_TO_JSON),
			"job": this.job || null,
			"step": this.step || null,
		};
	}
}