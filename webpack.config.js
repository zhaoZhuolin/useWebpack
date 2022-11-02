const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    // 入口起点
    entry: "./src/index.js",
    // 输出目录
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, './dist')
    },
    // loader
    module: {
        rules: [
            // 详细loader配置
            {
                //匹配规则(正则验证)
                test: /\.css$/,
                //使用哪些loader处理
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }, {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        publicPath: './image', // 相对打包后的index.html的图片位置
                        outputPath: 'image/', // 输出到build的目录image下
                        // 图片小于 10kb,会被 base64处理
                        limit: 10 * 1024,
                        // 解决：关闭url-loader的es6模块化，使用commonjs解析
                        esModule: false,
                    }, 
                }]
            }]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html",
            filename:"index.html"
        })
    ],
    mode: "development"
}