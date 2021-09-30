module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    // quotes: ['error', 'single'],
    // 'no-console': 'off',
    'member-access': 'off',
    'jsx-no-lambda': 'off',
    'jsx-boolean-value': 'off',
    'no-inner-declarations': 'off',
    'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
    semi: [1, 'never'],
    'comma-dangle': ['error', 'only-multiline'],
    'space-before-function-paren': [
      'error',
      { anonymous: 'always', named: 'never', asyncArrow: 'always' },
    ],
    indent: [
      0,
      2,
      {
        SwitchCase: 1,
        flatTernaryExpressions: true,
        offsetTernaryExpressions: true,
        CallExpression: { arguments: 1 },
        FunctionExpression: { arguments: 1 },
        FunctionDeclaration: { arguments: 1 },
        ObjectExpression: { arguments: 1 },
        MemberExpression: { arguments: 1 },
        VariableDeclarator: { arguments: 1 },
      },
    ],
    'react-hooks/rules-of-hooks': 'error', // Проверяем правила хуков
    'react-hooks/exhaustive-deps': 'warn', // Проверяем зависимости эффекта
  },
  reportUnusedDisableDirectives: true,
}
