import { ISerializable } from "../API/Interfaces/ISerializable";
import { double, uint, JsonObject } from "../API/Types";
/**
 * Description of a tiered SMS messaging limit
 */
export declare class BillableSmsProfile implements ISerializable {
    /**
     *
     * @param json
     */
    static fromJSON(json: JsonObject): BillableSmsProfile;
    /**
     * The maximum number of messages sent per cycle
     */
    limit: uint;
    /**
     * Cost per SMS message sent.
     * Received messages are free.
     */
    amount: double;
    constructor(limit?: uint, amount?: double);
    toJSON(): {
        limit: number | null;
        amount: number | null;
    };
}
//# sourceMappingURL=BillableSmsProfile.d.ts.map