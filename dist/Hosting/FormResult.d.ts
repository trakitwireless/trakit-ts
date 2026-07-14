import { BaseComponent } from "../API/BaseComponent";
import { LatLng } from "../API/Geography/LatLng";
import { IBelongAsset } from "../API/Interfaces/IBelongAsset";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { ILabelled } from "../API/Interfaces/ILabelled";
import { INamed } from "../API/Interfaces/INamed";
import { codified, ulong, JsonObject, nothing } from "../API/Types";
import { Asset } from "../Assets/Asset";
import { Company } from "../Companies/Company";
import { FormTemplate } from "./FormTemplate";
/**
 * A completed form submitted by a {@link User} or {@link Asset}.
 */
export declare class FormResult extends BaseComponent implements IIdUlong, INamed, IBelongCompany, IBelongAsset, ILabelled {
    /**
     * Unique identifier of this form.
     */
    id: ulong;
    /**
     * The {@link Company} to which this form belongs.
     * {@link Company.id}
     */
    companyId: ulong;
    /**
     * The {@link Company} to which this form belongs.
     */
    get company(): Company;
    /**
     * The {@link FormTemplate} to which this form belongs.
     */
    templateId: ulong;
    /**
     * The {@link FormTemplate} to which this form belongs.
     */
    get template(): FormTemplate;
    set template(value: FormTemplate);
    /**
     * The {@link Asset} to which this form belongs.
     * {@link Asset.id}
     */
    assetId: ulong;
    /**
     * The {@link Asset} to which this form belongs.
     */
    get asset(): Asset;
    /**
     * Name of this form.
     */
    name: string;
    /**
     * Notes about this form.
     */
    notes: string;
    /**
     * Codified label names used to relate forms to {@link Asset}s.
     */
    labels: codified[];
    /**
     * All the values for fillable fields by index.
     */
    fields: Map<ulong, string>;
    /**
     * A timestamp from when this form was completed by a {@link User} or {@link Asset}.
     */
    completed: Date;
    /**
     * The coordinates of the {@link User} or {@link Asset} from when the form was completed.
     */
    latlng: LatLng | null;
    /**
     * Clocked-in driver name who made the update.
     * Null if not clocked-in, or no changes have been made.
     */
    driver: string;
    constructor(json?: JsonObject | nothing);
    toJSON(): {
        id: number;
        company: number | null;
        v: number[];
        template: number | null;
        asset: number | null;
        name: string;
        notes: string;
        labels: string[];
        fields: JsonObject;
        completed: string;
        latlng: (import("..").ILatLng & JsonObject) | null;
        driver: string | null;
    };
    fromJSON(json: JsonObject, force?: boolean): boolean;
    /**
     * The {@link id} is the key.
     */
    getKey(): number;
    /**
     * Returns all {@link DispatchJob}s which have this document attached.
     * @returns
     */
    getDispatchJobs(): import("..").DispatchJob[];
}
//# sourceMappingURL=FormResult.d.ts.map