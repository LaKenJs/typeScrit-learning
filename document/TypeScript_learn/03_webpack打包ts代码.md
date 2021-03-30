#  webpack打包TS文件

#### 操作

```
// 初始化项目配置文件
npm init -y

// 下载需要的依赖包
npm i -D webpack webpack-cli typescript ts-loader

// 创建webpack.config.js
// 内容如下
// 引入包
const path = require('path')

const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// webpack 中的配置信息都应该写在module.exports中
module.exports = {
    // 入口文件
    entry: "./src/index.ts",

    // 指定打包文件所在目录
    output: {
        // 指定打包的文件目录
        path: path.resolve(__dirname, 'dist'),
        // 打包后的文件
        filename: "bundle.js",
        
        environment: {
            // 是否使用箭头函数
            arrowFunction: false
        }
    },

    // 指定webpack打包时使用的模块
    module: {
        // 指定要加载的规则
        rules: [
            {
                // 指定规则生效的文件
                test: /\.ts$/,
                // 要使用loader
                // loader: "ts-loader",
                use: [
                    {
                        // 指定加载器
                        loader: "babel-loader",
                        options: {
                            // 设置预定义环境
                            presets: [
                                [
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        targets: {
                                            "chrome": "88"
                                        },
                                        "corejs": "3",
                                        "userBuiltIn": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],
                // 要排除的文件,只要路径中存在就不编译
                exclude: /node-modules/
            }
        ]
    },

    plugins: [
        new HTMLWebpackPlugin(
            {
                // 若不想在这里定义html的title，就创建一个html文件自己定义
                // title: '狂拽炫酷吊炸天',
                template: "./src/index.html"
            }
        ),
        new CleanWebpackPlugin()
    ],

    // 设置引入模块
    resolve: {
        // 设置引入模块的文件
        exportsFields: ['.ts', '.js']
    }
}


```

