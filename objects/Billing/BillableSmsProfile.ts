import { FLOAT } from "../API/Constants";
import { ID, IS_AN } from "../API/Functions";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { double, uint } from "../API/Types";

/**
 * Description of a tiered SMS messaging limit
 */
export class BillableSmsProfile
	implements ISerializable {
	static fromJSON(json: any) {
		return new BillableSmsProfile(
			json["limit"],
			json["amount"]
		);
	}
	/**
	 * The maximum number of messages sent per cycle
	 */
	limit: uint = NaN;
	/**
	 * Cost per SMS message sent.
	 * Received messages are free.
	 */
	amount: double = NaN;

	constructor(
		limit: uint,
		amount: double
	) {
		this.limit = ID(limit);
		this.amount = FLOAT(amount as any);
	}

	toJSON(): any {
		return {
			"limit": IS_AN(this.limit) ? this.limit : null,
			"amount": IS_AN(this.amount) ? this.amount : null,
		}
	}
}