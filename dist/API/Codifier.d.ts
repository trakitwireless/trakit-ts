import { codified } from "./Types";
/**
 * Creates a searchable/coded string based on a user inputted string.  Quotation marks, apostrophes, and accents are removed.
 * @param input
 */
export declare function CODIFY(input: string): codified;
/**
 * Wraps the {@code input} using the codified {@code terms} with the {@code prefix}s and {@code suffix}s.
 * When a term is found beside a quotation mark or apostrophe, the mark is included inside the highlight.
 * @param input		The string to add HTML highlights to.
 * @param terms		Codified search terms from {@link CODIFY}.
 * @param prefix	Added to the beginning of each of the {@code terms}.
 * @param suffix	Added to the end of each of the {@code terms}.
 */
export declare function HIGHLIGHT(input: string, terms: codified[], [prefix, suffix]?: [string, string]): string;
//# sourceMappingURL=Codifier.d.ts.map