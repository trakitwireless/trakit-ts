import { MERGE } from '../../API/Objects';
import { BillableHostingBase } from './BillableHostingBase';
import { BillableHostingType } from './BillableHostingType';

/**
 * A billing rule for assets
 */
export class BillableHostingRule
	extends BillableHostingBase {
	/**
	 * The type of service being billed.
	 */
	service: BillableHostingType = BillableHostingType.asset;

	override toJSON(): any {
		return MERGE(super.toJSON(), {
			"service": BillableHostingType[this.service],
		});
	}
	override fromJSON(json: any, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"]) || !!(force && json);
		super.fromJSON(json, update);
		if (update) {
			this.service = BillableHostingType[json["kind"] as BillableHostingType];
		}
		return update;
	}
}