import { ISerializable } from "../../API/Interfaces/ISerializable";
import { codified, JsonObject, nothing } from "../../API/Types";
import { PermissionLevel } from "./PermissionLevel";

/**
 * Describes the changes in state that raised the escalation.
 */
export class PermissionEscalationState implements ISerializable{
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
		level?: PermissionLevel | nothing,
		labels?: codified[] | nothing,
	) {
		this.level = level || null;
		this.labels = labels || null;
	}

	toJSON(): JsonObject {
		return {
			"level": this.level,
			"labels": this.labels?.slice() ?? null,
		};
	}
}