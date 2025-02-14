import { FLOAT } from "../../API/Constants";
import { ID, IS_AN, JSON_NUMBER } from "../../API/Functions";
import { ISerializable } from "../../API/Interfaces/ISerializable";
import { double } from "../../API/Types";

/**
 * Amount billed for a type of hosting (service or license) per target company.
 */
export class BillingReportHostingSummary
	implements ISerializable {
	/**
	 * 
	 * @param json 
	 * @returns 
	 */
	static fromJSON(json: any) {
		return new BillingReportHostingSummary(
			json["sku"],
			FLOAT(json["cost"]),
			ID(json["count"]),
			FLOAT(json["total"])
		);
	}
	/**
	 * SKU being billed
	 */
	sku: string = "";
	/**
	 * Cost per billing cycle for this SKU.
	 */
	cost: double = NaN;
	/**
	 * Number of items for this SKU.
	 */
	count: double = NaN;
	/**
	 * Total amount being billed for this SKU.
	 */
	total: double = NaN;
	
	constructor(
		sku?: string,
		cost?: double,
		count?: double,
		total?: double
	) {
		this.sku = sku || "";
		this.cost = FLOAT(cost as any);
		this.count = ID(count);
		this.total = FLOAT(total as any);
	}

	toJSON() {
		return {
			"sku": this.sku || "",
			"cost": JSON_NUMBER(this.cost),
			"count": JSON_NUMBER(this.count),
			"total": JSON_NUMBER(this.total),
		};
	}
}