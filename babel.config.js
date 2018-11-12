const stage0ProposalPlugins = [
  // Stage 0
  '@babel/plugin-proposal-function-bind',

  // Stage 1
  '@babel/plugin-proposal-export-default-from',
  '@babel/plugin-proposal-logical-assignment-operators',
  ['@babel/plugin-proposal-optional-chaining', { loose: false }],
  ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
  ['@babel/plugin-proposal-nullish-coalescing-operator', { loose: false }],
  '@babel/plugin-proposal-do-expressions',

  // Stage 2
  ['@babel/plugin-proposal-decorators', { legacy: true }],
  '@babel/plugin-proposal-function-sent',
  '@babel/plugin-proposal-export-namespace-from',
  '@babel/plugin-proposal-numeric-separator',
  '@babel/plugin-proposal-throw-expressions',

  // Stage 3
  '@babel/plugin-syntax-dynamic-import',
  '@babel/plugin-syntax-import-meta',
  ['@babel/plugin-proposal-class-properties', { loose: true }],
  '@babel/plugin-proposal-json-strings'
];

module.exports = {
  env: {
    development: {
      presets: [
        ['@babel/preset-env', { modules: false }],
        '@babel/preset-flow'
      ],
      plugins: [
        'macros',
        '@babel/plugin-transform-runtime',
        ...stage0ProposalPlugins
      ]
    },
    productionBrowser: {
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' }, modules: false }],
        '@babel/preset-flow'
      ],
      plugins: [
        'macros',
        '@babel/plugin-transform-runtime',
        ...stage0ProposalPlugins,
        'closure-elimination',
        'babel-plugin-dynamic-import-node'
      ]
    },
    productionNode: {
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        '@babel/preset-flow'
      ],
      plugins: [
        'macros',
        '@babel/plugin-transform-runtime',
        ...stage0ProposalPlugins,
        'closure-elimination',
        'babel-plugin-dynamic-import-node'
      ]
    }
  }
};
