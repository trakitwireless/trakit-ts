import { ARRAY_TO_IDS } from "../API/Arrays";
import { BaseComponent } from "../API/BaseComponent";
import { FLOAT } from "../API/Constants";
import { DATE, ID, IS_AN, JSON_DATE, JSON_NUMBER } from "../API/Functions";
import { IBelongAsset } from "../API/Interfaces/IBelongAsset";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { INamed } from "../API/Interfaces/INamed";
import { IPictured } from "../API/Interfaces/IPictured";
import { MAP_FILTERED_BY_KEYS } from "../API/Maps";
import { TimeSpan } from "../API/TimeSpan";
import { datetime, double, int, JsonObject, nothing, timespan, ulong } from "../API/Types";
import { Asset } from "../Assets/Asset";
import { Company } from "../Companies/Company";
import { Picture } from "../Images/Picture";
import { ASSETS, COMPANIES, MAINTENANCE_SCHEDULES, PICTURES } from "../storage";
import { MaintenanceJobStatus } from "./MaintenanceJobStatus";
import { MaintenanceSchedule } from "./MaintenanceSchedule";

/**
 * Default threshold (in minutes) for the valid completion date of jobs.
 */
const DEFAULT_COMPLETED_THRESHOLD_MINUTES: int = 10;

/**
 * Historical service work performed on a Vehicle or Trailer
 */
export class MaintenanceJob
	extends BaseComponent
	implements IIdUlong, INamed, IBelongCompany, IBelongAsset, IPictured {
	/**
	 * Unique identifier
	 */
	id: ulong = NaN;
	/**
	 * The Vehicle or Trailer to which this job belongs
	 * {@link Asset.id}
	 */
	assetId: ulong = NaN;
	/**
	 * The Vehicle or Trailer to which this job belongs
	 */
	get asset(): Asset { return ASSETS.get(this.assetId) as Asset; }
	/**
	 * The company to which this Vehicle or Trailer belongs
	 * {@link Company.id}
	 */
	companyId: ulong = NaN;
	/**
	 * The {@link Company} to which this Vehicle or Trailer belongs
	 */
	get company(): Company { return COMPANIES.get(this.companyId) as Company; }
	/**
	 * The Maintenance Schedule from which this job was created
	 * {@link MaintenanceSchedule.id}
	 */
	scheduleId: ulong = NaN;
	/**
	 * The Maintenance Schedule from which this job was created
	 * {@link MaintenanceSchedule.id}
	 */
	get schedule(): MaintenanceSchedule { return MAINTENANCE_SCHEDULES.get(this.scheduleId) as MaintenanceSchedule; }
	set schedule(value: MaintenanceSchedule) { this.scheduleId = value?.id; }

	/**
	 * The work being done. Like "oil change".
	 */
	name: string = "";
	/**
	 * Notes about the job.  Like "changed the oil and filter".
	 */
	notes: string = "";
	/**
	 * The status of this job.
	 */
	status: MaintenanceJobStatus = MaintenanceJobStatus.pending;
	/**
	 * When was this job created.
	 */
	created: Date = DATE();
	/**
	 * When was this job created.
	 */
	completed: Date = DATE();
	/**
	 * The odometer at the time of the service.
	 */
	odometer: double = NaN;
	/**
	 * The operating time at the time of the service.
	 */
	engineHours: double = NaN;

	// ------------ repair details ------------
	/**
	 * The name of the garage or service facility where the work is done.
	 */
	garage: string = "";
	/**
	 * Time it took to complete the job.
	 */
	duration: TimeSpan = new TimeSpan;
	/**
	 * How much the job cost in dollars.
	 */
	cost: double = NaN;
	/**
	 * A reference code used to track this job
	 */
	reference: string = "";
	/**
	 * The mechanic who performed the work.
	 */
	technician: string = "";
	/**
	 * Images taken while performing the work for reference.
	 * {@link Picture.id}
	 */
	pictureIds: ulong[] = [];
	/**
	 * {@link Picture}s taken while performing the work for reference.
	 */
	get pictures(): Picture[] { return MAP_FILTERED_BY_KEYS(PICTURES, this.pictureIds); }
	set pictures(values: Picture[]) { this.pictureIds = values?.map(ARRAY_TO_IDS) ?? []; }

	constructor(json?: JsonObject | nothing) {
		super();
		if (json) this.fromJSON(json);
	}
	override toJSON() {
		return {
			"id": this.id || null,
			"v": [...this.v],
			"company": JSON_NUMBER(this.companyId),
			"asset": this.assetId,
			"schedule": this.scheduleId,
			"name": this.name || "",
			"notes": this.notes || "",
			"status": this.status,
			"created": JSON_DATE(this.created),
			"completed": JSON_DATE(this.completed),
			"odometer": this.odometer,
			"engineHours": this.engineHours,
			"garage": this.garage,
			"cost": this.cost,
			"duration": this.duration.toString(),
			"reference": this.reference,
			"technician": this.technician,
			"pictures": [...this.pictureIds],
		};
	}
	override fromJSON(json: JsonObject, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"] as int[]) || !!(force && json);
		if (update) {
			if (!IS_AN(this.id)) this.id = ID(json["id"]);
			this.companyId = ID(json["company"]);
			this.assetId = ID(json["asset"]);
			this.scheduleId = ID(json["schedule"]);
			this.name = json["name"] as string || "";
			this.notes = json["notes"] as string || "";
			this.status = MaintenanceJobStatus[json["status"] as MaintenanceJobStatus] || MaintenanceJobStatus.pending;
			this.created = DATE(json["created"] as datetime);
			this.completed = DATE(json["completed"] as datetime);
			this.odometer = FLOAT(json["odometer"] as any);
			this.engineHours = FLOAT(json["engineHours"] as any);
			this.garage = json["garage"] as string || "";
			this.cost = FLOAT(json["cost"] as any);
			this.duration = new TimeSpan(json["duration"] as timespan);
			this.reference = json["reference"] as string || "";
			this.technician = json["technician"] as string || "";
			this.pictureIds = (json["pictures"] as ulong[] || []).map(ID);
		}
		return update;
	}

	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey() { return this.id; }
}