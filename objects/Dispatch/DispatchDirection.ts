import { ARRAY_TO_JSON } from "../API/Arrays";
import { ID, IS_AN, IS_NUMBER } from "../API/Functions";
import { ILatLng } from "../API/Geography/Interfaces";
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

	constructor(json: any)
	constructor(
		distance?: double,
		duration?: TimeSpan | timespan | number,
		instructions?: string,
		path?: ILatLng[],
		directions?: DispatchDirection[],
		job?: ulong,
		step?: ulong
	) {
		if (IS_NUMBER(distance)) {
			this.distance = distance;
			this.duration = new TimeSpan(duration);
			this.instructions = instructions || "";
			this.path = path?.map(p => LatLng.fromJSON(p) as LatLng) || [];
			this.directions = directions?.map(d => new DispatchDirection(d)) || [];
			this.job = ID(job);
			this.step = ID(step);
		}
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