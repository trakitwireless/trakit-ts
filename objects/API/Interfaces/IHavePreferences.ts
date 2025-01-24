import { codified } from '../Types';
import { Timezone } from '../Timezone';
import { SystemsOfUnits } from '../../Accounts/SystemsOfUnits';

/**
 * This interface exists so that I can work with Machine and UserGeneral objects the same way.
*/
export interface IHavePreferences {
	/**
	 * The local timezone for this object.
	 */
	timezone: Timezone;
	/**
	 * Preferred region/language for the UI and notifications.
	 * Valid formats use &lt;ISO 639-1&gt;&lt;dash&gt;&lt;ISO 3166-2&gt; such as "fr-CA" or "en-US".
	 */
	language: codified;
	/**
	 * The format strings defining the preferred way to display ambiguous values.
	 */
	formats: Map<codified, string>;
	/**
	 * Preferred way of displaying ambiguous numbers in the context of measurements.
	 */
	measurements: Map<codified, SystemsOfUnits>;
	/**
	 * Additional options which do not fit in with the formats or measurements preferences.
	 */
	options: Map<codified, string>;
}