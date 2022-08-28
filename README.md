# webpack145

پلاگین برای کاهش حجم فایل باندل

terser:
https://webpack.js.org/plugins/terser-webpack-plugin/#root


npm install terser-webpack-plugin --save-dev

add to config:

const TerserPlugin = require("terser-webpack-plugin");

plugins:[
  new TerserPlugin()
]

برای استفاده از پلاگین ها باید ذر قسمت 
plugins:[]
استفاده شوند