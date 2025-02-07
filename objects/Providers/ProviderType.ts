/**
 * Protocols supported by the system.
 */
export enum ProviderType {
	/**
	 * Your guess is as good as mine.
	 * It should never be this.
	 */
	unknown = "unknown",
	/**
	 * Sierra Wireless AirLink RAP protocol
	 * @deprecated No longer supported
	 */
	airlink = "airlink",
	/**
	 * Sixnet BlueTree BEP protocol
	 * @deprecated No longer supported
	 */
	bluetree = "bluetree",
	/**
	 * Gen-X modem protocol
	 */
	genx = "genx",
	/**
	 * CalAmp LMU series protocol
	 * @deprecated Use calamp instead
	 */
	lmu = "lmu",
	/**
	 * CalAmp TTU series protocol
	 * @deprecated Use calamp instead
	 */
	ttu = "ttu",
	/**
	 * Novotel Enfora SpiderAT protocol
	 * @deprecated Use enfora instead
	 */
	spiderAT = "spiderAT",
	/**
	 * Novotel Enfora SpiderMT protocol
	 * @deprecated Use enfora instead
	 */
	spiderMT = "spiderMT",
	/**
	 * Trak iT Wireless Mobile App
	 */
	mobile = "mobile",
	/**
	 * TachWest DataTrans protocol
	 */
	datatrans = "datatrans",
	/**
	 * Xirgo modem protocol
	 * @deprecated No longer supported
	 */
	xirgo = "xirgo",
	/**
	 * Bell Mobility LBS
	 */
	lbs = "lbs",
	/**
	 * Certified Tracking protocol
	 * @deprecated No longer supported
	 */
	titan = "titan",
	/**
	 * Concox Tracker protocol
	 * @deprecated No longer supported
	 */
	concox = "concox",
	/**
	 * Aspenta Open API format
	 * @deprecated No longer supported
	 */
	aspenta = "aspenta",
	/**
	 * Fleet Freedom JSON protocol
	 * @deprecated No longer supported
	 */
	json = "json",
	/**
	 * SmartWitness dashcam formats
	 */
	smartwitness = "smartwitness",
	/**
	 * CalAmp LMU/TTU modem protocols
	 */
	calamp = "calamp",
	/**
	 * Enfora (Novotel) modem protocols
	 * @deprecated No longer supported
	 */
	enfora = "enfora",
	/**
	 * BeWhere beacon protocols
	 */
	bewhere = "bewhere",
	/**
	 * ATrack device protocols
	 */
	atrack = "atrack",
	/**
	 * Teltonika device protocols
	 */
	teltonika = "teltonika",
}