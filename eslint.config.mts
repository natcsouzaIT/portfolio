// @ts-expect-error: 'eslint/config' não tem tipos disponíveis
import { defineConfig } from "eslint/config";

import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import prettierConfig from "eslint-config-prettier";


export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: {
      js,
      react: pluginReact,
      reactHooks: pluginReactHooks,
    },
    languageOptions: {
      globals: globals.browser,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    extends: ["js/recommended", prettierConfig],
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,


      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
    },
  },
  tseslint.configs.recommended,
]);

