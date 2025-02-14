import { FLOAT } from "../../API/Constants";
import { ID, IS_AN, JSON_NUMBER, ROUND_TO } from "../../API/Functions";
import { MERGE } from "../../API/Objects";
import { byte, double, ulong } from "../../API/Types";
import { FormFieldType } from "../FormFieldType";
import { FormFieldBase } from "./FormFieldBase";
import { FormFieldNumericSize } from "./FormFieldNumericSize";

/**
 * A numeric value input control with multiple contexts available.
 *  <remarks>
 * For this field, the {@link FormFieldBase.kind} is just a helper for the UI, and does not affect input validation.
 *  </remarks>
 */
export class FormFieldNumeric
	extends FormFieldBase {
	/**
	 * These are the numeric control types.
	 */
	protected override get supported(): FormFieldType[] {
		return [
			FormFieldType.numeric,
			FormFieldType.range,
			FormFieldType.distance,
			FormFieldType.area,
			FormFieldType.temperature,
			FormFieldType.weight,
			FormFieldType.volume,
			FormFieldType.pressure,
			FormFieldType.speed,
			FormFieldType.fuelEconomy,
			FormFieldType.currency,
		];
	}
	/**
	 * A context hint for the kind of numeric size for this field.
	 * Used only for {@link FormFieldType.distance}, {@link FormFieldType.weight}, {@link FormFieldType.volume},
	 * and {@link FormFieldType.speed}.
	 */
	size: FormFieldNumericSize;
	/**
	 * Number of decimal places of accuracy are required.
	 */
	precision: byte;
	/**
	 * The numeric value increments by this amount.
	 */
	step: double;
	/**
	 * An optional suffix for this numeric value, like "%" or "ppm".
	 * This value is ignored for {@link FormFieldType.distance}, {@link FormFieldType.weight},
	 *  {@link FormFieldType.volume}, {@link FormFieldType.speed}, and {@link FormFieldType.area} field types.
	 * And for {@link FormFieldType.currency} fields it acts as a prefix, like "$" or "USD".
	 */
	units: string;
	/**
	 * The (optional) minimum value.
	 */
	minimum: double;
	/**
	 * The (optional) maximum value.
	 */
	maximum: double;

	constructor(
		id?: ulong,
		name?: string,
		kind?: FormFieldType,
		size?: FormFieldNumericSize,
		precision?: byte,
		step?: double,
		units?: string,
		minimum?: double,
		maximum?: double,
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
		this.size = FormFieldNumericSize[size as FormFieldNumericSize] ?? FormFieldNumericSize.medium;
		this.precision = ID(precision);
		this.step = FLOAT(step as any);
		this.units = units || "";
		this.minimum = FLOAT(minimum as any);
		this.maximum = FLOAT(maximum as any);
	}
	override toJSON(): any {
		return MERGE(super.toJSON(), {
			"size": FormFieldNumericSize[this.size] ?? FormFieldNumericSize.medium,
			"precision": JSON_NUMBER(this.precision),
			"step": JSON_NUMBER(this.step),
			"units": this.units || "",
			"minimum": JSON_NUMBER(this.minimum),
			"maximum": JSON_NUMBER(this.maximum),
		});
	}
	override isValid(value: string): boolean {
		let min = this.minimum,
			max = this.maximum,
			number = FLOAT(value),
			success = IS_AN(number);
		if (success) {
			number = ROUND_TO(number, this.precision);
			if (IS_AN(min)) min = ROUND_TO(min, this.precision);
			if (IS_AN(max)) max = ROUND_TO(max, this.precision);
		}
		return success
			&& (!IS_AN(min) || min <= number)
			&& (!IS_AN(max) || max >= number);
	}
}