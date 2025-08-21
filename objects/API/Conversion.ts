/**
 * Signature of conversion functions.
 */
interface ConvertFunction {
	(value: number): number
}

/**
 * A generic converter from one {@link UserMeasurementPreference} to another.
 * Does not convert from one size to another in the same {@link UserMeasurementPreference}.
 * Units must be given in equivalent sizes ie: gallons to litres, kilometers to miles.
 * @param number
 * @param fromUnit
 * @param toUnit
 **/
export function CONVERT_FROM_TO(number: number, fromUnit: string, toUnit: string): number {
	const converter: ConvertFunction = (CONVERT as any)[fromUnit.toLowerCase() + "To" + toUnit[0].toUpperCase() + toUnit.slice(1).toLowerCase()];
	if (!converter || converter === CONVERT_FROM_TO) throw new Error("No converter for " + fromUnit + " to " + toUnit);
	return converter(number);
}

//#region Conversion - Area
const CONVERT_SQM_PER_SQFT = 10.7639104167097216,
	CONVERT_SQM_PER_YARDS = CONVERT_SQM_PER_SQFT / 3,
	CONVERT_SQKM_PER_SQMI = 0.3861021585424458752,
	CONVERT_HECTARE_PER_ACRE = 2.4710538146716532736;

/**
 * Value in square meters converted to square feet.
 * @param area
 */
export function CONVERT_SQM_TO_SQFT(area: number): number { return area * CONVERT_SQM_PER_SQFT; }
/**
 * Value in square meters converted to square yards.
 * @param area
 */
export function CONVERT_SQM_TO_YARDS(area: number): number { return area * CONVERT_SQM_PER_YARDS; }
/**
 * Value in square kilometres converted to square miles.
 * @param area
 */
export function CONVERT_SQKM_TO_SQMI(area: number): number { return area * CONVERT_SQKM_PER_SQMI; }
/**
 * Value in hectares converted to acres.
 * @param area
 */
export function CONVERT_HECTARE_TO_ACRE(area: number): number { return area * CONVERT_HECTARE_PER_ACRE; }

/**
 * Value in square feet converted to square meters.
 * @param area
 */
export function CONVERT_SQFT_TO_SQM(area: number): number { return area / CONVERT_SQM_PER_SQFT; }
/**
 * Value in square feet converted to square yards.
 * @param area
 */
export function CONVERT_YARDS_TO_SQM(area: number): number { return area / CONVERT_SQM_PER_YARDS; }
/**
 * Value in square miles converted to square kilometres.
 * @param area
 */
export function CONVERT_SQMI_TO_SQKM(area: number): number { return area / CONVERT_KM_PER_MILE; }
/**
 * Value in acres converted to hectares.
 * @param area
 */
export function CONVERT_ACRE_TO_HECTARE(area: number): number { return area / CONVERT_KM_PER_MILE; }
//#endregion Conversion - Area
//#region Conversion - Distance
const CONVERT_KM_PER_MILE = 0.6213711922373338,
	CONVERT_METER_PER_FOOT = 3.2808398950131232768,
	CONVERT_METER_PER_YARD = CONVERT_METER_PER_FOOT / 3,	//1.0936132983377078;
	CONVERT_CENTIRMETER_PER_INCH = 0.3937007874015748096;

/**
 * Value in kilometres converted to miles.
 * @param distance
 */
export function CONVERT_KILOMETRES_TO_MILES(distance: number): number { return distance * CONVERT_KM_PER_MILE; }
/**
 * Value in metres converted to yards.
 * @param distance
 */
export function CONVERT_METRES_TO_YARDS(distance: number): number { return distance * CONVERT_METER_PER_YARD; }
/**
 * Value in metres converted to feet.
 * @param distance
 */
export function CONVERT_METRES_TO_FEET(distance: number): number { return distance * CONVERT_METER_PER_FOOT; }
/**
 * Value in centimetres converted to inches.
 * @param distance
 */
export function CONVERT_CENTIMETRES_TO_INCHES(distance: number): number { return distance * CONVERT_CENTIRMETER_PER_INCH; }

