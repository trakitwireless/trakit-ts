import { BaseComponent } from "../API/BaseComponent";
import { IAmCompany } from "../API/Interfaces/IAmCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { codified, ulong } from "../API/Types";
import { LabelStyle } from "./LabelStyle";


/**
 * The colours and styles used by this company to tag and label Assets, Places, and other things.
 */
export class CompanyStyles
	extends BaseComponent
	implements IIdUlong, IAmCompany {
	/**
	 * Unique identifier of the Company.
	 * {@link Company.id}
	 */
	id: ulong = NaN;
	/**
	 * The unique identifier of this company's parent organization.
	 * {@link Company.id}
	 */
	parentId: ulong = NaN;
	/**
	 * The styles for labels added to Assets, Places, and other things.
	 */
	labels: Map<codified, LabelStyle> = new Map;
	/**
	 * The styles for status tags added to Assets.
	 */
	tags: Map<codified, LabelStyle> = new Map;

	toJSON(): any {
		throw new Error("Method not implemented.");
	}
	fromJSON(json: any): void {
		throw new Error("Method not implemented.");
	}
	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey(): string { return this.id.toString(); }
}