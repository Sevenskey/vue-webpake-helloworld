// 使用node内置模块path获取输出目录绝对路径
const path = require('path');

// webpack一些插件的入口
const webpack = require('webpack');

// 获取约定好的node环境变量以根据当前环境（生产或测试）启动不同的编译方式
const PROD = JSON.parse(process.env.PROD_ENV || 0);

module.exports = {
    // 应用编译入口
    entry : './main.js',
    
    output : {
        // JavaScript编译输出路径
        path : path.resolve( __dirname, "dist" ),

        // JavaScript编译输出文件
        filename : 'bundle.js',

        // 设置静态资源公共路径
        publicPath : '/dist/',
    },

    // loader设置
    module : {
        rules : [
            {
                // 何种文件
                test : /\.vue$/,

                // 使用何种loader
                loader : 'vue-loader',

                // 该loader的参数设置
                options : {
                    // 猜测vue-loader提供内容（比如jade、less等）输出通道，这些内容可以分发给其他对应的loader进行处理
                    loaders : {
                        // 接收css内容的loader
                        // ! 是管道符
                        // 传递顺序从右到左
                        // 内容流向：vue-loader->css-loader->style-loader->style tag
                        // query中的内容是该loader的参数
                        css : 'style-loader?insertAt=top!css-loader',

                        // 接收less内容的loader
                        less : 'style-loader?insertAt=top!css-loader!less-loader',

                        // 接收js内容的loader
                        // 将es6编译为es5
                        js : 'babel-loader',
                    }
                }
            },
            {
                test : /\.less$/,
                loader : 'less-loader'
            },
            {
                test : /\.js$/,
                loader : 'babel-loader',
                exclude : '/node_modules/',
            },
            {
                test : /\.(png|jpg|gif|svg)$/,
                loader : 'file-loader',
                options : {
                    name : '[name].[ext]?[hash]',
                    outputPath : 'assets/'
                }
            },
        ],
    },

    resolve : {
        alias : {
            // 指定vue的路径，方便require这个包
            'vue' : 'vue/dist/vue.common.js'
        }
    },

    //plugins : PROD ? [
        // 在生产环境中压缩js，不过似乎尚不能用
        //new webpack.optimize.UglifyJsPlugin({
            //minimize : true,
        //}),
    //] : [],
}
