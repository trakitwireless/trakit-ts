
import { ARRAY_TO_JSON } from "../../API/Arrays";
import { ID, IS_AN, JSON_NUMBER } from "../../API/Functions";
import { INamed } from "../../API/Interfaces/INamed";
import { ISerializable } from "../../API/Interfaces/ISerializable";
import { ulong } from "../../API/Types";
import { Company } from "../../Companies/Company";
import { COMPANIES } from "../../Storage";
import { BillingReportHostingSummary } from "./BillingReportHostingSummary";
/**
 * Summarized bill per target.
 */
export class BillingReportSummary
	implements INamed, ISerializable {
	static fromJSON(json: any) {
		return new BillingReportSummary(
			json["target"],
			json["parent"],
			json["name"],
			json["notes"],
			((json["hosting"] || []) as any[])?.map(BillingReportHostingSummary.fromJSON)
		);
	}

	/**
	 * The target company to which this summary instance belongs.
	 * {@link Company.id}
	 */
	targetId: ulong = NaN;
	/**
	 * The target company to which this summary instance belongs.
	 * {@link Company.id}
	 */
	get target(): Company { return COMPANIES.get(this.targetId) as Company; }
	/**
	 * The target company's parent.
	 * {@link Company.id}
	 */
	parentId: ulong = NaN;
	/**
	 * The target company's parent.
	 * {@link Company.id}
	 */
	get parent(): Company { return COMPANIES.get(this.parentId) as Company; }
	/**
	 * Target's name.
	 *  <override max-length="100" />
	 */
	name: string = "";
	/**
	 * Notes about the target.
	 */
	notes: string = "";
	/**
	 * Summary contains totals per type of hosting (services and licenses) for this target
	 */
	hosting: BillingReportHostingSummary[] = [];

	constructor(
		target?: ulong,
		parent?: ulong,
		name?: string,
		notes?: string,
		hosting?: BillingReportHostingSummary[]
	) {
		this.targetId = ID(target);
		this.parentId = ID(parent);
		this.name = name || "";
		this.notes = notes || "";
		this.hosting = [...(hosting || [])];
	}
	
	toJSON() {
		return {
			"target": JSON_NUMBER(this.targetId),
			"parent": JSON_NUMBER(this.parentId),
			"name": this.name || "",
			"notes": this.notes || "",
			"hosting": this.hosting?.map(ARRAY_TO_JSON) ?? [],
		}
	}
}