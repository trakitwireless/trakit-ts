import { User } from "../Accounts/User";
import { BaseComponent } from "../API/BaseComponent";
import { IBelongAsset } from "../API/Interfaces/IBelongAsset";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { email, JsonObject, ulong } from "../API/Types";
import { Asset } from "../Assets/Asset";
import { Company } from "../Companies/Company";
import { MessageStatus } from './MessageStatus';
import { MessageType } from './MessageType';
/**
 * A base class for Alerts and Messages.
 */
export declare abstract class MessageBase extends BaseComponent implements IIdUlong, IBelongCompany, IBelongAsset {
    /**
     * Unique identifier of this memo.
     */
    id: ulong;
    /**
     * The company to which this memo belongs.
     * {@link Company.id}
     */
    companyId: ulong;
    /**
     * The {@link Company} to which this memo belongs.
     */
    get company(): Company;
    /**
     * Lifetime status
     */
    status: MessageStatus;
    /**
     * Protocol type
     */
    kind: MessageType;
    /**
     * Recipient address.
     */
    to: email;
    /**
     * Sender address.
     */
    from: email;
    /**
     * The main contents of the memo.
     */
    body: string;
    /**
     * Date/time stamp of when the memo was processed.
     */
    processed: Date;
    /**
     * Date/time stamp of when the memo was delivered (or sent if delivery information unavailable).
     */
    delivered: Date;
    /**
     * The subject of this message.
     */
    subject: string;
    /**
     * The asset to which this message relates.
     * {@link Asset.id}
     */
    assetId: ulong;
    /**
     * The {@link Asset} to which this message relates.
     */
    get asset(): Asset;
    /**
     * The user who sent/received this message.
     * {@link User.login}
     */
    userLogin: email;
    /**
     * The user who sent/received this message.
     * {@link User.login}
     */
    get user(): User;
    toJSON(): {
        id: number | null;
        v: number[];
        company: number | null;
        status: MessageStatus;
        kind: MessageType;
        to: string;
        from: string;
        body: string;
        processed: string | null;
        delivered: string | null;
        subject: string;
        asset: number;
        user: string;
    };
    fromJSON(json: JsonObject, force?: boolean): boolean;
    /**
     * The {@link id} is the key.
     */
    getKey(): number;
}
//# sourceMappingURL=MessageBase.d.ts.map