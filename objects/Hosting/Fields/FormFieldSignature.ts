
	/**
	 * A control to capture a signature from the user.
	 *  <remarks>
	 * The device making the capture must save the image to the server some other way.
	 * When submitting the {@link FormResult}, the value must be a path to the signature file.
	 *  </remarks>
	 */
	export class FormFieldSignature extends FormFieldBase {
		/**
		 * Just {@link FormFieldType.signature} control type.
		 */
		protected override FormFieldType[] supported => new[] {
			FormFieldType.signature,
		};
	}