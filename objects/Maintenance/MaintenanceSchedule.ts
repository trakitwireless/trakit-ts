import { BaseComponent } from "../API/BaseComponent";
import { FLOAT } from "../API/Constants";
import { ID, IS_AN, JSON_TO_MAP_BY_PREDICATE, MAP_TO_JSON } from "../API/Functions";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { INamed } from "../API/Interfaces/INamed";
import { IVisual } from "../API/Interfaces/IVisual";
import { SearchPattern } from "../API/SearchPattern";
import { TimeSpan } from "../API/TimeSpan";
import { codified, colour, double, email, int, JsonObject, timespan, uint, ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { COMPANIES } from "../storage";
import { MaintenanceInterval } from "./MaintenanceInterval";

/**
 * Default threshold (in days) to create pending jobs.
 */
const DEFAULT_PREDICTION_DAYS: int = 14;

/**
 * Recurring service work
 */
export class MaintenanceSchedule
	extends BaseComponent
	implements IIdUlong, INamed, IBelongCompany, IVisual {
	/**
	 * Unique identifier
	 */
	id: ulong = NaN;
	/**
	 * The company to which this schedule belongs
	 * {@link Company.id}
	 */
	companyId: ulong = NaN;
	/**
	 * The company to which this schedule belongs
	 * {@link Company.id}
	 */
	get company(): Company { return COMPANIES.get(this.companyId) as Company; }
	/**
	 * The name of the work to be done.  Like "oil change".
	 */
	name: string = "";
	/**
	 * Notes about the work to be done.  Like "change the oil and oil filter".
	 */
	notes: string = "";
	/**
	 * The targeting expression to select which Vehicles and Trailers require this maintenance work.
	 */
	targets: SearchPattern[] | null = null;
	/**
	 * List of Users to send notifications.
	 */
	notify: email[] = [];

	/**
	 * The fill/background colour of the icon.
	 */
	fill: colour = "";
	/**
	 * Outline and graphic colour.
	 */
	stroke: colour = "";
	/**
	 * The name of the symbol for this schedule.
	 */
	graphic: codified = "";

	/**
	 * The number of days in advance to predict a job will become pending.
	 */
	predictionDays: uint = DEFAULT_PREDICTION_DAYS;
	/**
	 * The number of days between service visits.
	 */
	recurDays: uint = NaN;
	/**
	 * The amount of mileage between service visits.
	 */
	recurDistance: double = NaN;
	/**
	 * The number of operating hours between service visits.
	 */
	recurEngineHours: double = NaN;
	/**
	 * The per-asset details calculated by the system to help predict the creation of Maintenance Jobs.
	 */
	intervals: Map<ulong, MaintenanceInterval> = new Map;

	// ------------ repair details ------------
	/**
	 * The name of the garage or service facility where the work is done.
	 */
	garage: string = "";
	/**
	 * The estimated time for the job.
	 */
	duration: TimeSpan = new TimeSpan;
	/**
	 * The estimated cost for the job cost in dollars.
	 */
	cost: double = NaN;
	/**
	 * A reference code used to track this job.
	 */
	reference: string = "";

	override toJSON() {
		return {
			"id": this.id || null,
			"v": [...this.v],
			"company": this.companyId,
			"name": this.name || "",
			"notes": this.notes || "",
			"notify": [...this.notify],
			"targets": SearchPattern.stringify(this.targets),
			"fill": this.fill || "",
			"stroke": this.stroke || "",
			"graphic": this.graphic || "",
			"garage": this.garage || "",
			"cost": this.cost || 0,
			"duration": this.duration.toString(),
			"reference": this.reference || "",
			"predictionDays": this.predictionDays || DEFAULT_PREDICTION_DAYS,
			"recurDays": this.recurDays || null,
			"recurDistance": this.recurDistance || null,
			"recurEngineHours": this.recurEngineHours || null,
			"intervals": MAP_TO_JSON(this.intervals),
		};
	}
	override fromJSON(json: JsonObject, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"] as int[]) || !!(force && json);
		if (update) {
			if (!IS_AN(this.id)) this.id = ID(json["id"]);
			this.companyId = ID(json["company"]);
			this.name = json["name"] as string || "";
			this.notes = json["notes"] as string || "";
			this.notify = json["notify"] as email[] || [];
			this.targets = SearchPattern.parse(json["targets"] as string);
			this.fill = json["fill"] as string || "";
			this.stroke = json["stroke"] as string || "";
			this.graphic = json["graphic"] as string || "";
			this.garage = json["garage"] as string || "";
			this.cost = FLOAT(json["cost"] as any);
			this.duration = new TimeSpan(json["duration"] as timespan);
			this.reference = json["reference"] as string || "";
			this.predictionDays = ID(json["predictionDays"]) || DEFAULT_PREDICTION_DAYS;
			this.recurDays = ID(json["recurDays"]);
			this.recurDistance = FLOAT(json["recurDistance"] as any);
			this.recurEngineHours = FLOAT(json["recurEngineHours"] as any);
			this.intervals = JSON_TO_MAP_BY_PREDICATE(
				json["intervals"] as JsonObject || {},
				(k, v) => [ID(k), MaintenanceInterval.fromJSON(v)]
			);
		}
		return update;
	}

	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey() { return this.id; }
}