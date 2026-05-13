import { nothing } from './Types';
/**
 * A common structure used to implement searching throughout the system.
 * The input format is described in the {@link /wss/#format-expression|WebSocket reference}.
 */
export declare class SearchPattern {
    /**
     * Creates an array of {@link SearchPattern}s for easier matching.  Used for doing OR matching.
     * @param expression
     */
    static parse(expression?: string | nothing): SearchPattern[];
    /**
     * Creates a single string from the given array of {@link SearchPattern}s for easier serialization.
     * @param patterns
     */
    static stringify(patterns?: SearchPattern[] | nothing): string | null;
    /**
     * To help qualify matches, all operators must match for the search to be
     * considered matched.
     * Operators are formatted as "operator:terms".
     */
    operators: Map<string, string[]>;
    /**
     * If any term matches, then the search should be considered matched.
     * Terms are any string contained by single/double-quotes or not parsed as an
     * operator.
     */
    terms: string[];
    constructor(pattern?: string);
    /**
     * True when this pattern will match all.
     */
    get wildcard(): boolean;
    /**
     * Returns a re-parseable string representation of the pattern.
     */
    toString(): string;
    /**
     *
     */
    toJSON: () => string;
    /**
     * Returns a new, identical instance of the pattern.
     */
    copy(): SearchPattern;
}
//# sourceMappingURL=SearchPattern.d.ts.map