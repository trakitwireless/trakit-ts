/**
 * A generic converter from one {@link UserMeasurementPreference} to another.
 * Does not convert from one size to another in the same {@link UserMeasurementPreference}.
 * Units must be given in equivalent sizes ie: gallons to litres, kilometers to miles.
 * @param number
 * @param fromUnit
 * @param toUnit
 */
export declare function CONVERT_FROM_TO(number: number, fromUnit: string, toUnit: string): number;
/**
 * Value in square meters converted to square feet.
 * @param area
 */
export declare function CONVERT_SQM_TO_SQFT(area: number): number;
/**
 * Value in square meters converted to square yards.
 * @param area
 */
export declare function CONVERT_SQM_TO_YARDS(area: number): number;
/**
 * Value in square kilometres converted to square miles.
 * @param area
 */
export declare function CONVERT_SQKM_TO_SQMI(area: number): number;
/**
 * Value in hectares converted to acres.
 * @param area
 */
export declare function CONVERT_HECTARE_TO_ACRE(area: number): number;
/**
 * Value in square feet converted to square meters.
 * @param area
 */
export declare function CONVERT_SQFT_TO_SQM(area: number): number;
/**
 * Value in square feet converted to square yards.
 * @param area
 */
export declare function CONVERT_YARDS_TO_SQM(area: number): number;
/**
 * Value in square miles converted to square kilometres.
 * @param area
 */
export declare function CONVERT_SQMI_TO_SQKM(area: number): number;
/**
 * Value in acres converted to hectares.
 * @param area
 */
export declare function CONVERT_ACRE_TO_HECTARE(area: number): number;
/**
 * Value in kilometres converted to miles.
 * @param distance
 */
export declare function CONVERT_KILOMETRES_TO_MILES(distance: number): number;
/**
 * Value in metres converted to yards.
 * @param distance
 */
export declare function CONVERT_METRES_TO_YARDS(distance: number): number;
/**
 * Value in metres converted to feet.
 * @param distance
 */
export declare function CONVERT_METRES_TO_FEET(distance: number): number;
/**
 * Value in centimetres converted to inches.
 * @param distance
 */
export declare function CONVERT_CENTIMETRES_TO_INCHES(distance: number): number;
/**
 * Value in miles converted to kilometres.
 * @param distance
 */
export declare function CONVERT_MILES_TO_KILOMETRES(distance: number): number;
/**
 * Value in yards converted to metres.
 * @param distance
 */
export declare function CONVERT_YARDS_TO_METRES(distance: number): number;
/**
 * Value in feet converted to metres.
 * @param distance
 */
export declare function CONVERT_FEET_TO_METRES(distance: number): number;
/**
 * Value in inches converted to centimetres.
 * @param distance
 */
export declare function CONVERT_INCHES_TO_CENTIMETRES(distance: number): number;
/**
 * Value in kilo-pascals converted to pounds per square inch.
 * @param pressure
 */
export declare function CONVERT_KPA_TO_PSI(pressure: number): number;
/**
 * Value in pounds per square inch converted to kilo-pascals.
 * @param pressure
 */
export declare function CONVERT_PSI_TO_KPA(pressure: number): number;
/**
 * Value in Celsius converted to Fahrenheit.
 * @param temperature
 */
export declare function CONVERT_CELCIUS_TO_FAHRENHEIT(temperature: number): number;
/**
 * Value in Fahrenheit converted to Celsius.
 * @param temperature
 */
export declare function CONVERT_FAHRENHEIT_TO_CELCIUS(temperature: number): number;
/**
 * Value in litres converted to US standard gallons.
 * @param volume
 */
export declare function CONVERT_LITRES_TO_GALLONS_US(volume: number): number;
/**
 * Value in litres converted to British gallons.
 * @param volume
 */
export declare function CONVERT_LITRES_TO_GALLONS_UK(volume: number): number;
/**
 * Value in millilitres converted to US standard fluid ounces.
 * @param volume
 */
export declare function CONVERT_MILLILITRES_TO_OUNCES_US(volume: number): number;
/**
 * Value in millilitres converted to British fluid ounces.
 * @param volume
 */
export declare function CONVERT_MILLILITRES_TO_OUNCES_UK(volume: number): number;
/**
 * Value in US standard gallons converted to litres.
 * @param volume
 */
export declare function CONVERT_GALLONS_US_TO_LITRES(volume: number): number;
/**
 * Value in British gallons converted to litres.
 * @param volume
 */
export declare function CONVERT_GALLONS_UK_TO_LITRES(volume: number): number;
/**
 * Value in US standard fluid ounces converted to millilitres.
 * @param volume
 */
export declare function CONVERT_OUNCES_US_TO_MILLILITRES(volume: number): number;
/**
 * Value in British fluid ounces converted to millilitres.
 * @param volume
 */
export declare function CONVERT_OUNCES_UK_TO_MILLILITRES(volume: number): number;
/**
 * Value in kilograms converted to pounds.
 * @param weight
 */
export declare function CONVERT_KG_TO_LBS(weight: number): number;
/**
 * Value in grams converted to ounces.
 * @param weight
 */
export declare function CONVERT_GRAM_TO_OZ(weight: number): number;
/**
 * Value in metric tonnes converted to US (short) tons.
 * @param weight
 */
export declare function CONVERT_TONNE_TO_TON_US(weight: number): number;
/**
 * Value in metric tonnes converted to British (long) tons.
 * @param weight
 */
