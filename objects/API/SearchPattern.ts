import { codify, } from './Codifier';

//#region examples
/*
Operators
	company:		search within a account
	label:		search within a label
	vehicle:		same as assets, but limited to vehicles
	person:		same as assets, but limited to persons
	trailer:		same as assets, but limited to trailers
	asset:		same as assets, but limited to the generic asset type
	cargo:		search for cargo/inventory
	place:		search for a saved place (not a geocoded search)
	at:			search of objects interacting with a place
	at:			search of places interacting with an object
	has:			search of objects related to other objects
?	maintenance:	search for maintenance schedules or jobs
?	report:		search for reports, saved reports, and schedules

Patterns
	* or blank -> everything
	#n -> match the id specifically; no partial matches
	$n -> match identifier/phone number/imei/esn; parital matches ok
	opr:name or opr:"two words" -> find all matching with operator
	opr:one,two or opr:one opr:two -> matching with both terms
?	!opr:name -> matches items that do not match operator
?	opr:one !opr:two -> matches operator one and does not match operator two
	opr:one|opr:two -> operator matches either one or two
	opr:* -> matches everything for the operator
	!opr:* -> matches everything not with operator
anything that does not match these patterns is a search term

Examples
Find everything with the Label inactive (this includes Companies)
	* label:inactive

Find everything not labelled inactive
	* !label:inactive

Find everything labelled inactive AND "Needs Repair"
	label:inactive,needs-repair
	label:inactive label:"Needs Repair"

Find all red Places
	place:$red
	place:$ff0000

Find all un-labelled Assets/Places
	!label:*

Find everything matching the system specific ID 2044
	#2044

Find an Asset matching the system specific ID 2044
	vehicle:#2044

Find all objects at a Place
	at:name

Find Assets at either of two Places (one by name, the other by ID)
	place:"Place Name" | place:#2044

Find the Places with a specific label that contain an Asset
	label:sales has:* 

Find all Persons that are current at a Place
	person:* at:*
*/
//#endregion examples

//#region helpers
/**
 * Used to help parse strings into {@link SearchPattern}s
 * To explain [matches terms and values]: (?:(?:(!?(?:[#$]?[a-z0-9\-]+|"[^"]*"|'[^']*'|\*))(?:,\s*)?)+)
 *	^						must begin at the start of the string
 *	!?						optionally starts with exclamation [!]
 *	[a-z0-9\-]+				continues with letters, numbers, and/or dash/minus (at least one)
 *	:						ends with colon [:] (only once)
 */
const SearchPattern_operators = /^!?[a-z0-9\-]+:/gim;
/**
 * Used to help parse strings into {@link SearchPattern}s
 * To explain [matches terms and values]: (?:(?:(!?(?:[#$]?[a-z0-9\-]+|"[^"]*"|'[^']*'|\*))(?:,\s*)?)+)
 *	(						sub-sequence matches term patterns (only once)
 *		!?						optionally starts with exclamation [!]
 *		(?:						terms group must match (only once)
 *			[#$]?					optionally starts with hash/pound [#] or dollar [$]
 *			[a-z0-9\-]+				continues with letters, numbers, and/or dash/minus
 *			|"[^"]*"					OR starts with quote ["], optionally contains any character sequence, ends with quote ["]
 *			|'[^']*'					OR starts with appostrophe ['] optionally contains any character sequence, ends with appostrophe [']
 *			|\*						OR asterix [*]
 *		)						terms group must match (only once)
 *	)						sub-sequence matches term patterns (only once)
 */
