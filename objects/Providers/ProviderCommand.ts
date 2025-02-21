
import { DATE, JSON_DATE } from "../API/Functions";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { datetime } from "../API/Types";
import { ProviderCommandStatus } from "./ProviderCommandStatus";

/**
 * Details regarding a provider command
 */
export class ProviderCommand
	implements ISerializable {
	/**
	 * 
	 * @param json 
	 */
	static fromJSON(json: any) {
		return new ProviderCommand(
			json["status"] as ProviderCommandStatus,
			json["parameters"] as string[],
			json["created"] as datetime,
			json["processed"] as datetime,
		);
	}

	/**
	 * Current status of this command.
	 */
	status: ProviderCommandStatus = ProviderCommandStatus.created;
	/**
	 * Command message body.
	 */
	parameters: string[] = [];
	/**
	 * Date/time stamp of when the command was created.
	 */
	created: Date = DATE();
	/**
	 * Date/time stamp of when the command was processed.
	 */
	processed: Date = DATE();

	constructor(
		status?: ProviderCommandStatus,
		parameters?: string[],
		created?: Date | number | datetime,
		processed?: Date | number | datetime,
	) {
		this.status = ProviderCommandStatus[status as ProviderCommandStatus] || ProviderCommandStatus.created;
		this.parameters = [...(parameters || [])];
		this.created = DATE(created);
		this.processed = DATE(processed);
	}

	toJSON() {
		return {
			"status": ProviderCommandStatus[this.status] || ProviderCommandStatus.created,
			"parameters": [...(this.parameters || [])],
			"created": JSON_DATE(this.created),
			"processed": JSON_DATE(this.processed),
		};
	}
}