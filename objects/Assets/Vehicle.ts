


	/**
	 * The full details of a Vehicle, containing all the properties from the <see cref="VehicleGeneral"/> and <see cref="VehicleAdvanced"/> objects.
	 */
	export class Vehicle extends Asset {
		/**
		 * General details about this vehicle.
		 *  <override skip="true" />
		 */
		new public VehicleGeneral general {
			get => (VehicleGeneral)base.General;
			set => base.General = value;
		}
		/**
		 * Advanced details about this vehicle.
		 *  <override skip="true" />
		 */
		new public VehicleAdvanced advanced {
			get => (VehicleAdvanced)base.Advanced;
			set => base.Advanced = value;
		}

		/**
		 * Manufacturer's unique identification number (Vehicle Identification Number).
		 *  <override max-length="50" />
		 */
		string vin {
			get => (this.general ?? throw new NullReferenceException("general")).vin;
			set => (this.general ?? throw new NullReferenceException("general")).vin = value;
		}
		/**
		 * The license plate.
		 *  <override max-length="50" />
		 */
		string plate {
			get => (this.general ?? throw new NullReferenceException("general")).plate;
			set => (this.general ?? throw new NullReferenceException("general")).plate = value;
		}
		/**
		 * Manufacturer's name.
		 *  <override max-length="50" />
		 */
		string make {
			get => (this.general ?? throw new NullReferenceException("general")).make;
			set => (this.general ?? throw new NullReferenceException("general")).make = value;
		}
		/**
		 * Manufacturer's model name/number.
		 *  <override max-length="50" />
		 */
		string model {
			get => (this.general ?? throw new NullReferenceException("general")).model;
			set => (this.general ?? throw new NullReferenceException("general")).model = value;
		}
		/**
		 * Year of manufacturing.
		 */
		ushort year {
			get => (this.general ?? throw new NullReferenceException("general")).year;
			set => (this.general ?? throw new NullReferenceException("general")).year = value;
		}
		/**
		 * Primary colour of the vehicle (given in 24bit hex; #RRGGBB)
		 *  <override max-length="22" format="colour" />
		 */
		string colour {
			get => (this.general ?? throw new NullReferenceException("general")).colour;
			set => (this.general ?? throw new NullReferenceException("general")).colour = value;
		}

		/**
		 * The cumulative duration that the vehicle's engine has been running (in decimal hours).
		 */
		double engineHours {
			get => (this.advanced ?? throw new NullReferenceException("advanced")).engineHours;
			set => (this.advanced ?? throw new NullReferenceException("advanced")).engineHours = value;
		}
	}