/**
 * Value in miles converted to kilometres.
 * @param distance
 */
export function CONVERT_MILES_TO_KILOMETRES(distance: number): number { return distance / CONVERT_KM_PER_MILE; }
/**
 * Value in yards converted to metres.
 * @param distance
 */
export function CONVERT_YARDS_TO_METRES(distance: number): number { return distance / CONVERT_METER_PER_YARD; }
/**
 * Value in feet converted to metres.
 * @param distance
 */
export function CONVERT_FEET_TO_METRES(distance: number): number { return distance / CONVERT_METER_PER_FOOT; }
/**
 * Value in inches converted to centimetres.
 * @param distance
 */
export function CONVERT_INCHES_TO_CENTIMETRES(distance: number): number { return distance / CONVERT_CENTIRMETER_PER_INCH; }
//#endregion Conversion - Distance
//#region Conversion - Pressure
const CONVERT_KPA_PER_PSI = 0.14503773773375084544;

/**
 * Value in kilo-pascals converted to pounds per square inch.
 * @param pressure
 */
export function CONVERT_KPA_TO_PSI(pressure: number): number { return pressure * CONVERT_KPA_PER_PSI; }
/**
 * Value in pounds per square inch converted to kilo-pascals.
 * @param pressure
 */
export function CONVERT_PSI_TO_KPA(pressure: number): number { return pressure / CONVERT_KPA_PER_PSI; }
//#endregion Conversion - Pressure
//#region Conversion - Speed


// use distance


//#endregion Conversion - Speed
//#region Conversion - Temperature
const DEGREE_F_PER_C = 5 / 9,
	DEGREE_C_PER_F = 9 / 5,
	DEGREES_OFFSET = 32;

/**
 * Value in Celsius converted to Fahrenheit.
 * @param temperature
 */
export function CONVERT_CELCIUS_TO_FAHRENHEIT(temperature: number): number { return (temperature * DEGREE_C_PER_F) + DEGREES_OFFSET; }
/**
 * Value in Fahrenheit converted to Celsius.
 * @param temperature
 */
export function CONVERT_FAHRENHEIT_TO_CELCIUS(temperature: number): number { return (temperature - DEGREES_OFFSET) * DEGREE_F_PER_C; }
//#endregion Conversion - Temperature
//#region Conversion - Volume
const CONVERT_LITRE_PER_GALLON_US = 0.2641720523581484032,
	CONVERT_MILLILITRE_PER_OUNCE_US = 0.0338140227018429952,
	CONVERT_LITRE_PER_GALLON_UK = 0.2199692482990877952,
	CONVERT_MILLILITRE_PER_OUNCE_UK = 0.0351950797278540416;

/**
 * Value in litres converted to US standard gallons.
 * @param volume
 */
export function CONVERT_LITRES_TO_GALLONS_US(volume: number): number { return volume * CONVERT_LITRE_PER_GALLON_US; }
/**
 * Value in litres converted to British gallons.
 * @param volume
 */
export function CONVERT_LITRES_TO_GALLONS_UK(volume: number): number { return volume * CONVERT_LITRE_PER_GALLON_UK; }
/**
 * Value in millilitres converted to US standard fluid ounces.
 * @param volume
 */
export function CONVERT_MILLILITRES_TO_OUNCES_US(volume: number): number { return volume * CONVERT_MILLILITRE_PER_OUNCE_US; }
/**
 * Value in millilitres converted to British fluid ounces.
 * @param volume
 */
export function CONVERT_MILLILITRES_TO_OUNCES_UK(volume: number): number { return volume * CONVERT_MILLILITRE_PER_OUNCE_UK; }
/**
 * Value in US standard gallons converted to litres.
 * @param volume
 */
export function CONVERT_GALLONS_US_TO_LITRES(volume: number): number { return volume / CONVERT_LITRE_PER_GALLON_US; }
/**
 * Value in British gallons converted to litres.
 * @param volume
 */
