import { codified } from "../../API/Types";
import { PermissionLevel } from "./PermissionLevel";

/**
 * Describes the changes in state that raised the escalation.
 */
export class PermissionEscalationState {
	/**
	 * The level of access defined before the proposed change.
	 */
	level: PermissionLevel | null;
	/**
	 * Codified names of {@link LabelStyle}s.
	 * If list is empty, this permission applies for all labels.
	 */
	labels: codified[] | null;

	constructor(
		level?: PermissionLevel | null,
		labels?: codified[] | null
	) {
		this.level = level || null;
		this.labels = labels || null;
	}
}