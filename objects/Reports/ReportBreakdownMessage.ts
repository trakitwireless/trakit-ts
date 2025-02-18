import { uint, ulong } from "../API/Types";
import { AssetAdvanced } from "../Assets/AssetAdvanced";
import { AssetGeneral } from "../Assets/AssetGeneral";
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

	constructor(
		message: AssetMessage,
		asset?: ulong,
		instance?: uint,
		summaryInstances?: uint[],
		general?: AssetGeneral | null,
		advanced?: AssetAdvanced | null
	) {
		super(
			asset,
			instance,
			summaryInstances,
			general,
			advanced
		);
		this.message = message;
	}
}