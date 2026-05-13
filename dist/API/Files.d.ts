/**
 * Groups digits of a number together to make a more human readable version.
 * @param number The number to be prettified
 * @param size				Quantity of digits per number group.  The default is 3.
 * @param delimiter			Character(s) to use to divide the integer groups.  The detauls is ",".
 * @param decimalDelimiter	Character(s) to use to divide the decimal groups.  The detauls is same as delimiter.
 * @param point			Character(s) to use to divide the integer groups from the decimal groups. The detauls is ".".
 * @throws {TypeError}				size must be greater than zero
 */
export declare function NUMBER_GROUPS(number: number, size?: number, delimiter?: string, decimalDelimiter?: string, point?: string): string;
/**
 * Creates a more human readable string representation of the filesize.
 * @param bytes
 * @param places			The number of decimal places.  Default is 0.
 * @param maxScale			Largest size-scale to use for representing the file-size.  Default is "MB" (Megabyte), can be a value between 0 (Byte) and 6 (Exabyte).
 * @param groupSize			Quantity of digits per number group.  The default is 3.
 * @param groupDelimiter	Character(s) to use to divide the integer groups.  The detauls is ",".
 * @param decimalDelimiter	Character(s) to use to divide the decimal groups.  The detauls is same as delimiter.
 * @param point				Character(s) to use to divide the integer groups from the decimal groups. The detauls is ".".
 * */
export declare function FILESIZE_HELPER(bytes: number, places?: number, maxScale?: string, groupSize?: number, groupDelimiter?: string, decimalDelimiter?: string, point?: string): string;
//# sourceMappingURL=Files.d.ts.map