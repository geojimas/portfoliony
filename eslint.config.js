import antfu from '@antfu/eslint-config'

export default antfu(
  {
    javascript: true,
    react: true,
    formatters: {
      css: true,
      html: true,
    },
    // Parse the `.gitignore` file to get the ignores, on by default
    gitignore: true,
  },
  {
    // Remember to specify the file glob here, otherwise it might cause the vue plugin to handle non-vue files
    files: ['**/*.js'],
  },
)
