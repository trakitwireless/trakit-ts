
	/**
	 * A chunk of script and variables used to assemble a working ProviderScript.
	 */
	export class ProviderScriptBlock {
		/**
		 * A chunk of the file loaded onto a provider with it's variables replaced with configurable variables.
		 * Trailing or leading whitespace should be included here, so when blocks are merged, so too is the newline characters.
		 */
		content: string = "";
		/**
		 * A regular expression used to match variables in the content.
		 * The regex must contain at least one match-group.
		 * The value fom the last group is what's used as a parameter name.
		 *  <example>{{([a-z]+)}}</example>
		 *  <example>&lt;(var[a-z]+)&gt;</example>
		 *  <override max-length="20" />
		 */
		replace: string = "";
		/**
		 * When defined, this condition matches a {@link ProviderScriptParameter} defined in the {@link ProviderConfig} to include or exclude this chunk from the script.
		 *  <override max-length="50" />
		 */
		condition: string = "";
		/**
		 * Used in conjunction with condition, this value must match the given ProviderScriptParameter value to have the chunk included.
		 */
		validate: string = "";
	}