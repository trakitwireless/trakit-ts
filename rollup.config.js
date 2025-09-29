import typescript from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';

const obfuscate = {
	ecma: 2020,
	// compress: {
	//   keep_classnames: true,
	//   drop_console: true,
	//   drop_debugger: true,
	//   hoist_funs: true,
	//   join_vars: true,
	//   module: true,
	//   toplevel: true,
	// },
	// mangle: {
	// 	keep_classnames: true,
	// 	properties: /^_/
	// },
};

export default [
	{
		input: 'objects/index.ts',
		output: [
			// {
			//   file: '_publish/trakit-objects.js',
			//   format: 'es',
			// },
			{
				file: '_publish/trakit-objects.min.js',
				format: 'es',
				plugins: [terser(obfuscate)]
			}
		],
		plugins: [typescript()],
	}
];