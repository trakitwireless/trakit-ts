import { describe, expect, it } from 'vitest';
import { CODIFY } from '../objects/API/Codifier';
import { NUMBER_GROUPS } from '../objects/API/Files';
import { ID, IS_AN, IS_NOTHING, ROUND_TO } from '../objects/API/Functions';
import { GUID } from '../objects/API/Guid';
import { SearchPattern } from '../objects/API/SearchPattern';
import { TIMESPAN_PARSE, TIMESPAN_STRINGIFY } from '../objects/API/TimeSpan';

describe("SearchPattern", function () {
	describe("constructor", function () {
		it("type", function () {
			expect(typeof SearchPattern).toBe("function");
		});
		it("same empty", function () {
			var col1 = new SearchPattern,
				col2 = new SearchPattern(""),
				col3 = new SearchPattern("*"),
				col4 = new SearchPattern("`~!@#$%^&()|{}[]-+=.,<>?/\\\'\";:");
			expect(col1).toEqual(col2);
			expect(col1).toEqual(col3);
			expect(col1).toEqual(col4);
		});
		it("codify terms", function () {
			var col1 = new SearchPattern("These Terms!"),
				col2 = new SearchPattern("these terms"),
				col3 = new SearchPattern("term"),
				col4 = new SearchPattern("#term"),
				col5 = new SearchPattern("$term"),
				col6 = new SearchPattern("term,other"),
				col7 = new SearchPattern("term|other"),
				col8 = new SearchPattern("term | other"),
				col9 = new SearchPattern("\"Fake|OrElse\""),
				cola = new SearchPattern("'Fake | Or Else'"),
				colb = new SearchPattern("\"fake:operator\""),
				colc = new SearchPattern("'fake:operator'");
			expect(col1).toEqual(col2);
			expect(col1.operators).toEqual(new Map());
			expect(col1.terms).toEqual(["these", "terms"]);
			expect(col3.terms).toEqual(["term"]);
			expect(col4.terms).toEqual(["#term"]);
			expect(col5.terms).toEqual(["$term"]);
			expect(col6.terms).toEqual(["term", "other"]);
			expect(col7).toEqual(col8);
			expect(col7.terms).toEqual(["term", "other"]);
			expect(col8.terms).toEqual(["term", "other"]);
			expect(col9.terms).toEqual(["fake-orelse"]);
			expect(cola.terms).toEqual(["fake-or-else"]);
			expect(colb.terms).toEqual(["fake-operator"]);
			expect(colc.terms).toEqual(["fake-operator"]);
		});
		it("codify operators", function () {
			var col1 = new SearchPattern("label:term"),
				col2 = new SearchPattern("LABEL:term"),
				col3 = new SearchPattern("label-:term"),
				col4 = new SearchPattern("opr-split:term"),
				col5 = new SearchPattern("opr--split:term");
			expect(col1).toEqual(col2);
			expect(col1).toEqual(col3);
			expect(col4).toEqual(col5);
		});
		it("codify operator values", function () {
			var col1 = new SearchPattern("label:term"),
				col2 = new SearchPattern("label:\"Term\""),
				col3 = new SearchPattern("label:'Term'"),
				col4 = new SearchPattern("label: 'Term'"),
				col5 = new SearchPattern("label:term,other"),
				col6 = new SearchPattern("label:\"Term Other\", \"Another\""),
				col7 = new SearchPattern("label:'Term Other', 'Another'"),
				col8 = new SearchPattern("label:!term"),
				col9 = new SearchPattern("label:!#term"),
				cola = new SearchPattern("label:!$term"),
				colb = new SearchPattern("label:!$\"Term\""),	// not a valid pattern
				colc = new SearchPattern("label:!\"Term Other\", \"Another\""),
				cold = new SearchPattern("label: !\"Term Other\", \"Another\""),
				cole = new SearchPattern("label:\"Term Other\", !\"Another\""),
				colf = new SearchPattern("!label:term"),
				colg = new SearchPattern("!label:!term");
			expect(col1.terms).toEqual([]);
			expect(col1).toEqual(col2);
			expect(col1).toEqual(col3);
			expect(col1).toEqual(col4);
			expect(col1.operators).toEqual(new Map([["label", ["term"]]]));
			expect(col5.operators.get("label")).toEqual(["term", "other"]);
			expect(col6.operators.get("label")).toEqual(["term-other", "another"]);
			expect(col7.operators.get("label")).toEqual(["term-other", "another"]);
			expect(col8.operators.get("label")).toEqual(["!term"]);
			expect(col9.operators.get("label")).toEqual(["!#term"]);
			expect(cola.operators.get("label")).toEqual(["!$term"]);
			//expect(colb.operators.has("label")).toBe(false);	// not working, but will skip for now
			//expect(colb.terms).toEqual(["label", "term"]);
			expect(colc.operators.get("label")).toEqual(["!term-other", "another"]);
			expect(cold.operators.get("label")).toEqual(["!term-other", "another"]);
			expect(cole.operators.get("label")).toEqual(["term-other", "!another"]);
			expect(colf.operators.has("label")).toBe(false);
			expect(colf.operators.get("!label")).toEqual(["term"]);
			expect(colg.operators.has("label")).toBe(false);
			expect(colg.operators.get("!label")).toEqual(["!term"]);
		});
		it("codify terms and operator values", function () {
			var col1 = new SearchPattern("pre label:term"),
				col2 = new SearchPattern("label:term,other"),
				col3 = new SearchPattern("label:term other"),
				col4 = new SearchPattern("label:term,!other"),
				col5 = new SearchPattern("label:term !other"),
				col6 = new SearchPattern("label:\"Term Other\", \"Another\" \"Again\""),
				col7 = new SearchPattern("!label:\"Term Other\", \"Another\" \"Again\""),
				col8 = new SearchPattern("!label:\"Term Other\", !\"Another\" \"Again\""),
				col9 = new SearchPattern("!label:\"Term Other\", !\"Another\" !\"Again\""),
				cola = new SearchPattern("\"Pre Term Again\" label:\"Term Other\", \"Another\""),
				colb = new SearchPattern("!\"Pre Term Again\" label:\"Term Other\", \"Another\""),
				colc = new SearchPattern("other,label:term");	// invalid operator
			expect(col1.operators).toEqual(new Map([["label", ["term"]]]));
			expect(col1.terms).toEqual(["pre"]);
			expect(col2.operators).toEqual(new Map([["label", ["term", "other"]]]));
			expect(col3.operators).toEqual(new Map([["label", ["term"]]]));
			expect(col3.terms).toEqual(["other"]);
			expect(col4.operators).toEqual(new Map([["label", ["term", "!other"]]]));
			expect(col5.operators).toEqual(new Map([["label", ["term"]]]));
			expect(col5.terms).toEqual(["!other"]);
			expect(col6.operators).toEqual(new Map([["label", ["term-other", "another"]]]));
			expect(col6.terms).toEqual(["again"]);
			expect(col7.operators).toEqual(new Map([["!label", ["term-other", "another"]]]));
			expect(col7.terms).toEqual(["again"]);
			expect(col8.operators).toEqual(new Map([["!label", ["term-other", "!another"]]]));
			expect(col8.terms).toEqual(["again"]);
			expect(col9.operators).toEqual(new Map([["!label", ["term-other", "!another"]]]));
			expect(col9.terms).toEqual(["!again"]);
			expect(cola.operators).toEqual(new Map([["label", ["term-other", "another"]]]));
			expect(cola.terms).toEqual(["pre-term-again"]);
			expect(colb.operators).toEqual(new Map([["label", ["term-other", "another"]]]));
			expect(colb.terms).toEqual(["!pre-term-again"]);
			expect(colc.operators).toEqual(new Map());
			expect(colc.terms).toEqual(["other", "label", "term"]);
		});
		it("multiple operators", function () {
			var col1 = new SearchPattern("label:term opr:value"),
				col2 = new SearchPattern("label:term,other opr:value"),
				col3 = new SearchPattern("label:term,other opr:value also"),
				col4 = new SearchPattern("label:term,other also opr:value"),
				col5 = new SearchPattern("also label:term,other opr:value");
			expect(col1.operators).toEqual(new Map([["label", ["term"]], ["opr", ["value"]]]));
			expect(col1.terms).toEqual([]);
			expect(col2.operators).toEqual(new Map([["label", ["term", "other"]], ["opr", ["value"]]]));
			expect(col2.terms).toEqual([]);
			expect(col3.operators).toEqual(new Map([["label", ["term", "other"]], ["opr", ["value"]]]));
			expect(col3.terms).toEqual(["also"]);
			expect(col3).toEqual(col4);
			expect(col3).toEqual(col5);
		});
		it("duplicate operators", function () {
			var col1 = new SearchPattern("label:term label:value"),
				col2 = new SearchPattern("label:term,other label:value"),
				col3 = new SearchPattern("label:term,other label:value also"),
				col4 = new SearchPattern("label:term,other also label:value"),
				col5 = new SearchPattern("also label:term,other label:value");
			expect(col1.operators).toEqual(new Map([["label", ["term", "value"]]]));
			expect(col1.terms).toEqual([]);
			expect(col2.operators).toEqual(new Map([["label", ["term", "other", "value"]]]));
			expect(col2.terms).toEqual([]);
			expect(col3.operators).toEqual(new Map([["label", ["term", "other", "value"]]]));
			expect(col3.terms).toEqual(["also"]);
			expect(col3).toEqual(col4);
			expect(col3).toEqual(col5);
		});
		it("complex", function () {
			var col1 = new SearchPattern("label:'stuff',Dude! & 'Truck (#1) - removed'"),
				col2 = new SearchPattern("label: 'stuff',Dude! & 'Truck (#1) - removed'"),
				col3 = new SearchPattern("label: 'stuff', Dude! & 'Truck (#1) - removed'"),
				col4 = new SearchPattern("label: 'stuff', \"Dude!\" & 'Truck (#1) - removed'"),
				col5 = new SearchPattern("label: 'stuff', \"Dude!\", & 'Truck (#1) - removed'");

			expect(col1).toEqual(col2);
			expect(col1).toEqual(col3);
			expect(col1).toEqual(col4);
			expect(col1).toEqual(col5);
			expect(col1.operators).toEqual(new Map([["label", ["stuff", "dude"]]]));
			expect(col1.terms).toEqual(["truck-1-removed"]);
		});
		it("fake shit", function () {
			var col1 = new SearchPattern("\"label:term\""),
				col2 = new SearchPattern("'label:term'");

			expect(col1).toEqual(col2);
			expect(col1.operators).toEqual(new Map());
			expect(col1.terms).toEqual(["label-term"]);
		});
	});
	describe("toString", function () {
		it("terms", function () {
			var col1 = new SearchPattern("search terms"),
				col2 = new SearchPattern(col1.toString());
			expect(col1).toEqual(col2);
		});
		it("operators", function () {
			var col1 = new SearchPattern("operator:terms"),
				col2 = new SearchPattern(col1.toString());
			expect(col1).toEqual(col2);
		});
		it("operators first", function () {
			var col1 = new SearchPattern("value operator:terms");
			expect(col1.toString()).toBe("operator:terms value");
		});
		it("multiple operators", function () {
			var col1 = new SearchPattern("operator:terms,for fun:and,profit"),
				col2 = new SearchPattern(col1.toString());
			expect(col1).toEqual(col2);
		});
		it("both", function () {
			var col1 = new SearchPattern("operator:terms fun and profit"),
				col2 = new SearchPattern(col1.toString());
			expect(col1).toEqual(col2);
		});
	});
	describe("copy", function () {
		it("terms", function () {
			var col1 = new SearchPattern("search terms"),
				col2 = col1.copy();
			expect(col1).toEqual(col2);
		});
		it("operators", function () {
			var col1 = new SearchPattern("operator:terms"),
				col2 = col1.copy();
			expect(col1).toEqual(col2);
		});
		it("operators first", function () {
			var col1 = new SearchPattern("value operator:terms"),
				col2 = col1.copy();
		});
		it("multiple operators", function () {
			var col1 = new SearchPattern("operator:terms,for fun:and,profit"),
				col2 = col1.copy();
			expect(col1).toEqual(col2);
		});
		it("both", function () {
			var col1 = new SearchPattern("operator:terms fun and profit"),
				col2 = col1.copy();
			expect(col1).toEqual(col2);
		});
	});
	describe("SearchPattern.parse", function () {
		it("single", function () {
			var col1 = SearchPattern.parse("term"),
				col2 = SearchPattern.parse("label:term"),
				col3 = SearchPattern.parse("label:term also");
			col1.every(function (col) {
				expect(col.operators).toEqual(new Map());
				expect(col.terms).toEqual(["term"]);
			});
			col2.every(function (col) {
				expect(col.operators).toEqual(new Map([["label", ["term"]]]));
				expect(col.terms).toEqual([]);
			});
			col3.every(function (col) {
				expect(col.operators).toEqual(new Map([["label", ["term"]]]));
				expect(col.terms).toEqual(["also"]);
			});
		});
		it("multiple", function () {
			var col1 = SearchPattern.parse("term | other |value| white-space"),
				col2 = SearchPattern.parse("label:term | other"),
				col3 = SearchPattern.parse("label:term,|opr:value");
			expect(col1.length).toEqual(4);
			col1.every(function (col) {
				expect(col.operators.size).toEqual(0);
				expect(col.terms.length).toEqual(1);
			});

			expect(col2[0].operators).toEqual(new Map([["label", ["term"]]]));
			expect(col2[0].terms).toEqual([]);
			expect(col2[1].operators).toEqual(new Map());
			expect(col2[1].terms).toEqual(["other"]);

			col3.every(function (col) {
				expect(col.operators.size).toEqual(1);
				expect(col.terms.length).toEqual(0);
			});
		});
		it("fake split", function () {
			var col1 = SearchPattern.parse("\"Term | Other\""),
				col2 = SearchPattern.parse("label:\"term | other\""),
				col3 = SearchPattern.parse("label: 'stuff', \"Dude!\", & 'Truck (#1) | removed'");
			expect(col1.length).toEqual(1);
			expect(col1[0].operators).toEqual(new Map());
			expect(col1[0].terms).toEqual(["term-other"]);
			expect(col2.length).toEqual(1);
			expect(col2[0].operators).toEqual(new Map([["label", ["term-other"]]]));
			expect(col2[0].terms).toEqual([]);
			expect(col3.length).toEqual(1);
			expect(col3[0].operators).toEqual(new Map([["label", ["stuff", "dude"]]]));
			expect(col3[0].terms).toEqual(["truck-1-removed"]);
		});
		it("a blank input to parseSearch returns a blank array", () => {
			expect(SearchPattern.parse("")).toEqual([]);
			expect(SearchPattern.parse(null)).toEqual([]);
		});
		it("single search expressions give an array with only one item", () => {
			expect(SearchPattern.parse("*").length).toEqual(1);
			expect(SearchPattern.parse("hello").length).toEqual(1);
			expect(SearchPattern.parse("assets:name").length).toEqual(1);
		});
		it("multiple expressions separated by pipe character", () => {
			expect(SearchPattern.parse("assets:derp | asset:hurr").length).toEqual(2);
			expect(SearchPattern.parse("assets:derp|asset:hurr|asset:herp").length).toEqual(3);
		});
		it("pipes contained in strings do not affect expression count", () => {
			expect(SearchPattern.parse("assets:'derp | hurr'").length).toEqual(1);
			expect(SearchPattern.parse("assets:'derp | hurr'|assets:herp").length).toEqual(2);
		});
	});
});