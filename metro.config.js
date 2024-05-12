/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const source =
  '/Users/asterisk/Codes/rn/react-native-chat-library-2.0/packages/react-native-chat-uikit';
// const source2 =
//   '/Users/asterisk/Downloads/2024-05-11/react-native-chat-uikit-2.1.0';

module.exports = {
  watchFolders: [
    // Add your project directories here
    source,
  ],
  resolver: {
    extraNodeModules: {
      // Add your project directories here
      // 'react-native-chat-uikit': source,
    },
    nodeModulesPaths: [
      // '/Users/asterisk/Codes/rn/react-native-chat-library-2.0/packages/react-native-chat-uikit/node_modules',
      // '/Users/asterisk/Codes/rn/react-native-chat-library-2.0/node_modules',
      '/Users/asterisk/tmp/2024.05.11/TestUIKit71/node_modules',
    ],
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};

console.log('test:zuoyu:config:', module.exports);
