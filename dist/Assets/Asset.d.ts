import { Contact } from "../Accounts/Contact";
import { BaseComponent } from "../API/BaseComponent";
import { BaseCompound } from "../API/BaseCompound";
import { Position } from "../API/Geography/Position";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIconic } from "../API/Interfaces/IIconic";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { ILabelled } from "../API/Interfaces/ILabelled";
import { INamed } from "../API/Interfaces/INamed";
import { IPictured } from "../API/Interfaces/IPictured";
import { ISuspendable } from "../API/Interfaces/ISuspendable";
import { JsonObject, codified, colour, double, nothing, ulong, ushort } from "../API/Types";
import { BehaviourLog } from "../Behaviours/BehaviourLog";
import { Company } from "../Companies/Company";
import { DispatchJob } from "../Dispatch/DispatchJob";
import { DispatchTask } from "../Dispatch/DispatchTask";
import { FormResult } from "../Hosting/FormResult";
import { Icon } from "../Images/Icon";
import { Picture } from "../Images/Picture";
import { MaintenanceJob } from "../Maintenance/MaintenanceJob";
import { AssetMessage } from "../Messaging/AssetMessage";
import { Place } from "../Places/Place";
import { Provider } from "../Providers/Provider";
import { AssetAdvanced } from "./AssetAdvanced";
import { AssetAttribute } from "./AssetAttribute";
import { AssetDispatch } from "./AssetDispatch";
import { AssetGeneral } from "./AssetGeneral";
import { AssetPlaceStatus } from "./AssetPlaceStatus";
import { AssetType } from "./AssetType";
/**
 * The full details of an Asset, containing all the properties from the {@link AssetGeneral} and {@link AssetAdvanced} objects.
 */
