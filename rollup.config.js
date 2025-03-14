import typescript from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';

const obfuscate = {
  ecma: 2016,
  // compress: {
  //   drop_console: true,
  //   drop_debugger: true,
  //   hoist_funs: true,
  //   join_vars: true,
  //   module: true,
  //   toplevel: true,
  // },
  sourceMap: {
    filename: '../_publish/objects.min.js',
  },
};

export default [
  {
    input: 'objects.ts',
    output: [
      // {
      //   file: '../_publish/objects.js',
      //   format: 'es',
      // },
      {
        file: '../_publish/objects.min.js',
        format: 'es',
        plugins: [terser(obfuscate)]
      }
    ],
    plugins: [typescript()],
  }
];