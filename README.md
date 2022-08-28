# webpack145

MiniCssExtractPlugin
This plugin extracts CSS into separate files.

npm install --save-dev mini-css-extract-plugin

add to config:

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

plugins:[
new TerserPlugin()
]

in module.rules->
// use: ["style-loader", "css-loader"],
use: [MiniCssExtractPlugin.loader, "css-loader"],
change: "style-loader" to MiniCssExtractPlugin.loader

finally add new main.css has generated to html:

  <link rel="stylesheet" href="./dist/main.css">

change the name and define a path use option :
new MiniCssExtractPlugin({filename: 'css/style.css'})