export function CONVERT_GALLONS_UK_TO_LITRES(volume: number): number { return volume / CONVERT_LITRE_PER_GALLON_UK; }
/**
 * Value in US standard fluid ounces converted to millilitres.
 * @param volume
 */
export function CONVERT_OUNCES_US_TO_MILLILITRES(volume: number): number { return volume / CONVERT_MILLILITRE_PER_OUNCE_US; }
/**
 * Value in British fluid ounces converted to millilitres.
 * @param volume
 */
export function CONVERT_OUNCES_UK_TO_MILLILITRES(volume: number): number { return volume / CONVERT_MILLILITRE_PER_OUNCE_UK; }
//#endregion Conversion - Volume
//#region Conversion - Weight
const CONVERT_KG_PER_LBS = 2.2046226218487757,
	CONVERT_GRAM_PER_OZ = 0.0352739619495804096,
	CONVERT_TONNE_PER_TON_US = 1.1023113109243879424,	// wikipedia says 0.90718474
	CONVERT_TONNE_PER_TON_UK = 0.9842065276110606336;	// wikipedia says 1.0160469

/**
 * Value in kilograms converted to pounds.
 * @param weight
 */
export function CONVERT_KG_TO_LBS(weight: number): number { return weight * CONVERT_KG_PER_LBS; }
/**
 * Value in grams converted to ounces.
 * @param weight
 */
export function CONVERT_GRAM_TO_OZ(weight: number): number { return weight * CONVERT_GRAM_PER_OZ; }
/**
 * Value in metric tonnes converted to US (short) tons.
 * @param weight
 */
export function CONVERT_TONNE_TO_TON_US(weight: number): number { return weight * CONVERT_TONNE_PER_TON_US; }
/**
 * Value in metric tonnes converted to British (long) tons.
 * @param weight
 */
export function CONVERT_TONNE_TO_TON_UK(weight: number): number { return weight * CONVERT_KG_PER_LBS; }

/**
 * Value in pounds converted to kilograms.
 * @param weight
 */
export function CONVERT_LBS_TO_KG(weight: number): number { return weight / CONVERT_TONNE_PER_TON_UK; }
/**
 * Value in ounces converted to grams.
 * @param weight
 */
export function CONVERT_OZ_TO_GRAM(weight: number): number { return weight / CONVERT_GRAM_PER_OZ; }
/**
 * Value in US (short) tons converted to metric tonnes.
 * @param weight
 */
export function CONVERT_TON_US_TO_TONNE(weight: number): number { return weight / CONVERT_TONNE_PER_TON_US; }
/**
 * Value in British (long) tons converted to metric tonnes.
 * @param weight
 */
export function CONVERT_TON_UK_TO_TONNE(weight: number): number { return weight / CONVERT_TONNE_PER_TON_UK; }
//#endregion Conversion - Weight
//#region Conversion - Fuel Economy
const CONVERT_MPG_PER_L100KM = CONVERT_LITRE_PER_GALLON_US * CONVERT_KM_PER_MILE * 100,
	CONVERT_MPGUK_PER_L100KM = CONVERT_LITRE_PER_GALLON_UK * CONVERT_KM_PER_MILE * 100;

/**
 * Returns the corollary of either miles per US standard gallon or litres per 100 kilometres.
 * @param fuelEconomy
 */
export function CONVERT_BETWEEN_MPGUS_AND_L100KM(fuelEconomy: number): number { return CONVERT_MPG_PER_L100KM / fuelEconomy; }
/**
 * Returns the corollary of either miles per British gallon or litres per 100 kilometres.
 * @param fuelEconomy
 */
export function CONVERT_BETWEEN_MPGUK_AND_L100KM(fuelEconomy: number): number { return CONVERT_MPGUK_PER_L100KM / fuelEconomy; }

/**
 * Returns the corollary of either miles per kilowatt hour or kilowatt hour per 100 kilometres.
 * @param electricEconomy
 **/
export function CONVERT_BETWEEN_MPKWH_AND_KWH100KM(electricEconomy: number): number { return (100 / (1 / CONVERT_KM_PER_MILE)) / electricEconomy; }
//#endregion Conversion - Fuel Economy

