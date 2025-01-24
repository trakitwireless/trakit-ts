
	/**
	 * The supported types of user interface modules for a <see cref="FormTemplate"/>.
	 */
	export enum FormFieldType {
		/**
		 * Any text input.
		 * {@link FormFieldText}
		 */
		text,
		/**
		 * A choice of one (or more) values defined.
		 * {@link FormFieldChoice}
		 */
		choice,
		/**
		 * A drop-down or fly-out UI for choosing a single value.
		 * Works better than <see cref="choice"/> when there are a lot of values. ie; country or province list.
		 * {@link FormFieldChoice}
		 */
		dropdown,

		/**
		 * A check mark to represent a booleanean value.
		 * {@link FormFieldBoolean}
		 */
		checkbox,
		/**
		 * A toggle box to represent one of two possible values (optionally defined).
		 * {@link FormFieldBoolean}
		 */
		toggle,

		/**
		 * Numeric (optionally decimal) input.
		 * {@link FormFieldNumeric}
		 */
		numeric,
		/**
		 * A slider bar to choose a numeric value between a given high and low value.
		 * {@link FormFieldNumeric}
		 */
		range,
		/**
		 * A numeric value of distance (for easy conversion between <see cref="SystemsOfUnits.metric"/> and <see cref="SystemsOfUnits.standard"/>).
		 * {@link FormFieldNumeric}
		 */
		distance,
		/**
		 * A numeric value of area (for easy conversion between <see cref="SystemsOfUnits.metric"/> and <see cref="SystemsOfUnits.standard"/>).
		 * {@link FormFieldNumeric}
		 */
		area,
		/**
		 * A numeric value of temperature (for easy conversion between <see cref="SystemsOfUnits.metric"/> and <see cref="SystemsOfUnits.standard"/>).
		 * {@link FormFieldNumeric}
		 */
		temperature,
		/**
		 * A numeric value of weight (for easy conversion between <see cref="SystemsOfUnits.metric"/> and <see cref="SystemsOfUnits.standard"/>).
		 * {@link FormFieldNumeric}
		 */
		weight,
		/**
		 * A numeric value of volume (for easy conversion between <see cref="SystemsOfUnits.metric"/> and <see cref="SystemsOfUnits.standard"/>).
		 * {@link FormFieldNumeric}
		 */
		volume,
		/**
		 * A numeric value of pressure (for easy conversion between <see cref="SystemsOfUnits.metric"/> and <see cref="SystemsOfUnits.standard"/>).
		 * {@link FormFieldNumeric}
		 */
		pressure,
		/**
		 * A numeric value of speed (for easy conversion between <see cref="SystemsOfUnits.metric"/> and <see cref="SystemsOfUnits.standard"/>).
		 * {@link FormFieldNumeric}
		 */
		speed,
		/**
		 * A numeric value of fuel economy (for easy conversion between <see cref="SystemsOfUnits.metric"/> and <see cref="SystemsOfUnits.standard"/>).
		 * {@link FormFieldNumeric}
		 */
		fuelEconomy,
		/**
		 * A numeric value representing an amount of money.
		 * {@link FormFieldNumeric}
		 */
		currency,

		/**
		 * A date and time picker.
		 * {@link FormFieldDate}
		 */
		datetime,
		/**
		 * A calendar/date picker.
		 * {@link FormFieldDate}
		 */
		date,
		/**
		 * A clock/time picker.
		 * {@link FormFieldTime}
		 */
		time,
		/**
		 * A duration picker.
		 * Different than <see cref="time"/> because a duration can be negative, or longer than 24 hours.
		 * {@link FormFieldTime}
		 */
		duration,

		/**
		 * Area to capture a signature bitmap.
		 * {@link FormFieldSignature}
		 */
		signature,
		/**
		 * A browser of <see cref="Picture"/>s that can be attached.
		 * {@link FormFieldAttachments}
		 */
		pictures,
		/**
		 * A browser of <see cref="Document"/>s that can be attached.
		 * {@link FormFieldAttachments}
		 */
		files,
		/**
		 * A list of <see cref="Timezone"/>s.
		 * {@link FormFieldTimezone}
		 */
		timezone,
	}