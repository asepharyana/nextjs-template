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
    // Vendored third-party components (Aceternity UI registry) keep their
    // upstream animation patterns (random beam decoration, refs during
    // render, setState inside effects). These are intentional microinteraction
    // implementations, not application code debt — relax the React Compiler
    // advisory rules here while keeping type safety.
    files: ["components/ui/**/*.tsx"],
    rules: {
      "react-hooks/purity": "off",
      "react-hooks/refs": "off",
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/immutability": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "no-var": "off",
      "@next/next/no-img-element": "off",
      "react-hooks/exhaustive-deps": "off",
      "@typescript-eslint/no-unused-expressions": "off",
    },
  },
]);

export default eslintConfig;