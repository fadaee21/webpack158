# webpack145


add css file and import to button.js

Error:
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders


resolve:
https://webpack.js.org/loaders/css-loader/#root
npm install --save-dev style-loader css-loader

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

