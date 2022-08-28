# webpack145

EslintWebpackPlugin

This plugin uses eslint to find and fix problems in your JavaScript code

npm install eslint-webpack-plugin --save-dev

const ESLintPlugin = require('eslint-webpack-plugin');

plugins: [new ESLintPlugin()]

create .eslint and add configuration into it


for extend use ["eslint:recommended"] or pick one of the more popular ESLint configuration by large companies and follow their guidance.
(npx install-peerdeps --dev eslint-config-airbnb
"extends": ["airbnb"],)

