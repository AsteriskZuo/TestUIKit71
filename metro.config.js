/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  watchFolders: [
    // Add your project directories here
    '/Users/asterisk/Codes/rn/react-native-chat-library-2.0/packages/react-native-chat-uikit',
  ],
  resolver: {
    extraNodeModules: {
      // Add your project directories here
      'react-native-chat-uikit':
        '/Users/asterisk/Codes/rn/react-native-chat-library-2.0/packages/react-native-chat-uikit',
    },
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