export declare class Asset extends BaseCompound implements IIdUlong, INamed, IIconic, IBelongCompany, ILabelled, IPictured, ISuspendable {
    #private;
    /**
     *
     */
    get pieces(): BaseComponent[];
    /**
     * Unique identifier of this asset.
     */
    get id(): ulong;
    /**
     * The company to which this asset belongs.
     * {@link Company.id}
     */
    get companyId(): ulong;
    /**
     * The {@link Company} to which this asset belongs.
     */
    get company(): Company;
    /**
     * Type of asset.
     */
    get kind(): AssetType;
    /**
     *
     */
    get general(): AssetGeneral;
    /**
     * This thing's name.
     */
    get name(): string;
    set name(value: string);
    /**
     * Notes about it.
     */
    get notes(): string;
    set notes(value: string);
    /**
     * The icon that represents this asset on the map and in lists.
     * {@link Icon.id}
     */
    get iconId(): ulong;
    set iconId(value: ulong);
    /**
     * The {@link Icon} that represents this asset on the map and in lists.
     */
    get icon(): Icon;
    set icon(value: Icon);
    /**
     * Codified label names.
     * {@link LabelStyle.code}
     */
    get labels(): codified[];
    set labels(value: codified[]);
    /**
     * A list of photos of this thing.
     * {@link Picture.id}
     */
    get pictureIds(): ulong[];
    set pictureIds(value: ulong[]);
    /**
     * A list of {@link Picture}s of this thing.
     */
    get pictures(): Picture[];
    set pictures(value: Picture[]);
    /**
     * The fall-back address which is used to send Messages if the asset is a Person and has no Contact phone or email.
     */
    get messagingAddress(): string;
    set messagingAddress(value: string);
    /**
     * Name/value collections of custom fields used to refer to external systems.
     */
    get references(): Map<string, string>;
    set references(value: Map<string, string>);
    /**
     * Contact information for this user.
     * {@link Contact.id}
     */
    get contactId(): ulong;
    set contactId(value: ulong);
    /**
     * {@link Contact} information for this user.
     */
    get contact(): Contact;
    set contact(value: Contact);
    /**
     * The license plate.
     */
    get plate(): string;
    /**
     * Manufacturer's unique identification number (Vehicle Identification Number).
     */
    get vin(): string;
    set vin(value: string);
    /**
     * Manufacturer's name.
     */
    get make(): string;
    set make(value: string);
    /**
     * Manufacturer's model name/number.
     */
    get model(): string;
    set model(value: string);
    /**
     * Year of manufacturing.
     */
    get year(): ushort;
    set year(value: ushort);
    /**
     * Primary colour of the trailer (given in 24bit hex; #RRGGBB)
     */
    get colour(): colour;
    set colour(value: colour);
    /**
     * Manufacturer's unique identification number for this trailer.
     */
    get serial(): string;
    set serial(value: string);
    /**
     *
     */
    get advanced(): AssetAdvanced;
    /**
     * The things GPS coordinates including speed, bearing, and street information.
     */
    get position(): Position | null;
    set position(value: Position | null);
    /**
     * The cumulative distance travelled in kilometres.
     */
    get odometer(): double;
    set odometer(value: double);
    /**
     * The codified status tag names.
     */
    get tags(): codified[];
    set tags(value: codified[]);
    /**
     * A list of attributes given to this asset by the connection device such as wiring state, VBus, etc.
     */
    get attributes(): Map<codified, AssetAttribute>;
    set attributes(value: Map<codified, AssetAttribute>);
    /**
     * The list of devices providing events for this asset.
     */
    get providerIds(): string[];
    /**
     * The list of devices providing events for this asset.
     */
    get providers(): Provider[];
    /**
     * A list of assets related to this one; like a Person for a Vehicle (driver).
     * {@link Asset.id}
     */
    get relationshipIds(): ulong[];
    set relationshipIds(value: ulong[]);
    /**
     * A list of {@link Asset}s related to this one; like a Person for a Vehicle (driver).
     */
    get relationships(): Asset[];
    set relationships(value: Asset[]);
    /**
     * The current state of this asset's interaction with known Places.
     * {@link Place.id}
     */
    get places(): Map<ulong, AssetPlaceStatus>;
    set places(value: Map<ulong, AssetPlaceStatus>);
    /**
     * The cumulative duration that the vehicle's engine has been running (in decimal hours).
     */
    get engineHours(): double;
    set engineHours(value: double);
    /**
     *
     */
    get dispatch(): AssetDispatch;
    constructor(json?: JsonObject | nothing);
    toJSON(): {
        suspended: boolean;
        since: string | null;
        id: number | null;
        v: number[];
        company: number | null;
        kind: AssetType;
        name: string;
        notes: string;
        icon: number | null;
        labels: string[];
    } | {
        references: JsonObject;
        messagingAddress: string;
        pictures: number[];
        contact: number | null;
        vin: string;
        plate: string;
        make: string;
        model: string;
        year: number | null;
        colour: string;
        serial: string;
        id: number | null;
        v: number[];
        company: number | null;
        kind: AssetType;
        name: string;
        notes: string;
        icon: number | null;
        labels: string[];
    };
    fromJSON(json: JsonObject, force?: boolean): boolean;
    /**
     * The {@link id} is the key.
     */
    getKey(): number;
    /**
     * Indicates whether this object is suspended from event processing.
     */
    get suspended(): boolean;
    /**
     * Timestamp from the action that deleted or suspended this object.
     */
    get since(): Date;
    /**
     * Gets the list of {@link Place}s where the asset is currently interacting.
     * @returns An array of {@link Place} objects.
     */
    getPlaces(): (Place | undefined)[];
    /**
     * Gets the list of {@link AssetMessage}s sent to or from this asset.
     * @returns An array of {@link AssetMessage} objects.
     */
    getMessages(): AssetMessage[];
    /**
     * Gets the list of {@link DispatchTask}s and jobs related to this asset.
     * @returns An array of {@link DispatchTask} objects.
     */
    getDispatchTasks(): DispatchTask[];
    /**
     * Gets the list of {@link DispatchJob}s related to this asset.
     * @returns An array of {@link DispatchJob} objects.
     */
    getDispatchJobs(): DispatchJob[];
    /**
     * Gets the list of {@link MaintenanceJob}s related to this asset.
     * @returns An array of {@link MaintenanceJob} objects.
     */
    getMaintenanceJobs(): MaintenanceJob[];
    /**
     * Gets the list of {@link FormResult}s related to this asset.
     * @returns An array of {@link FormResult} objects.
     */
    getFormResults(): FormResult[];
    /**
     * Gets the list of {@link Picture}s related to this asset.
     * @returns An array of {@link Picture} objects.
     */
    getPictures(): (Picture | undefined)[];
    /**
     * Gets the list of {@link BehaviourLog}s related to this asset.
     * @returns An array of {@link BehaviourLog} objects.
     */
    getBehaviourLogs(): BehaviourLog[];
}
//# sourceMappingURL=Asset.d.ts.map