export declare function CONVERT_TONNE_TO_TON_UK(weight: number): number;
/**
 * Value in pounds converted to kilograms.
 * @param weight
 */
export declare function CONVERT_LBS_TO_KG(weight: number): number;
/**
 * Value in ounces converted to grams.
 * @param weight
 */
export declare function CONVERT_OZ_TO_GRAM(weight: number): number;
/**
 * Value in US (short) tons converted to metric tonnes.
 * @param weight
 */
export declare function CONVERT_TON_US_TO_TONNE(weight: number): number;
/**
 * Value in British (long) tons converted to metric tonnes.
 * @param weight
 */
export declare function CONVERT_TON_UK_TO_TONNE(weight: number): number;
/**
 * Returns the corollary of either miles per US standard gallon or litres per 100 kilometres.
 * @param fuelEconomy
 */
export declare function CONVERT_BETWEEN_MPGUS_AND_L100KM(fuelEconomy: number): number;
/**
 * Returns the corollary of either miles per British gallon or litres per 100 kilometres.
 * @param fuelEconomy
 */
export declare function CONVERT_BETWEEN_MPGUK_AND_L100KM(fuelEconomy: number): number;
/**
 * Returns the corollary of either miles per kilowatt hour or kilowatt hour per 100 kilometres.
 * @param electricEconomy
 */
export declare function CONVERT_BETWEEN_MPKWH_AND_KWH100KM(electricEconomy: number): number;
export declare const CONVERT: {
    fromTo: typeof CONVERT_FROM_TO;
    sqmToSqft: typeof CONVERT_SQM_TO_SQFT;
    sqftToSqm: typeof CONVERT_SQFT_TO_SQM;
    sqmToSqy: typeof CONVERT_SQM_TO_YARDS;
    yftToSqm: typeof CONVERT_YARDS_TO_SQM;
    sqkmToSqmi: typeof CONVERT_SQKM_TO_SQMI;
    sqmiToSqkm: typeof CONVERT_SQMI_TO_SQKM;
    haToAc: typeof CONVERT_HECTARE_TO_ACRE;
    acToHa: typeof CONVERT_ACRE_TO_HECTARE;
    kmToMi: typeof CONVERT_KILOMETRES_TO_MILES;
    miToKm: typeof CONVERT_MILES_TO_KILOMETRES;
    mToYd: typeof CONVERT_METRES_TO_YARDS;
    ydToM: typeof CONVERT_YARDS_TO_METRES;
    mToFt: typeof CONVERT_METRES_TO_FEET;
    ftToM: typeof CONVERT_FEET_TO_METRES;
    cmToIn: typeof CONVERT_CENTIMETRES_TO_INCHES;
    inToCm: typeof CONVERT_INCHES_TO_CENTIMETRES;
    mpgToL100km: typeof CONVERT_BETWEEN_MPGUS_AND_L100KM;
    mpgUKToL100km: typeof CONVERT_BETWEEN_MPGUK_AND_L100KM;
    mpkwhToKwh100kim: typeof CONVERT_BETWEEN_MPKWH_AND_KWH100KM;
    l100kmToMpg: typeof CONVERT_BETWEEN_MPGUS_AND_L100KM;
    l100kmToMpgUK: typeof CONVERT_BETWEEN_MPGUK_AND_L100KM;
    kwh100kimToMpkwh: typeof CONVERT_BETWEEN_MPKWH_AND_KWH100KM;
    kpaToPsi: typeof CONVERT_KPA_TO_PSI;
    psiToKpa: typeof CONVERT_PSI_TO_KPA;
    kphToMph: typeof CONVERT_KILOMETRES_TO_MILES;
    mphToKph: typeof CONVERT_MILES_TO_KILOMETRES;
    mpsToFtps: typeof CONVERT_METRES_TO_FEET;
    ftpsToMps: typeof CONVERT_FEET_TO_METRES;
    cmpsToInps: typeof CONVERT_CENTIMETRES_TO_INCHES;
    inpsToCmps: typeof CONVERT_INCHES_TO_CENTIMETRES;
    cToF: typeof CONVERT_CELCIUS_TO_FAHRENHEIT;
    fToC: typeof CONVERT_FAHRENHEIT_TO_CELCIUS;
    lToGal: typeof CONVERT_LITRES_TO_GALLONS_US;
    lToGalUK: typeof CONVERT_LITRES_TO_GALLONS_UK;
    galToL: typeof CONVERT_GALLONS_US_TO_LITRES;
    galUKToL: typeof CONVERT_GALLONS_UK_TO_LITRES;
    mlToFloz: typeof CONVERT_MILLILITRES_TO_OUNCES_US;
    mlToFlozUK: typeof CONVERT_MILLILITRES_TO_OUNCES_UK;
    flozToMl: typeof CONVERT_OUNCES_US_TO_MILLILITRES;
    flozUKToMl: typeof CONVERT_OUNCES_UK_TO_MILLILITRES;
    kgToLbs: typeof CONVERT_KG_TO_LBS;
    lbsToKg: typeof CONVERT_LBS_TO_KG;
    gToOz: typeof CONVERT_GRAM_TO_OZ;
    ozToG: typeof CONVERT_OZ_TO_GRAM;
    tToTon: typeof CONVERT_TONNE_TO_TON_US;
    tonToT: typeof CONVERT_TON_US_TO_TONNE;
    tToTonUK: typeof CONVERT_TONNE_TO_TON_UK;
    tonUKToT: typeof CONVERT_TON_UK_TO_TONNE;
};
//# sourceMappingURL=Conversion.d.ts.map