/* eslint-disable import/no-unresolved */
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
/* eslint-enable import/no-unresolved */

import pkg from './package.json';

export default [
  {
    input: 'src/main.js',
    output: { name: 'vectography', file: pkg.browser, format: 'umd' },
    plugins: [
      resolve(),
      commonjs(),
      babel({ exclude: ['node_modules/**'], runtimeHelpers: true })
    ]
  },
  {
    input: 'src/main.js',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    plugins: [babel({ exclude: ['node_modules/**'], runtimeHelpers: true })]
  }
];
