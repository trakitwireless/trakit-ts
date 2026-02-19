import { JsonObject, int } from '../../API/Types';
import { BillableHostingBase } from './BillableHostingBase';
import { BillableHostingType } from './BillableHostingType';

/**
 * A discount rule for assets
 * @deprecated Never implemented.
 */
export class BillableHostingDiscount
	extends BillableHostingBase {
	/**
	 * The type of services being discounted.
	 */
	services: BillableHostingType[] = [];
	/**
	 * When true, the amount is used as a percentage value instead of a currency values.
	 */
	percentage: boolean = false;

	constructor(json?: JsonObject) {
		super();
		if (json) this.fromJSON(json);
	}
	override toJSON() {
		return {
			...super.toJSON(),
			"services": [...this.services],
			"percentage": !!this.percentage,
		};
	}
	override fromJSON(json: JsonObject, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"] as int[]) || !!(force && json);
		super.fromJSON(json, update);
		if (update) {
			this.services = [...(json["services"] as BillableHostingType[] || [])];
			this.percentage = !!json["percentage"];
		}
		return update;
	}
}