module.exports = {
  env: {
    worker: true,
    commonjs: true,
    amd: true,
    es6: true,
    node: true,
    browser: true,
    "shared-node-browser": true
  },
  plugins: ["babel", "flowtype", "prettier"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 7,
    sourceType: "module",
    ecmaFeatures: {
      impliedStrict: true,
      allowImportExportEverywhere: true
    },
    allowImportExportEverywhere: false
  },
  settings: {
    flowtype: { onlyFilesWithFlowAnnotation: true },
    "import/resolver": {
      node: {
        extensions: [".js"],
        moduleDirectory: ["node-modules", "./src"]
      }
    }
  },
  extends: [
    "airbnb-base",
    "eslint:recommended",
    "plugin:flowtype/recommended",
    "prettier",
    "prettier/flowtype"
  ],
  rules: {
    "prettier/prettier": ["error", { singleQuote: true }],
    "comma-dangle": ["error", "never"],
    "consistent-return": "off",
    "space-before-function-paren": [
      "error",
      {
        anonymous: "never",
        named: "never",
        asyncArrow: "always"
      }
    ],
    "max-len": "off",
    indent: "off",
    "no-console": "off"
  }
};
