import { BaseComponent } from "../API/BaseComponent";
import { Rectangle } from "../API/Geometry/Rectangle";
import { Size } from "../API/Geometry/Size";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IFileSize } from "../API/Interfaces/IFileSize";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { INamed } from "../API/Interfaces/INamed";
import { JsonObject, nothing, uint, ulong } from "../API/Types";
import { Company } from "../Companies/Company";
/**
 * An image stored by the system.
 */
export declare class Picture extends BaseComponent implements IIdUlong, INamed, IBelongCompany, IFileSize {
    /**
     * Unique identifier of this image.
     */
    id: ulong;
    /**
     * The company to which this image belongs.
     * {@link Company.id}
     */
    companyId: ulong;
    /**
     * The {@link Company} to which this image belongs.
     */
    get company(): Company;
    /**
     * The file name of this image.
     */
    name: string;
    /**
     * Notes about this image.
     */
    notes: string;
    /**
     * The URL/path to find this image.
     */
    src: string;
    /**
     * Resolution defined in pixels.
     */
    size: Size;
    /**
     * A list of focal points in the images like faces.
     */
    focals: Rectangle[];
    /**
     * The file-size on the disk.
     */
    bytes: ulong;
    /**
     * A count of the times this image was used for something (asset, contact, task, etc).
     */
    uses: uint;
    constructor(json?: JsonObject | nothing);
    toJSON(): {
        id: number | null;
        v: number[];
        company: number | null;
        name: string;
        notes: string;
        src: string;
        size: import("..").ISize & JsonObject;
        focals: any[];
        bytes: number | null;
        uses: number | null;
    };
    fromJSON(json: JsonObject, force?: boolean): boolean;
    /**
     * The {@link id} is the key.
     */
    getKey(): number;
}
//# sourceMappingURL=Picture.d.ts.map