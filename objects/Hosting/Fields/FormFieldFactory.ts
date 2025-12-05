import { JSON_TO_MAP } from '../../API/Functions';
import { byte, datetime, double, timespan, ulong, ushort, JsonObject } from '../../API/Types';
import { FormFieldType } from '../FormFieldType';
import { FormFieldAttachments } from './FormFieldAttachments';
import { FormFieldBase } from './FormFieldBase';
import { FormFieldBoolean } from './FormFieldBoolean';
import { FormFieldChoice } from './FormFieldChoice';
import { FormFieldDate } from './FormFieldDate';
import { FormFieldNumeric } from './FormFieldNumeric';
import { FormFieldNumericSize } from './FormFieldNumericSize';
import { FormFieldSignature } from './FormFieldSignature';
import { FormFieldText } from './FormFieldText';
import { FormFieldTime } from './FormFieldTime';
import { FormFieldTimezone } from './FormFieldTimezone';

/**
 * Instantiates a form field based on the kind property in the given JSON.
 * This is added to FormFieldBase to avoid circular dependencies.
 * @param json 
 */
FormFieldBase.fromJSON = function(json: JsonObject): FormFieldBase {
		switch (json["kind"]) {
			case FormFieldType.text:
				return new FormFieldText(
					json["id"] as ulong,
					json["name"] as string,
					json["rows"] as byte,
					json["minimum"] as ushort,
					json["maximum"] as ushort,
					json["notes"] as string,
					json["required"] as boolean,
					json["value"] as string | null,
					json["editable"] as boolean,
				);
			case FormFieldType.choice:
			case FormFieldType.dropdown:
				return new FormFieldChoice(
					json["id"] as ulong,
					json["name"] as string,
					json["kind"] as FormFieldType,
					JSON_TO_MAP(json["choices"] as object),
					json["minimum"] as byte,
					json["maximum"] as byte,
					json["notes"] as string,
					json["required"] as boolean,
					json["value"] as string | null,
					json["editable"] as boolean,
				);
			case FormFieldType.checkbox:
			case FormFieldType.toggle:
				return new FormFieldBoolean(
					json["id"] as ulong,
					json["name"] as string,
					json["kind"] as FormFieldType,
					json["choices"] as string[],
					json["notes"] as string,
					json["required"] as boolean,
					json["value"] as string | null,
					json["editable"] as boolean,
				);
			case FormFieldType.area:
			case FormFieldType.numeric:
			case FormFieldType.range:
			case FormFieldType.distance:
			case FormFieldType.temperature:
			case FormFieldType.weight:
			case FormFieldType.volume:
			case FormFieldType.pressure:
			case FormFieldType.speed:
			case FormFieldType.fuelEconomy:
			case FormFieldType.currency:
				return new FormFieldNumeric(
					json["id"] as ulong,
					json["name"] as string,
					json["kind"] as FormFieldType,
					json["size"] as FormFieldNumericSize,
					json["precision"] as byte,
					json["step"] as double,
					json["units"] as string,
					json["minimum"] as double,
					json["maximum"] as double,
					json["notes"] as string,
					json["required"] as boolean,
					json["value"] as string | null,
					json["editable"] as boolean,
				);
			case FormFieldType.datetime:
			case FormFieldType.date:
				return new FormFieldDate(
					json["id"] as ulong,
					json["name"] as string,
					json["kind"] as FormFieldType,
					json["minimum"] as datetime,
					json["maximum"] as datetime,
					json["notes"] as string,
					json["required"] as boolean,
					json["value"] as string | null,
					json["editable"] as boolean,
				);
			case FormFieldType.duration:
			case FormFieldType.time:
				return new FormFieldTime(
					json["id"] as ulong,
					json["name"] as string,
					json["kind"] as FormFieldType,
					json["minimum"] as timespan,
					json["maximum"] as timespan,
					json["notes"] as string,
					json["required"] as boolean,
					json["value"] as string | null,
					json["editable"] as boolean,
				);
			case FormFieldType.signature:
				return new FormFieldSignature(
					json["id"] as ulong,
					json["name"] as string,
					json["notes"] as string,
					json["required"] as boolean,
					json["value"] as string | null,
					json["editable"] as boolean,
				);
			case FormFieldType.pictures:
			case FormFieldType.files:
				return new FormFieldAttachments(
					json["id"] as ulong,
					json["name"] as string,
					json["kind"] as FormFieldType,
					json["minimum"] as byte,
					json["maximum"] as byte,
					json["notes"] as string,
					json["required"] as boolean,
					json["value"] as string | null,
					json["editable"] as boolean,
				);
			case FormFieldType.timezone:
				return new FormFieldTimezone(
					json["id"] as ulong,
					json["name"] as string,
					json["notes"] as string,
					json["required"] as boolean,
					json["value"] as string | null,
					json["editable"] as boolean,
				);
			default:
				throw new Error("kind unsupported");
		}
};
