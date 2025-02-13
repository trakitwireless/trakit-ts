import { AssetMessage } from "../Messaging/AssetMessage";
import { ReportBreakdown } from "./ReportBreakdown";

/**
 * Message information used in this report.
 */
export class ReportBreakdownMessage
	extends ReportBreakdown {
	/**
	 * The Message used.
	 */
	message: AssetMessage;
}