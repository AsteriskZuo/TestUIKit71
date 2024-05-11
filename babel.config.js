const name = 'react-native-chat-uikit';
const source =
  '/Users/asterisk/Codes/rn/react-native-chat-library-2.0/packages/react-native-chat-uikit/src/index';
const source2 =
  '/Users/asterisk/Downloads/2024-05-11/react-native-chat-uikit-2.1.0/src/index';
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        alias: {
          [name]: source2,
        },
      },
    ],
  ],
};
