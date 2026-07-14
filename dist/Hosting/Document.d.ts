import { BaseComponent } from "../API/BaseComponent";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IFileSize } from "../API/Interfaces/IFileSize";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { INamed } from "../API/Interfaces/INamed";
import { ulong, JsonObject, nothing } from "../API/Types";
import { Company } from "../Companies/Company";
/**
 * A file stored temporarily by the system.
 */
export declare class Document extends BaseComponent implements IIdUlong, INamed, IBelongCompany, IFileSize {
    /**
     * Unique identifier of this file.
     */
    id: ulong;
    /**
     * The company to which this file belongs.
     * {@link Company.id}
     */
    companyId: ulong;
    /**
     * The {@link Company} to which this file belongs.
     */
    get company(): Company;
    /**
     * The file name of this file.
     */
    name: string;
    /**
     * Notes about this file.
     */
    notes: string;
    /**
     * The URL/path to find this file.
     */
    src: string;
    /**
     * The file-size on the disk.
     */
    bytes: ulong;
    /**
     * The MIME type of the file.
     */
    mime: string;
    /**
     * The date and time this fill will be automatically purged from our system.
     */
    expiry: Date;
    /**
     * Name/value collections of custom fields used to refer to external systems.
     */
    references: Map<string, string>;
    constructor(json?: JsonObject | nothing);
    toJSON(): {
        id: number | null;
        v: number[];
        company: number | null;
        name: string;
        notes: string;
        src: string;
        mime: string;
        bytes: number;
        expiry: string;
        references: Map<string, any>;
    };
    fromJSON(json: JsonObject, force?: boolean): boolean;
    /**
     * The {@link id} is the key.
     */
    getKey(): number;
    /**
     * Returns all {@link DispatchTask}s which have this document attached.
     * @returns
     */
    getDispatchTasks(): import("..").DispatchTask[];
    /**
     * Returns all {@link DispatchJob}s which have this document attached.
     * @returns
     */
    getDispatchJobs(): import("..").DispatchJob[];
}
//# sourceMappingURL=Document.d.ts.map