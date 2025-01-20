import typescript from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';

export default {
  input: 'build.ts',
  output: [{
    file: '../_publish/objects.js',
    format: 'es',
  },
  {
    file: '../_publish/objects.min.js',
    format: 'es',
    plugins: [terser()]
  }
  ],
  plugins: [typescript()],
};