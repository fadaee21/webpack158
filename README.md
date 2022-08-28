# webpack145

you must use contenthash for naming
filename: 'bundle[contenthash].js'
filename: 'css/style[contenthash].css'

it cause some problem that to fix them you need these plugins

**\_\_\_\_**clean-webpack-plugin\***\*\_\*\***

this plugin will remove all files inside webpack's output. path directory, as well as all unused webpack assets after every successful rebuild.

npm install --save-dev clean-webpack-plugin

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

**\_\_\_\_**HtmlWebpackPlugin**\*\***\_**\*\***

useful for webpack bundles that include a hash in the filename which changes every compilation.

npm install --save-dev html-webpack-plugin

const HtmlWebpackPlugin = require('html-webpack-plugin');

plugins: [
  new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "index.html",
            // publicPath: "./dist/" //*only for build mode
        })
]

اگر بخواهیم فایل ها را داخل سرور بارگزاری کنیم 

فایل اصلی index.html در فولدر dist  قرار دارد و در این صورت سرور دچار خطا میشود چون فایل اصلی باید در روت و خارج از dist  باشد اگر فایل را از dist خارج کنیم برای آدرس های css & js که در فایل index.html هست دجار مشکل می شویم و دیگر جاوااسکریپت و سی اس اس دیگر لود نمی شوند 

برای حل این مشکل از آپشن دیگری که در html plugin هست استفاده میکنیم تا همیشه آدرس سی اس اس و جی اس در فایل ایندکس یک dist/ اضافه میکنیم تا بعدا که قصد خارج کردن فایل index.htmlاز پوشه dist در سرور را داشتیم دچار مشکل نشویم 
 

نکته بعدی اینکه این عمل فقط برای حالتی که قصد Production کردن برای سرور را داریم باید استفاده شود 