

	/**
	 * Details regarding a provider command
	 */
	export class ProviderCommand {
		/**
		 * Current status of this command.
		 */
		public status: ProviderCommandStatus;
		/**
		 * Command message body.
		 */
		public parameters: string[] = [];
		/**
		 * Date/time stamp of when the command was created.
		 */
		public created: Date = DATE();
		/**
		 * Date/time stamp of when the command was processed.
		 */
		public processed: Date = DATE();
	}