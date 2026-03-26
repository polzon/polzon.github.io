import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // Allow Tailwind v4 @theme inline CSS at-rule
      "at-rule-no-unknown": ["error", { ignoreAtRules: ["theme", "import", "layer", "apply", "tailwind"] }],
    },
    overrides: [
      {
        files: ["*.css"],
        rules: {
          "at-rule-no-unknown": ["error", { ignoreAtRules: ["theme", "import", "layer", "apply", "tailwind"] }],
        },
      },
    ],
  },
]);

export default eslintConfig;
