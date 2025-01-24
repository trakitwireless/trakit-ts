

	/**
	 * Protocols supported by the system.
	 */
	export enum ProviderType {
		/**
		 * Your guess is as good as mine.
		 * It should never be this.
		 */
		unknown,
		/**
		 * Sierra Wireless AirLink RAP protocol
		 * @deprecated No longer supported
		 */
		airlink,
		/**
		 * Sixnet BlueTree BEP protocol
		 * @deprecated No longer supported
		 */
		bluetree,
		/**
		 * Gen-X modem protocol
		 */
		genx,
		/**
		 * CalAmp LMU series protocol
		 * @deprecated Use calamp instead
		 */
		lmu,
		/**
		 * CalAmp TTU series protocol
		 * @deprecated Use calamp instead
		 */
		ttu,
		/**
		 * Novotel Enfora SpiderAT protocol
		 * @deprecated Use enfora instead
		 */
		spiderAT,
		/**
		 * Novotel Enfora SpiderMT protocol
		 * @deprecated Use enfora instead
		 */
		spiderMT,
		/**
		 * Trak iT Wireless Mobile App
		 */
		mobile,
		/**
		 * TachWest DataTrans protocol
		 */
		datatrans,
		/**
		 * Xirgo modem protocol
		 * @deprecated No longer supported
		 */
		xirgo,
		/**
		 * Bell Mobility LBS
		 */
		lbs,
		/**
		 * Certified Tracking protocol
		 * @deprecated No longer supported
		 */
		titan,
		/**
		 * Concox Tracker protocol
		 * @deprecated No longer supported
		 */
		concox,
		/**
		 * Aspenta Open API format
		 * @deprecated No longer supported
		 */
		aspenta,
		/**
		 * Fleet Freedom JSON protocol
		 * @deprecated No longer supported
		 */
		json,
		/**
		 * SmartWitness dashcam formats
		 */
		smartwitness,
		/**
		 * CalAmp LMU/TTU modem protocols
		 */
		calamp,
		/**
		 * Enfora (Novotel) modem protocols
		 * @deprecated No longer supported
		 */
		enfora,
		/**
		 * BeWhere beacon protocols
		 */
		bewhere,
		/**
		 * ATrack device protocols
		 */
		atrack,
		/**
		 * Teltonika device protocols
		 */
		teltonika,
	}