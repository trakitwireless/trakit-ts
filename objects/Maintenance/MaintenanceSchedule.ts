import { BaseComponent } from "../API/BaseComponent";
import { FLOAT } from "../API/Constants";
import { ID, IS_AN, MAP_TO_OBJECT_VALUE_JSON, OBJECT_TO_MAP_BY_PREDICATE } from "../API/Functions";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { INamed } from "../API/Interfaces/INamed";
import { IVisual } from "../API/Interfaces/IVisual";
import { TimeSpan } from "../API/TimeSpan";
import { codified, colour, double, int, uint, ulong } from "../API/Types";
import { Asset } from "../Assets/Asset";
import { Company } from "../Companies/Company";
import { COMPANIES } from "../Storage";
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
	 *  <override max-length="100" />
	 */
	name: string = "";
	/**
	 * Notes about the work to be done.  Like "change the oil and oil filter".
	 */
	notes: string = "";
	/**
	 * The targeting expression to select which Vehicles and Trailers require this maintenance work.
	 */
	targets: string = "";
	/**
	 * List of Users to send notifications.
	 *  <override>
	 *  <values format="email">
	 * {@link User.login}
	 *  </values>
	 *  </override>
	 */
	notify: string[] = [];

	/**
	 * The fill/background colour of the icon.
	 *  <override max-length="22" format="colour" />
	 */
	fill: colour = "";
	/**
	 * Outline and graphic colour.
	 *  <override max-length="22" format="colour" />
	 */
	stroke: colour = "";
	/**
	 * The name of the symbol for this schedule.
	 *  <override max-length="22" format="codified" />
	 */
	graphic: codified = "";

	/**
	 * The number of days in advance to predict a job will become pending.
	 *  <override min-value="5" max-value="180" />
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
	 *  <override>
	 *  <keys>
	 * {@link Asset.id}
	 *  </keys>
	 *  </override>
	 */
	intervals: Map<ulong, MaintenanceInterval> = new Map;

	// ------------ repair details ------------
	/**
	 * The name of the garage or service facility where the work is done.
	 *  <override max-length="100" />
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
	 * A reference code used to track this job
	 *  <override max-length="100" />
	 */
	reference: string = "";

	override toJSON() {
		return {
			"id": this.id || null,
			"v": this.v,
			"company": this.companyId,
			"name": this.name || "",
			"notes": this.notes || "",
			"notify": [...this.notify],
			"targets": this.targets || "",
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
			"intervals": MAP_TO_OBJECT_VALUE_JSON(this.intervals),
		};
	}
	override fromJSON(json: any, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"]) || !!(force && json);
		if (update) {
			if (!IS_AN(this.id)) this.id = ID(json["id"]);
			this.companyId = ID(json["company"]);
			this.name = json["name"] || "";
			this.notes = json["notes"] || "";
			this.notify = json["notify"] || [];
			this.targets = json["targets"] || "*";
			this.fill = json["fill"] || "";
			this.stroke = json["stroke"] || "";
			this.graphic = json["graphic"] || "";
			this.garage = json["garage"] || "";
			this.cost = FLOAT(json["cost"]);
			this.duration = new TimeSpan(json["duration"]);
			this.reference = json["reference"] || "";
			this.predictionDays = ID(json["predictionDays"]) || DEFAULT_PREDICTION_DAYS;
			this.recurDays = ID(json["recurDays"]);
			this.recurDistance = FLOAT(json["recurDistance"]);
			this.recurEngineHours = FLOAT(json["recurEngineHours"]);
			this.intervals = OBJECT_TO_MAP_BY_PREDICATE(
				json["intervals"] || {},
				(k, v) => [ID(k), MaintenanceInterval.fromJSON(v)]
			);
		}
		return update;
	}

	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey(): string { return this.id.toString(); }
}