module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts', 'tailwind.config.js', 'postcss.config.js'], // Archivos a ignorar
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn', // Cambiado a 'warn' para no ser tan estricto durante el desarrollo
      { argsIgnorePattern: '^_' }
    ],
    // Puedes añadir más reglas personalizadas aquí
    // Ejemplo:
    // 'react/prop-types': 'off', // Si usas TypeScript, los prop-types no son tan necesarios
    // '@typescript-eslint/explicit-function-return-type': 'off',
  },
}
