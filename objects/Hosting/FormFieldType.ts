import { SystemsOfUnits } from '../Accounts/SystemsOfUnits';
import { FormFieldAttachments } from './Fields/FormFieldAttachments';
import { FormFieldBoolean } from './Fields/FormFieldBoolean';
import { FormFieldChoice } from './Fields/FormFieldChoice';
import { FormFieldDate } from './Fields/FormFieldDate';
import { FormFieldNumeric } from './Fields/FormFieldNumeric';
import { FormFieldSignature } from './Fields/FormFieldSignature';
import { FormFieldText } from './Fields/FormFieldText';
import { FormFieldTime } from './Fields/FormFieldTime';
import { FormFieldTimezone } from './Fields/FormFieldTimezone';
import { FormTemplate } from './FormTemplate';

/**
 * The supported types of user interface modules for a {@link FormTemplate}.
 */
export enum FormFieldType {
	/**
	 * Any text input.
	 * {@link FormFieldText}
	 */
	text = "text",
	/**
	 * A choice of one (or more) values defined.
	 * {@link FormFieldChoice}
	 */
	choice = "choice",
	/**
	 * A drop-down or fly-out UI for choosing a single value.
	 * Works better than {@link choice} when there are a lot of values. ie; country or province list.
	 * {@link FormFieldChoice}
	 */
	dropdown = "dropdown",

	/**
	 * A check mark to represent a boolean value.
	 * {@link FormFieldBoolean}
	 */
	checkbox = "checkbox",
	/**
	 * A toggle box to represent one of two possible values (optionally defined).
	 * {@link FormFieldBoolean}
	 */
	toggle = "toggle",

	/**
	 * Numeric (optionally decimal) input.
	 * {@link FormFieldNumeric}
	 */
	numeric = "numeric",
	/**
	 * A slider bar to choose a numeric value between a given high and low value.
	 * {@link FormFieldNumeric}
	 */
	range = "range",
	/**
	 * A numeric value of distance (for easy conversion between {@link SystemsOfUnits.metric} and {@link SystemsOfUnits.standard}).
	 * {@link FormFieldNumeric}
	 */
	distance = "distance",
	/**
	 * A numeric value of area (for easy conversion between {@link SystemsOfUnits.metric} and {@link SystemsOfUnits.standard}).
	 * {@link FormFieldNumeric}
	 */
	area = "area",
	/**
	 * A numeric value of temperature (for easy conversion between {@link SystemsOfUnits.metric} and {@link SystemsOfUnits.standard}).
	 * {@link FormFieldNumeric}
	 */
	temperature = "temperature",
	/**
	 * A numeric value of weight (for easy conversion between {@link SystemsOfUnits.metric} and {@link SystemsOfUnits.standard}).
	 * {@link FormFieldNumeric}
	 */
	weight = "weight",
	/**
	 * A numeric value of volume (for easy conversion between {@link SystemsOfUnits.metric} and {@link SystemsOfUnits.standard}).
	 * {@link FormFieldNumeric}
	 */
	volume = "volume",
	/**
	 * A numeric value of pressure (for easy conversion between {@link SystemsOfUnits.metric} and {@link SystemsOfUnits.standard}).
	 * {@link FormFieldNumeric}
	 */
	pressure = "pressure",
	/**
	 * A numeric value of speed (for easy conversion between {@link SystemsOfUnits.metric} and {@link SystemsOfUnits.standard}).
	 * {@link FormFieldNumeric}
	 */
	speed = "speed",
	/**
	 * A numeric value of fuel economy (for easy conversion between {@link SystemsOfUnits.metric} and {@link SystemsOfUnits.standard}).
	 * {@link FormFieldNumeric}
	 */
	fuelEconomy = "fuelEconomy",
	/**
	 * A numeric value representing an amount of money.
	 * {@link FormFieldNumeric}
	 */
	currency = "currency",

	/**
	 * A date and time picker.
	 * {@link FormFieldDate}
	 */
	datetime = "datetime",
	/**
	 * A calendar/date picker.
	 * {@link FormFieldDate}
	 */
	date = "date",
	/**
	 * A clock/time picker.
	 * {@link FormFieldTime}
	 */
	time = "time",
	/**
	 * A duration picker.
	 * Different than {@link time} because a duration can be negative, or longer than 24 hours.
	 * {@link FormFieldTime}
	 */
	duration = "duration",

	/**
	 * Area to capture a signature bitmap.
	 * {@link FormFieldSignature}
	 */
	signature = "signature",
	/**
	 * A browser of {@link Picture}s that can be attached.
	 * {@link FormFieldAttachments}
	 */
	pictures = "pictures",
	/**
	 * A browser of {@link Document}s that can be attached.
	 * {@link FormFieldAttachments}
	 */
	files = "files",
	/**
	 * A list of {@link Timezone}s.
	 * {@link FormFieldTimezone}
	 */
	timezone = "timezone",
}