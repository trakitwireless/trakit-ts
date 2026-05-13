import { BaseComponent } from "../API/BaseComponent";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { ILabelled } from "../API/Interfaces/ILabelled";
import { INamed } from "../API/Interfaces/INamed";
import { IVisual } from "../API/Interfaces/IVisual";
import { codified, colour, ulong, JsonObject, nothing } from "../API/Types";
import { Company } from "../Companies/Company";
import { FormFieldAttachments } from './Fields/FormFieldAttachments';
import { FormFieldBoolean } from './Fields/FormFieldBoolean';
import { FormFieldChoice } from './Fields/FormFieldChoice';
import { FormFieldDate } from './Fields/FormFieldDate';
import { FormFieldNumeric } from './Fields/FormFieldNumeric';
import { FormFieldSignature } from './Fields/FormFieldSignature';
import { FormFieldText } from './Fields/FormFieldText';
import { FormFieldTime } from './Fields/FormFieldTime';
import { FormFieldTimezone } from './Fields/FormFieldTimezone';
/**
 * The full definition of a form that needs to be filled out.
 */
export declare class FormTemplate extends BaseComponent implements IIdUlong, INamed, IBelongCompany, ILabelled, IVisual {
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
     * The fill/background colour of the icon.
     */
    fill: colour;
    /**
     * Outline and graphic colour.
     */
    stroke: colour;
    /**
     * The name of the symbol for this template.
     */
    graphic: codified;
    /**
     * All the user fillable fields by name.
     */
    fields: (FormFieldText | FormFieldChoice | FormFieldBoolean | FormFieldNumeric | FormFieldDate | FormFieldTime | FormFieldSignature | FormFieldAttachments | FormFieldTimezone)[];
    /**
     * The {@link id} is the key.
     */
    getKey(): number;
    constructor(json?: JsonObject | nothing);
    toJSON(): {
        id: number | null;
        company: number | null;
        v: number[];
        name: string;
        notes: string;
        labels: string[];
        fields: any[];
        fill: string;
        stroke: string;
        graphic: string;
    };
    fromJSON(json: JsonObject, force?: boolean): boolean;
}
//# sourceMappingURL=FormTemplate.d.ts.map