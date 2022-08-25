# webpack145


add scss file and import to button.js

Error:
ERROR in ./src/components/button/body.scss 4:13
Module parse failed: Identifier directly after number (4:13)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders



resolve:
https://webpack.js.org/loaders/sass-loader/#root

npm install sass-loader sass  --save-dev

module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};
