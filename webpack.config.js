const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    popup: './src/popup.js',
    background: './src/background.js'
  },
  output: {
    filename: '[name].js'
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "./src/assets", to: "." },
      ],
    }),
  ],
};
