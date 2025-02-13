import { ulong } from '../API/Types';
import { ReportBreakdown } from './ReportBreakdown';
import { ReportResult } from './ReportResult';
import { ReportSummary } from './ReportSummary';

/**
 * Report results which also include the computed summary and breakdown for the results.
 */
export class ReportResultData
	extends ReportResult {
	/**
	 * Grouped events form a summary instance, and contain information about the starting, ending, and number of the grouped events.
	 */
	summary: Map<ulong, ReportSummary[]>;
	/**
	 * Individual events about the targeted assets used to calculate the results of the report.
	 */
	breakdown: Map<ulong, ReportBreakdown[]>;
}