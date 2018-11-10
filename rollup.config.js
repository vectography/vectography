/* eslint-disable import/no-unresolved */
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
/* eslint-enable import/no-unresolved */

import pkg from './package.json';

export default [
  {
    entry: 'src/main.js',
    dest: pkg.browser,
    format: 'umd',
    moduleName: 'howLongUntilLunch',
    plugins: [
      resolve(),
      commonjs(),
      babel({
        exclude: ['node_modules/**']
      })
    ]
  },

  {
    entry: 'src/main.js',
    external: ['ms'],
    targets: [
      { dest: pkg.main, format: 'cjs' },
      { dest: pkg.module, format: 'es' }
    ],
    plugins: [
      babel({
        exclude: ['node_modules/**']
      })
    ]
  }
];
