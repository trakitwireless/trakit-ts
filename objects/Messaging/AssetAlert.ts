import { JsonObject, int } from '../API/Types';
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
	priority: AlertPriority = AlertPriority.normal;

	override toJSON() {
		return {
			...super.toJSON(),
			"priority": AlertPriority[this.priority] || AlertPriority.normal,
		};
	}
	override fromJSON(json: JsonObject, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"] as int[]) || !!(force && json);
		super.fromJSON(json, update);
		if (update) {
			this.priority = AlertPriority[json["folder"] as AlertPriority] || AlertPriority.normal;
		}
		return update;
	}
}