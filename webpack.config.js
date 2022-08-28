const path = require("path")
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle[contenthash].js',
        path: path.resolve(__dirname, "./dist"),
        assetModuleFilename: 'images/[name][ext][query]'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                // use: ["style-loader", "css-loader"], 
                use: [MiniCssExtractPlugin.loader, "css-loader"],
                //!remove and write this after adding MiniCssExtractPlugin
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    // "style-loader",
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.png/,
                type: 'asset/resource'
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
    },
    plugins: [
        new TerserPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/style[contenthash].css'
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "index.html",
            // publicPath: "./dist/" //*only for build mode
        }),
        new ESLintPlugin()
    ],
    mode: 'development'

}
