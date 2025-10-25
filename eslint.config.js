import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import i18next from "eslint-plugin-i18next";

export default tseslint.config(
  { ignores: ["dist", "coverage", "public/*.{xml,txt,ico,png,jpg,webp,svg}"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      i18next,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-unused-vars": "off",
      // Enforce i18n usage - prohibit literal strings in JSX including accessibility and placeholders
      "i18next/no-literal-string": [
        "error",
        {
          markupOnly: true,
          ignoreAttribute: [
            "to",
            "id",
            "className",
            "data-testid",
            "aria-hidden",
            "aria-current",
            "type",
            "name",
            "role",
            "variant",
            "size",
            "href",
            "rel",
            "target",
            "method",
            "action",
            "xmlns",
            "viewBox",
            "fill",
            "stroke",
            "strokeWidth",
            "strokeLinecap",
            "strokeLinejoin",
            "d",
            "x",
            "y",
            "width",
            "height",
            "rx",
            "ry",
            "cx",
            "cy",
            "r",
            "focusable",
            "style",
          ],
          // Allow short technical tokens (HTTP verbs, version numbers, etc.)
          ignorePattern: "^[A-Z0-9_:/.-]{1,5}$",
        },
      ],
    },
  },
  // Disable react-refresh warnings for shadcn/ui components
  // These components intentionally export variants/hooks alongside components
  // following shadcn/ui official patterns for composition and customization
  {
    files: ["src/components/ui/**/*.{ts,tsx}"],
    rules: {
      "react-refresh/only-export-components": "off",
    },
  },
  // Disable i18next rule for translation files
  {
    files: ["public/locales/**", "src/locales/**"],
    rules: {
      "i18next/no-literal-string": "off",
    },
  },
  // Disable i18next rule for config files, scripts, and tests
  {
    files: [
      "**/*.{spec,test}.{ts,tsx}",
      "scripts/**",
      "vite.config.*",
      "tailwind.config.*",
      "postcss.config.*",
      "eslint.config.*",
      "playwright.config.*",
      "*.d.ts",
    ],
    rules: {
      "i18next/no-literal-string": "off",
    },
  }
);
