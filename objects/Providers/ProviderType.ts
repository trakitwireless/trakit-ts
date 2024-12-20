

	/// <summary>
	/// Protocols supported by the system.
	/// </summary>
	export enum ProviderType {
		/// <summary>
		/// Your guess is as good as mine.
		/// It should never be this.
		/// </summary>
		unknown,
		/// <summary>
		/// Sierra Wireless AirLink RAP protocol
		/// </summary>
		[Obsolete("No longer supported")]
		airlink,
		/// <summary>
		/// Sixnet BlueTree BEP protocol
		/// </summary>
		[Obsolete("No longer supported")]
		bluetree,
		/// <summary>
		/// Gen-X modem protocol
		/// </summary>
		genx,
		/// <summary>
		/// CalAmp LMU series protocol
		/// </summary>
		[Obsolete("Use calamp instead")]
		lmu,
		/// <summary>
		/// CalAmp TTU series protocol
		/// </summary>
		[Obsolete("Use calamp instead")]
		ttu,
		/// <summary>
		/// Novotel Enfora SpiderAT protocol
		/// </summary>
		[Obsolete("Use enfora instead")]
		spiderAT,
		/// <summary>
		/// Novotel Enfora SpiderMT protocol
		/// </summary>
		[Obsolete("Use enfora instead")]
		spiderMT,
		/// <summary>
		/// Trak iT Wireless Mobile App
		/// </summary>
		mobile,
		/// <summary>
		/// TachWest DataTrans protocol
		/// </summary>
		datatrans,
		/// <summary>
		/// Xirgo modem protocol
		/// </summary>
		[Obsolete("No longer supported")]
		xirgo,
		/// <summary>
		/// Bell Mobility LBS
		/// </summary>
		lbs,
		/// <summary>
		/// Certified Tracking protocol
		/// </summary>
		[Obsolete("No longer supported")]
		titan,
		/// <summary>
		/// Concox Tracker protocol
		/// </summary>
		[Obsolete("No longer supported")]
		concox,
		/// <summary>
		/// Aspenta Open API format
		/// </summary>
		[Obsolete("No longer supported")]
		aspenta,
		/// <summary>
		/// Fleet Freedom JSON protocol
		/// </summary>
		[Obsolete("No longer supported")]
		json,
		/// <summary>
		/// SmartWitness dashcam formats
		/// </summary>
		smartwitness,
		/// <summary>
		/// CalAmp LMU/TTU modem protocols
		/// </summary>
		calamp,
		/// <summary>
		/// Enfora (Novotel) modem protocols
		/// </summary>
		[Obsolete("No longer supported")]
		enfora,
		/// <summary>
		/// BeWhere beacon protocols
		/// </summary>
		bewhere,
		/// <summary>
		/// ATrack device protocols
		/// </summary>
		atrack,
		/// <summary>
		/// Teltonika device protocols
		/// </summary>
		teltonika,
	}