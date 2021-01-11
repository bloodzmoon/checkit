const path = require('path')
const fs = require('fs')

/**
 * [How to add new alias]
 *
 * 1. Add it in `paths.json`
 * 2. Also add it in `package.json` where `jest.moduleNameMapper` lives
 */
module.exports = function override(config) {
  const pathToJson = path.resolve(__dirname, './paths.json')
  const myAliasObject = JSON.parse(fs.readFileSync(pathToJson))
  const pathsObject = myAliasObject.compilerOptions.paths

  const myAlias = {}
  for (const alias in pathsObject) {
    myAlias[alias] = path.resolve(__dirname, pathsObject[alias][0])
  }

  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      ...myAlias,
    },
  }

  return config
}
