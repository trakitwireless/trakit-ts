import { MERGE } from '../API/Objects';
import { AlertPriority } from './AlertPriority';
import { MessageBase } from './MessageBase';

/**
 * An automatically generated notification sent to a user by the system.
 */
export class AssetAlert
	extends MessageBase {
	/**
	 * The priority for which this message must send.
	 */
	priority: AlertPriority;

	override toJSON() {
		return MERGE(
			super.toJSON(),
			{
				"priority": AlertPriority[this.priority] || AlertPriority.normal,
			}
		);
	}
	override fromJSON(json: any, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"]) || !!(force && json);
		super.fromJSON(json, update);
		if (update) {
			this.priority = AlertPriority[json["folder"] as AlertPriority] || AlertPriority.normal;
		}
		return update;
	}
}