
	/// <summary>
	/// The supported types of user interface modules for a <see cref="FormTemplate"/>.
	/// </summary>
	export enum FormFieldType {
		/// <summary>
		/// Any text input.
		/// </summary>
		/// <seealso cref="FormFieldText"/>
		text,
		/// <summary>
		/// A choice of one (or more) values defined.
		/// </summary>
		/// <seealso cref="FormFieldChoice"/>
		choice,
		/// <summary>
		/// A drop-down or fly-out UI for choosing a single value.
		/// Works better than <see cref="choice"/> when there are a lot of values. ie; country or province list.
		/// </summary>
		/// <seealso cref="FormFieldChoice"/>
		dropdown,

		/// <summary>
		/// A check mark to represent a booleanean value.
		/// </summary>
		/// <seealso cref="FormFieldBoolean"/>
		checkbox,
		/// <summary>
		/// A toggle box to represent one of two possible values (optionally defined).
		/// </summary>
		/// <seealso cref="FormFieldBoolean"/>
		toggle,

		/// <summary>
		/// Numeric (optionally decimal) input.
		/// </summary>
		/// <seealso cref="FormFieldNumeric"/>
		numeric,
		/// <summary>
		/// A slider bar to choose a numeric value between a given high and low value.
		/// </summary>
		/// <seealso cref="FormFieldNumeric"/>
		range,
		/// <summary>
		/// A numeric value of distance (for easy conversion between <see cref="SystemsOfUnits.metric"/> and <see cref="SystemsOfUnits.standard"/>).
		/// </summary>
		/// <seealso cref="FormFieldNumeric"/>
		distance,
		/// <summary>
		/// A numeric value of area (for easy conversion between <see cref="SystemsOfUnits.metric"/> and <see cref="SystemsOfUnits.standard"/>).
		/// </summary>
		/// <seealso cref="FormFieldNumeric"/>
		area,
		/// <summary>
		/// A numeric value of temperature (for easy conversion between <see cref="SystemsOfUnits.metric"/> and <see cref="SystemsOfUnits.standard"/>).
		/// </summary>
		/// <seealso cref="FormFieldNumeric"/>
		temperature,
		/// <summary>
		/// A numeric value of weight (for easy conversion between <see cref="SystemsOfUnits.metric"/> and <see cref="SystemsOfUnits.standard"/>).
		/// </summary>
		/// <seealso cref="FormFieldNumeric"/>
		weight,
		/// <summary>
		/// A numeric value of volume (for easy conversion between <see cref="SystemsOfUnits.metric"/> and <see cref="SystemsOfUnits.standard"/>).
		/// </summary>
		/// <seealso cref="FormFieldNumeric"/>
		volume,
		/// <summary>
		/// A numeric value of pressure (for easy conversion between <see cref="SystemsOfUnits.metric"/> and <see cref="SystemsOfUnits.standard"/>).
		/// </summary>
		/// <seealso cref="FormFieldNumeric"/>
		pressure,
		/// <summary>
		/// A numeric value of speed (for easy conversion between <see cref="SystemsOfUnits.metric"/> and <see cref="SystemsOfUnits.standard"/>).
		/// </summary>
		/// <seealso cref="FormFieldNumeric"/>
		speed,
		/// <summary>
		/// A numeric value of fuel economy (for easy conversion between <see cref="SystemsOfUnits.metric"/> and <see cref="SystemsOfUnits.standard"/>).
		/// </summary>
		/// <seealso cref="FormFieldNumeric"/>
		fuelEconomy,
		/// <summary>
		/// A numeric value representing an amount of money.
		/// </summary>
		/// <seealso cref="FormFieldNumeric"/>
		currency,

		/// <summary>
		/// A date and time picker.
		/// </summary>
		/// <seealso cref="FormFieldDate"/>
		datetime,
		/// <summary>
		/// A calendar/date picker.
		/// </summary>
		/// <seealso cref="FormFieldDate"/>
		date,
		/// <summary>
		/// A clock/time picker.
		/// </summary>
		/// <seealso cref="FormFieldTime"/>
		time,
		/// <summary>
		/// A duration picker.
		/// Different than <see cref="time"/> because a duration can be negative, or longer than 24 hours.
		/// </summary>
		/// <seealso cref="FormFieldTime"/>
		duration,

		/// <summary>
		/// Area to capture a signature bitmap.
		/// </summary>
		/// <seealso cref="FormFieldSignature"/>
		signature,
		/// <summary>
		/// A browser of <see cref="Picture"/>s that can be attached.
		/// </summary>
		/// <seealso cref="FormFieldAttachments"/>
		pictures,
		/// <summary>
		/// A browser of <see cref="Document"/>s that can be attached.
		/// </summary>
		/// <seealso cref="FormFieldAttachments"/>
		files,
		/// <summary>
		/// A list of <see cref="Timezone"/>s.
		/// </summary>
		/// <seealso cref="FormFieldTimezone"/>
		timezone,
	}