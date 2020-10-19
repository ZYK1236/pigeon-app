module.exports = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  parser: 'typescript',
  singleQuote: true,
  trailingComma: 'none',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  overrides: [
    {
      files: '.prettierrc',
      options: { parser: 'json', trailingComma: 'none' }
    },
    {
      files: '.babelrc',
      options: { parser: 'json', trailingComma: 'none' }
    },
    {
      files: '*.json',
      options: { parser: 'json', trailingComma: 'none' }
    }
  ]
}
