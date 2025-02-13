import { MERGE } from '../API/Objects';
import { email } from '../API/Types';
import { MessageBase } from './MessageBase';
import { MessageFolder } from './MessageFolder';

/**
 * A conversational message between users and assets.
 */
export class AssetMessage
	extends MessageBase {
	/**
	 * The folder under which this message is stored.
	 */
	folder: MessageFolder = MessageFolder.archive;
	/**
	 * Indicates that this is a received message instead of a sent message.
	 */
	incoming: boolean = false;
	/**
	 * The user that read this message.  This field is blank/null when unread.
	 * {@link User.login}
	 */
	readBy: email = "";

	override toJSON() {
		return MERGE(
			super.toJSON(),
			{
				"folder": MessageFolder[this.folder] || MessageFolder.archive,
				"incoming": !!this.incoming,
				"readBy": this.readBy || "",
			}
		);
	}
	override fromJSON(json: any, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"]) || !!(force && json);
		super.fromJSON(json, update);
		if (update) {
			this.folder = MessageFolder[json["folder"] as MessageFolder] || MessageFolder.archive;
			this.incoming = !!json["incoming"];
			this.readBy = json["readBy"] || "";
		}
		return update;
	}
}