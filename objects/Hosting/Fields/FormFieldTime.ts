import { IS_AN, IS_NOTHING } from "../../API/Functions";
import { MERGE } from "../../API/Objects";
import { TimeSpan } from "../../API/TimeSpan";
import { timespan, ulong } from "../../API/Types";
import { FormFieldType } from "../FormFieldType";
import { FormFieldBase } from "./FormFieldBase";

/**
 * A control to choose a time or duration longer than 24 hours.
 */
export class FormFieldTime
	extends FormFieldBase {
	/**
	 * For a 24 hour day, anything negative span would be considered invalid.
	 * As such, the minimum time for a {@link FormFieldType.time} is midnight (zero).
	 */
	static readonly MINIMUM_TIME_OF_DAY = TimeSpan.fromDays(0);
	/**
	 * For a 24 hour day, anything over a 24 hour span would be considered invalid.
	 * As such, the maximum time for a {@link FormFieldType.time} is midnight the next day.
	 */
	static readonly MAXIMUM_TIME_OF_DAY = TimeSpan.fromDays(1);
	
	/**
	 * These are the clock control types.
	 */
	protected override get supported(): FormFieldType[] {
		return [
			FormFieldType.time,
			FormFieldType.duration,
		];
	}
	/**
	 * The minimum duration or earliest time-of-day.
	 */
	minimum: TimeSpan | null;
	/**
	 * The maximum duration or latest time-of-day.
	 */
	maximum: TimeSpan | null;
	
	constructor(
		id?: ulong,
		name?: string,
		kind?: FormFieldType,
		minimum?: TimeSpan | timespan | number,
		maximum?: TimeSpan | timespan | number,
		notes?: string,
		required?: boolean,
		value?: string | null,
		editable?: boolean
	) {
		super(
			id,
			name,
			kind,
			notes,
			required,
			value,
			editable
		);
		this.minimum = minimum || IS_AN(minimum) ? new TimeSpan(minimum) : null;
		this.maximum = maximum || IS_AN(maximum) ? new TimeSpan(maximum) : null;
	}

	override toJSON() {
		return MERGE(super.toJSON(), {
			"minimum": IS_AN(this.minimum?.valueOf())
				? this.minimum.toString()
				: null,
			"maximum": IS_AN(this.maximum?.valueOf())
				? this.maximum.toString()
				: null,
		});
	}
	override isValid(value: string): boolean {
		let success = !IS_NOTHING(value),
			time = new TimeSpan(value),
			min = this.minimum,
			max = this.maximum;
		if (success && this.kind == FormFieldType.time) {
			if (!IS_AN(min?.valueOf()) || min < FormFieldTime.MINIMUM_TIME_OF_DAY) min = FormFieldTime.MINIMUM_TIME_OF_DAY;
			if (!IS_AN(max?.valueOf()) || max > FormFieldTime.MAXIMUM_TIME_OF_DAY) max = FormFieldTime.MAXIMUM_TIME_OF_DAY;
		}
		return success
			&& (!IS_AN(min?.valueOf()) || min <= time)
			&& (!IS_AN(max?.valueOf()) || max >= time);
	}
}