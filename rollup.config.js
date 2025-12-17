import typescript from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';

const obfuscate = {
	ecma: 2020,
	compress: {
		drop_console: true,
		drop_debugger: true,
		hoist_funs: true,
		module: true,
		toplevel: true,
	},
	mangle: {
//		keep_classnames: new RegExp([
//	// Companies
//	"Company"
//	, "CompanyGeneral"
//	, "CompanyStyle"
//	, "CompanyDirectory"
//	, "CompanyPolicy"
//	, "CompanyReseller"
//	// Accounts
//	, "Contact"
//	, "Machine"
//	, "Session"
//	, "User"
//	, "User"
//	, "UserGeneral"
//	, "UserAdvanced"
//	, "UserGroup"
//	// Assets
//	, "Asset"
//	, "AssetGeneral"
//	, "AssetAdvanced"
//	, "AssetDispatch"
//	// Messaging
//	, "AssetAlert"
//	, "AssetMessage"
//	// Behaviours
//	, "Behaviour"
//	, "BehaviourScript"
//	, "BehaviourLog"
//	// Billing
//	, "BillableHostingLicense"
//	, "BillableHostingRule"
//	, "BillingProfile"
//	, "BillingReport"
//	// Dispatch
//	, "DispatchJob"
//	, "DispatchTask"
//	// Hosting
//	, "Document"
//	, "FormResult"
//	, "FormTemplate"
//	// Images
//	, "Dashcam"
//	, "Icon"
//	, "Picture"
//	// Maintenance
//	, "MaintenanceSchedule"
//	, "MaintenanceJob"
//	// Places
//	, "Place"
//	// Providers
//	, "Provider"
//	, "ProviderGeneral"
//	, "ProviderAdvanced"
//	, "ProviderControl"
//	, "ProviderScript"
//	, "ProviderConfig"
//	, "ProviderConfigurationType"
//	, "ProviderConfiguration"
//	, "ProviderRegistration"
//	// Reports
//	, "ReportTemplate"
//	, "ReportSchedule"
//	, "ReportResult"
//].join("|")),
		properties: {
			regex: /^[#_]/,
		}
	},
	//format: {
	//	semicolons: false,
	//},
};

export default [
	{
		input: './index.ts',
		output: [
			// {
			//   file: './_publish/trakit-objects.js',
			//   format: 'es',
			// },
			{
				file: './_publish/trakit-objects.min.js',
				format: 'es',
				plugins: [terser(obfuscate)]
			}
		],
		plugins: [typescript({
			tsconfig: './tsconfig.json',
			tsconfigOverride: {
				compilerOptions: {
					declaration: false,
				}
			}
		})],
	}
];