

	/**
	 * Details regarding a provider command
	 */
	export class ProviderCommand {
		/**
		 * Current status of this command.
		 */
		status: ProviderCommandStatus;
		/**
		 * Command message body.
		 */
		parameters: string[] = [];
		/**
		 * Date/time stamp of when the command was created.
		 */
		created: Date = DATE();
		/**
		 * Date/time stamp of when the command was processed.
		 */
		processed: Date = DATE();
	}