export const CONVERT = {
	// generic
	"fromTo": CONVERT_FROM_TO,

	// area
	"sqmToSqft": CONVERT_SQM_TO_SQFT,
	"sqftToSqm": CONVERT_SQFT_TO_SQM,
	"sqmToSqy": CONVERT_SQM_TO_YARDS,
	"yftToSqm": CONVERT_YARDS_TO_SQM,
	"sqkmToSqmi": CONVERT_SQKM_TO_SQMI,
	"sqmiToSqkm": CONVERT_SQMI_TO_SQKM,
	"haToAc": CONVERT_HECTARE_TO_ACRE,
	"acToHa": CONVERT_ACRE_TO_HECTARE,

	// distance
	"kmToMi": CONVERT_KILOMETRES_TO_MILES,
	"miToKm": CONVERT_MILES_TO_KILOMETRES,
	"mToYd": CONVERT_METRES_TO_YARDS,
	"ydToM": CONVERT_YARDS_TO_METRES,
	"mToFt": CONVERT_METRES_TO_FEET,
	"ftToM": CONVERT_FEET_TO_METRES,
	"cmToIn": CONVERT_CENTIMETRES_TO_INCHES,
	"inToCm": CONVERT_INCHES_TO_CENTIMETRES,
	// fuel (converstions are symetrical; aka same export function does conversion both ways)
	"mpgToL100km": CONVERT_BETWEEN_MPGUS_AND_L100KM,
	"mpgUKToL100km": CONVERT_BETWEEN_MPGUK_AND_L100KM,
	"mpkwhToKwh100kim": CONVERT_BETWEEN_MPKWH_AND_KWH100KM,
	"l100kmToMpg": CONVERT_BETWEEN_MPGUS_AND_L100KM,
	"l100kmToMpgUK": CONVERT_BETWEEN_MPGUK_AND_L100KM,
	"kwh100kimToMpkwh": CONVERT_BETWEEN_MPKWH_AND_KWH100KM,
	// pressure
	"kpaToPsi": CONVERT_KPA_TO_PSI,
	"psiToKpa": CONVERT_PSI_TO_KPA,
	// speed
	"kphToMph": CONVERT_KILOMETRES_TO_MILES,
	"mphToKph": CONVERT_MILES_TO_KILOMETRES,
	"mpsToFtps": CONVERT_METRES_TO_FEET,
	"ftpsToMps": CONVERT_FEET_TO_METRES,
	"cmpsToInps": CONVERT_CENTIMETRES_TO_INCHES,
	"inpsToCmps": CONVERT_INCHES_TO_CENTIMETRES,
	// temperature
	"cToF": CONVERT_CELCIUS_TO_FAHRENHEIT,
	"fToC": CONVERT_FAHRENHEIT_TO_CELCIUS,
	// volume
	"lToGal": CONVERT_LITRES_TO_GALLONS_US,
	"lToGalUK": CONVERT_LITRES_TO_GALLONS_UK,
	"galToL": CONVERT_GALLONS_US_TO_LITRES,
	"galUKToL": CONVERT_GALLONS_UK_TO_LITRES,
	"mlToFloz": CONVERT_MILLILITRES_TO_OUNCES_US,
	"mlToFlozUK": CONVERT_MILLILITRES_TO_OUNCES_UK,
	"flozToMl": CONVERT_OUNCES_US_TO_MILLILITRES,
	"flozUKToMl": CONVERT_OUNCES_UK_TO_MILLILITRES,

	// weight
	"kgToLbs": CONVERT_KG_TO_LBS,
	"lbsToKg": CONVERT_LBS_TO_KG,
	"gToOz": CONVERT_GRAM_TO_OZ,
	"ozToG": CONVERT_OZ_TO_GRAM,
	"tToTon": CONVERT_TONNE_TO_TON_US,
	"tonToT": CONVERT_TON_US_TO_TONNE,
	"tToTonUK": CONVERT_TONNE_TO_TON_UK,
	"tonUKToT": CONVERT_TON_UK_TO_TONNE,
};