module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    indent: [
      "error",
      2,
      {
        SwitchCase: 1,
        ignoredNodes: [
          // !!!!!!!!!! анализ узлов по выражению - https://astexplorer.net/
          "ConditionalExpression > CallExpression",
        ],
      },
    ],
    semi: [2, "always"],
    "space-before-function-paren": [
      "error",
      { anonymous: "always", named: "never" },
    ],
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    "multiline-ternary": ["off"],
  },
};
