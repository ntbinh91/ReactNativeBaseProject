module.exports = {
  root: true,
  extends: ["@react-native-community", "prettier"],
  settings: {
    "import/resolver": "react-native",
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
        singleQuote: false,
        printWidth: 80,
        bracketSpacing: true,
        jsxBracketSameLine: false,
        tabWidth: 2,
        semi: true,
      },
    ],
  },
};