const SearchPattern_terms = /(!?(?:[#$]?[a-z0-9\-]+|"[^"]+"|'[^']+'|\*))/gim;
/**
 * Used to help parse strings into {@link SearchPattern}s inside the constructor using {@link String#match}.
 * To explain sequence 1 [optionally matches operators]:
 *	(?:				whole group is optional
 *		!?			optionally starts with exclamation [!]
 *		[a-z0-9\-]+	must have letters, numbers, and/or dash/minus
 *		:			must be followed by colon [:]
 *		\s*			optionally followed by white-space
 *	)?				whole group is optional
 * To explain sequence 2 [matches terms and values]: (?:(?:(!?(?:[#$]?[a-z0-9\-]+|"[^"]*"|'[^']*'|\*))(?:,\s*)?)+)
 *	(?:						whole sequence must match (only once)
 *		(?:						inner sequences must match (once or more)
 *			(						sub-sequence matches term patterns (only once)
 *				!?						optionally starts with exclamation [!]
 *				(?:						terms group must match (only once)
 *					[#$]?					optionally starts with hash/pound [#] or dollar [$]
 *					[a-z0-9\-]+				continues with letters, numbers, and/or dash/minus (at least one)
 *					|"[^"]*"					OR starts with quote ["], optionally contains any character sequence, ends with quote ["]
 *					|'[^']*'					OR starts with appostrophe ['] optionally contains any character sequence, ends with appostrophe [']
 *					|\*						OR asterix [*]
 *				)						terms group must match (only once)
 *			)						sub-sequence matches term patterns (only once)
 *			(?:						sub-sequence matches for comma [,] and white-space
 *				,						must match comma (only once)
 *				\s*						optionally match white-space (none or more)
 *			)?						sub-sequence matches for comma [,] and white-space
 *		)+						inner sequences must match (once or more)
 *	)?						whole sequence is optional (accounts for "term:" patterns)
 */
const SearchPattern_parser = /(?:!?[a-z0-9\-]+:\s*)?(?:(?:(!?(?:[#$]?[a-z0-9\-]+|"[^"]*"|'[^']*'|\*))(?:,\s*)?)+)?/gim;	//	/\s*((?:[!\-]?[a-z]+:)?[!\-#$]?(?:\s*"[^"]+"[\s,]*|\s*'[^']+'[\s,]*|[^\s]+)*)\s*/gim
/**
 * Used to help split a string or search patterns into an array of {@link SearchPattern}s using {@link String#split}.
 * To explain: anything wrapped inside quote ["] OR anything wrapped inside appostrophe ['] OR pipe character [|]
 */
const SearchPattern_splitter = /("[^"]*"|'[^']*'|\|)/gm;	//	old => /(".*|.*"|'.*|.*'|\|)/gm
/**
 * Internally parses a string into a SearchPattern.
 * @param search
 * @param patterns
 */
function SearchPattern_fromMatches(search: SearchPattern, patterns: string[]): SearchPattern {
	patterns.forEach(SearchPattern_fromMatch, search);
	search.operators.forEach(SearchPattern_asterisk);
	SearchPattern_asterisk(search.terms);
	return search;
}
/**
 * Internally parses a string into a SearchPattern.
 * @param pattern
 */
function SearchPattern_fromMatch(this: SearchPattern, pattern: string) {
	var operator = (pattern.match(SearchPattern_operators) || [])[0] || "",
		negatory = (operator[0] || "").trim() === "!" ? "!" : "",
		key = operator && codify(pattern.substring(0, operator.length - 1)) || "";	// why not CODIFIER(operator)?????
	if (key) {
		key = negatory + key;
		var list = this.operators.get(key);
		if (!list) this.operators.set(key, list = []);
		pattern.substring(operator.length).split(SearchPattern_terms).forEach(SearchPattern_unique, list);
	} else if (pattern = pattern.trim()) {
		pattern.split(SearchPattern_terms).forEach(SearchPattern_unique, this.terms);
	}
}
/**
 * Adds only unique values to the terms array.
 * @param term
 */
function SearchPattern_unique(this: string[], term: string) {
	if (term) {
		var negatory = term[0] === '!' ? "!" : "";
		if (negatory) term = term.substring(1);
		switch (term[0]) {
			case "*":
				return this.push(negatory + term);	// short circuit; SearchPattern_asterisk will purge all other records
			case "#":
			case "$":
				term = negatory + term[0] + codify(term.substring(1));
				break;
			default:
				term = negatory + codify(term);
				break;
		}
		if (term && this.indexOf(term) < 0) this.push(term);
	}
}
/**
 * Checks for an asterisk in the terms array and if present empties the array; treat empty arrays like "match any".
 * @param values
 */
function SearchPattern_asterisk(values: string[]) {
	var index = values.indexOf("*");
	if (index < 0) {
		while ((index = values.indexOf("")) > -1) {
			values.splice(index, 1);
		}
	} else {
		values.length = 0;
	}
}
//#endregion helpers

/**
 * A common structure used to implement searching throughout the system.
 * The input format is described in the {@link /wss/#format-expression|WebSocket reference}.
 */
export class SearchPattern {
	/**
	 * Creates an array of {@link SearchPattern}s for easier matching.  Used for doing OR matching.
	 * @param expression
	 */
	static parse(expression: string): SearchPattern[] {
		const patterns = (expression ?? "").split(SearchPattern_splitter),
			searches: SearchPattern[] = []
		let pattern = "";
		for (let i = 0, l = patterns.length; i < l; i++) {
			if (patterns[i] !== "|") {
				pattern += patterns[i];
			} else {
				if (pattern) searches.push(new SearchPattern(pattern));
				pattern = "";
			}
		}
		if (pattern) searches.push(new SearchPattern(pattern));
		return searches;
	}
	/**
	 * Creates a single string from the given array of {@link SearchPattern}s for easier serialization.
	 * @param patterns
	 */
	static stringify(patterns: SearchPattern[]): string | null {
		const expressions = (patterns || []).map(p => p.toString());
		return expressions.length === 0
			? null
			: expressions.some(x => x === "*")
				? "*"
				: expressions.join("|");
	}
	
	/**
	 * To help qualify matches, all operators must match for the search to be
	 * considered matched.
	 * Operators are formatted as "operator:terms".
	 */
	operators: Map<string, string[]> = new Map();
	/**
	 * If any term matches, then the search should be considered matched.
	 * Terms are any string contained by single/double-quotes or not parsed as an
	 * operator.
	 */
	terms: string[] = [];

	constructor(pattern: string = "") {
		// init and ensure uniqueness
		var matches = pattern
			? pattern.match(SearchPattern_parser)
			: null;
		if (matches?.length) SearchPattern_fromMatches(this, matches);
	}
	
	/**
	 * True when this pattern will match all.
	 */
	get wildcard(): boolean {
		return !this.terms.length
			&& !this.operators.size;
	}

	/**
	 * Returns a re-parseable string representation of the pattern.
	 */
	toString(): string {
		const oprs: string[] = [];
		this.operators.forEach((v, k) => oprs.push(k + ":" + (v?.join(",") || "*")))
		return (
			oprs.join(" ")
			+ " "
			+ this.terms.join(",")
		).trim() || "*";
	}
	/**
	 * Returns a new, identical instance of the pattern.
	 */
	copy(): SearchPattern {
		var search = new SearchPattern();
		this.operators.forEach((v, k) => search.operators.set(k, [...v]));
		search.terms = [...this.terms];
		return search;
	}
}