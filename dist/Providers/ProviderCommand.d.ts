import { ISerializable } from "../API/Interfaces/ISerializable";
import { datetime, JsonObject } from "../API/Types";
import { ProviderCommandStatus } from "./ProviderCommandStatus";
/**
 * Details regarding a provider command
 */
export declare class ProviderCommand implements ISerializable {
    /**
     *
     * @param json
     */
    static fromJSON(json: JsonObject): ProviderCommand;
    /**
     * Current status of this command.
     */
    status: ProviderCommandStatus;
    /**
     * Command message body.
     */
    parameters: string[];
    /**
     * Date/time stamp of when the command was created.
     */
    created: Date;
    /**
     * Date/time stamp of when the command was processed.
     */
    processed: Date;
    constructor(status?: ProviderCommandStatus, parameters?: string[], created?: Date | number | datetime, processed?: Date | number | datetime);
    toJSON(): {
        status: ProviderCommandStatus;
        parameters: string[];
        created: string;
        processed: string;
    };
}
//# sourceMappingURL=ProviderCommand.d.ts.map