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
    semi: [1, 'never'],
    'comma-dangle': ['error', 'only-multiline'],
    'space-before-function-paren': [
      'error',
      { anonymous: 'always', named: 'never' },
    ],
    indent: 'off',
    // indent: [
    //   'error',
    //   2,
    //   {
    //     CallExpression: 1,
    //     FunctionExpression: 1,
    //     FunctionDeclaration: 1,
    //     ObjectExpression: 1,
    //     MemberExpression: 1,
    //     VariableDeclarator: 1,
    //     flatTernaryExpressions: true,
    //     offsetTernaryExpressions: true,
    //   },
    // ],
    'react-hooks/rules-of-hooks': 'error', // Проверяем правила хуков
    'react-hooks/exhaustive-deps': 'warn', // Проверяем зависимости эффекта
  },
  reportUnusedDisableDirectives: true,
}
