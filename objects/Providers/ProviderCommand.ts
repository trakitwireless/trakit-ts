

	/// <summary>
	/// Details regarding a provider command
	/// </summary>
	export class ProviderCommand {
		/// <summary>
		/// Current status of this command.
		/// </summary>
		public status: ProviderCommandStatus;
		/// <summary>
		/// Command message body.
		/// </summary>
		public parameters: string[] = [];
		/// <summary>
		/// Date/time stamp of when the command was created.
		/// </summary>
		public created: Date = DATE();
		/// <summary>
		/// Date/time stamp of when the command was processed.
		/// </summary>
		public processed: Date = DATE();
	}