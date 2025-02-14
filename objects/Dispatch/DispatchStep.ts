import { DATE, ID, MAP_TO_OBJECT, OBJECT_TO_MAP_BY_PREDICATE } from "../API/Functions";
import { ILatLng } from "../API/Geography/Interfaces";
import { LatLng } from "../API/Geography/LatLng";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { INamed } from "../API/Interfaces/INamed";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { TimeSpan } from "../API/TimeSpan";
import { timespan, ulong } from "../API/Types";
import { Place } from "../Places/Place";
import { PLACES } from "../Storage";
import { DispatchStepState } from "./DispatchStepState";
import { DispatchStepStatus } from "./DispatchStepStatus";

/**
 * A portion of work for a {@link DispatchJob}.
 */
export class DispatchStep
	implements IIdUlong, INamed, ISerializable {
	/**
	 * 
	 * @param json 
	 */
	static fromJSON(json: any) {
		return new DispatchStep(
			ID(json["id"]),
			json["name"] || "",
			OBJECT_TO_MAP_BY_PREDICATE(
				json["states"] || {},
				(k, v) => [k as DispatchStepStatus, DispatchStepState.fromJSON(v)]
			),
			DATE(json["eta"]),
			new TimeSpan(json["duration"]),
			ID(json["place"]),
			json["address"] || "",
			LatLng.fromJSON(json["latlng"]),
			json["notes"] || "",
			!!json["signature"],
			json["signatory"] || "",
		);
	}

	/**
	 * Identifier for this {@link DispatchStep}.
	 * This value is unique per {@link DispatchJob}, but is not unique system-wide.
	 */
	id: ulong = NaN;
	/**
	 * A name for the work needed to be performed.
	 *  <override max-length="100" />
	 */
	name: string = "";
	/**
	 * The most recently updated state for this step.
	 */
	get status(): DispatchStepStatus {
		let result = DispatchStepStatus.pending,
			last = DATE(0);
		for (let [status, state] of this.states) {
			if (state.updated > last) {
				result = status;
				last = state.updated;
			}
		}
		return result;
	}
	/**
	 * 
	 */
	get updated(): Date {
		let last = DATE(0);
		for (let [status, state] of this.states) {
			if (state.updated > last) {
				last = state.updated;
			}
		}
		return last;
	}
	/**
	 * The progress of this step.
	 */
	states: Map<DispatchStepStatus, DispatchStepState> = new Map;
	/**
	 * The optional estimated time of arrival for the asset.
	 */
	eta: Date = DATE();
	/**
	 * The optional expected duration of the work for this step.
	 */
	duration: TimeSpan = new TimeSpan(0);
	/**
	 * The total number of seconds in the {@link duration}.
	 */
	get timeOnSite(): number { return this.duration.totalSeconds ?? 0; }
	set timeOnSite(value: number) { this.duration = TimeSpan.fromSeconds(value); }
	/**
	 * An optional place which can be used as a template instead of providing lat/long coordinates and a street address.
	 * {@link Place.id}
	 */
	placeId: ulong = NaN;
	/**
	 * An optional place which can be used as a template instead of providing lat/long coordinates and a street address.
	 * {@link Place.id}
	 */
	get place(): Place { return PLACES.get(this.placeId) as Place; }
	set place(value: Place) { this.placeId = value?.id ?? NaN; }
	/**
	 * The street address of where the step must be completed.
	 *  <override max-length="500" />
	 */
	address: string = "";
	/**
	 * The lat/long coordinates of where the step must be {@link DispatchStepStatus.completed}.
	 */
	latlng: LatLng | null;
	/**
	 * Notes about the status of the work filled in by field-employee.
	 */
	notes: string = "";
	/**
	 * Indicates whether this step requires a signature.
	 */
	signature: boolean = false;
	/**
	 * The name of the person who signed the step's completion.
	 *  <override max-length="100" />
	 */
	signatory: string = "";
	
	constructor(
		id: ulong,
		name: string,
		states: Map<DispatchStepStatus, DispatchStepState>,
		eta: Date,
		duration: TimeSpan | timespan | number,
		place: ulong,
		address: string,
		latlng: LatLng | ILatLng | null,
		notes: string,
		signature: boolean,
		signatory: string
	) {
		this.id = ID(id);
		this.address = address || "";
		this.duration = new TimeSpan(duration);
		this.eta = DATE(eta);
		this.latlng = LatLng.fromJSON(latlng);
		this.name = name || "";
		this.notes = notes || "";
		this.placeId = ID(place);
		this.signature = !!signature;
		this.signatory = signatory || "";
		this.states = states ?? new Map;
	}

	toJSON(): any {
		return {
			"id": this.id || null,
			"address": this.address || "",
			"duration": this.duration?.toString() ?? null,
			"eta": this.eta.toISOString(),
			"latlng": this.latlng?.toJSON() ?? null,
			"name": this.name || "",
			"notes": this.notes || "",
			"place": this.placeId || null,
			"signature": !!this.signature,
			"signatory": this.signatory || "",
			"states": MAP_TO_OBJECT(this.states),
		};
	}
}