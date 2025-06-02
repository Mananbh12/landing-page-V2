import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off", // Désactive les avertissements pour variables inutilisées
      "prefer-const": "off", // Autorise l'utilisation de let même si la variable n'est pas reassignée
      "@typescript-eslint/no-explicit-any": "off", // Permet l'utilisation de any
      "react-hooks/exhaustive-deps": "off", // Désactive les vérifications de dépendances dans useEffect
    },
  },
];

export default eslintConfig;