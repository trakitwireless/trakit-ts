


	/// <summary>
	/// The full details of a Vehicle, containing all the properties from the <see cref="VehicleGeneral"/> and <see cref="VehicleAdvanced"/> objects.
	/// </summary>
	export class Vehicle extends Asset {
		/// <summary>
		/// General details about this vehicle.
		/// </summary>
		/// <override skip="true" />
		new public VehicleGeneral general {
			get => (VehicleGeneral)base.General;
			set => base.General = value;
		}
		/// <summary>
		/// Advanced details about this vehicle.
		/// </summary>
		/// <override skip="true" />
		new public VehicleAdvanced advanced {
			get => (VehicleAdvanced)base.Advanced;
			set => base.Advanced = value;
		}

		/// <summary>
		/// Manufacturer's unique identification number (Vehicle Identification Number).
		/// </summary>
		/// <override max-length="50" />
		public string vin {
			get => (this.general ?? throw new NullReferenceException("general")).vin;
			set => (this.general ?? throw new NullReferenceException("general")).vin = value;
		}
		/// <summary>
		/// The license plate.
		/// </summary>
		/// <override max-length="50" />
		public string plate {
			get => (this.general ?? throw new NullReferenceException("general")).plate;
			set => (this.general ?? throw new NullReferenceException("general")).plate = value;
		}
		/// <summary>
		/// Manufacturer's name.
		/// </summary>
		/// <override max-length="50" />
		public string make {
			get => (this.general ?? throw new NullReferenceException("general")).make;
			set => (this.general ?? throw new NullReferenceException("general")).make = value;
		}
		/// <summary>
		/// Manufacturer's model name/number.
		/// </summary>
		/// <override max-length="50" />
		public string model {
			get => (this.general ?? throw new NullReferenceException("general")).model;
			set => (this.general ?? throw new NullReferenceException("general")).model = value;
		}
		/// <summary>
		/// Year of manufacturing.
		/// </summary>
		public ushort year {
			get => (this.general ?? throw new NullReferenceException("general")).year;
			set => (this.general ?? throw new NullReferenceException("general")).year = value;
		}
		/// <summary>
		/// Primary colour of the vehicle (given in 24bit hex; #RRGGBB)
		/// </summary>
		/// <override max-length="22" format="colour" />
		public string colour {
			get => (this.general ?? throw new NullReferenceException("general")).colour;
			set => (this.general ?? throw new NullReferenceException("general")).colour = value;
		}

		/// <summary>
		/// The cumulative duration that the vehicle's engine has been running (in decimal hours).
		/// </summary>
		public double engineHours {
			get => (this.advanced ?? throw new NullReferenceException("advanced")).engineHours;
			set => (this.advanced ?? throw new NullReferenceException("advanced")).engineHours = value;
		}
	}