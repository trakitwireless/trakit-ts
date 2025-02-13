import { MERGE } from '../../API/Objects';
import { BillableHostingBase } from './BillableHostingBase';
import { BillableHostingType } from './BillableHostingType';

/**
 * A discount rule for assets
 *  <override skip="true" />
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

	override toJSON(): any {
		return MERGE(super.toJSON(), {
			"services": [...this.services],
			"percentage": !!this.percentage,
		});
	}
	override fromJSON(json: any, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"]) || !!(force && json);
		super.fromJSON(json, update);
		if (update) {
			this.services = [...(json["services"] || [])];
			this.percentage = !!json["percentage"];
		}
		return update;
	}
}