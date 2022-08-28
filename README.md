# webpack145

babel:
https://webpack.js.org/loaders/babel-loader/


npm install -D babel-loader @babel/core @babel/preset-env webpack

add to config:

{
test: /\.m?js$/,
exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
  }
}

create .babelrc and add into:

{
  "presets": ["@babel/preset-env"]
}


