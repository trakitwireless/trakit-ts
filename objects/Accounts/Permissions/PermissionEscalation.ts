import { codified, ulong } from "../../API/Types";
import { PermissionEscalationState } from "./PermissionEscalationState";
import { PermissionEscalationType } from "./PermissionEscalationType";
import { PermissionLevel } from "./PermissionLevel";
import { PermissionType } from "./PermissionType";

/**
 * Used to throw permission escalation exceptions, this is similar to a {@link Permission},
 * but defines a {@link before} and {@link after} for a proposed change.
 */
export class PermissionEscalation {
	/**
	 * Gets the direction of the escalation.
	 */
	direction: PermissionEscalationType;
	/**
	 * The {@link Company} that this permission targets.
	 * {@link Company.id}
	 */
	company: ulong;
	/**
	 * The type of permission.
	 */
	kind: PermissionType;
	/**
	 * Effective permission after the proposed change.
	 */
	after: PermissionEscalationState;
	/**
	 * Effective permission before the proposed change.
	 */
	before: PermissionEscalationState;

	constructor(
		direction: PermissionEscalationType,
		company: ulong,
		kind: PermissionType,
		levelAfter: PermissionLevel,
		labelsAfter: codified[] | null,
		levelBefore?: PermissionLevel,
		labelsBefore?: codified[] | null
	) {
		this.direction = direction;
		this.company = company;
		this.kind = kind;
		this.after = new PermissionEscalationState(levelAfter, labelsAfter);
		this.before = new PermissionEscalationState(levelBefore, labelsBefore);
	}
}