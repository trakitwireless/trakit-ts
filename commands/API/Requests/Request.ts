

	/// <summary>
	/// Base class for all command parameters.
	/// All command parameter classes use this as the base.
	/// </summary>
	/// <remarks>
	/// This class exists solely to create an inheritance chain.
	/// Child classes should contain members required to execute a command.
	/// </remarks>
	export class Request {
		/// Used to split the Request class name into pieces to help create commands
		static readonly Regex SPLITTER = new Regex("Req([A-Z][a-z]+)+?((?:Batch)?(?:Get|List|Merge|Delete|Restore|Suspend|Revive|Cancel|Change))(By.+)?", RegexOptions.Compiled);
		/// <summary>
		/// Splits this class' name into parts helpful to <see cref="TrakitCommander{TClient}.Command{TResponse}(Request)"/>.
		/// </summary>
		/// <returns></returns>
		public string[] GetNameParts() => SPLITTER.Match(this.GetType().Name)
											.Groups
											.Cast<Group>()
											.Skip(1)
											.Select(g => g.Value ?? "")
											.ToArray();

		/// <summary>
		/// Identifier used by external system to correlate requests to responses.
		/// </summary>
		[JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
		public reqId: int = NaN;
	}