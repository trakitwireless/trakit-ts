﻿
	/**
	 * Drill-down mechanism for highlighting only those places and regions desired in report results.
	 */
	export enum ReportFilterMode {
		/**
		 * Filtering is not enabled for the report.
		 */
		none,
		/**
		 * Include any results for those whose filters match.
		 */
		inclusive,
		/**
		 * Exclude all results except those whose filters match.
		 */
		exclusive,
	}