/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const {getDefaultConfig} = require('metro-config')

const path = require('path')
const watchFolders = [
  //Relative path to packages directory because I'm in yarn workpspaces
  path.resolve(__dirname),
]

module.exports = (async () => {
  const {
    resolver: {sourceExts, assetExts},
  } = await getDefaultConfig()
  return {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
      // babel,
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg', 'js', 'jsx', 'json', 'ts', 'tsx', 'cjs', 'mjs'],
      extraNodeModules: {},
    },
    watchFolders,
  }
})()
