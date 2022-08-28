const path = require("path");
// const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.[contenthash].js",
        path: path.resolve(__dirname, "./dist"),
    },
    mode: "development",

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpg|svg|jpeg)$/i,
                type:"asset/resource"
                // use: [
                //     {
                //         loader: "file-loader",
                //         options: {
                //             name: "[name].[ext]",
                //             outputPath: "images/",
                //         },
                //     },
                // ],
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/i,
                type:"asset/inline"
                // use: ["url-loader"],
            },
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
        ],
    },
    devServer: {
        contentBase : path.resolve(__dirname, "./dist"),
        port : 9001
    },
    plugins: [
        // new TerserPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/style.[contenthash].css",
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "index.html",
        }),
        new ESLintPlugin()
    ],
};