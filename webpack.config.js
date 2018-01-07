const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const package_json = require('./package.json');

module.exports = {
    devtool: 'source-map',
    entry: [
        'babel-polyfill',
        'react-hot-loader/patch',
        path.resolve(__dirname, 'app/index.jsx')
    ],
    output: {
        filename: 'js/bundle.[hash:8].js',
        path: path.resolve(__dirname, '/dist'),
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.less']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    // 没有选项的loader的简写
                    'style-loader',
                    // style-loader的非简写方式
                    // {
                    //     loader:'style-loader',
                    //     option:{
                    //          module:false
                    //      }
                    // }
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                // 使用ant-design这里不能排除node-modules
                // exclude: /node_modules/,
                use: [
                    // 没有选项的loader的简写
                    { loader: 'style-loader' },
                    // style-loader的非简写方式
                    // {
                    //     loader:'style-loader',
                    //     option:{
                    //          module:false
                    //      }
                    // }
                    { loader: 'css-loader' },
                    {
                        loader: 'less-loader',
                        options: {
                            // 自定义antd主题颜色，后面是固定写法的json
                            "modifyVars": { "primary-color": "#1DA57A", }
                        }
                    }
                ]
            },
            {
                test: /(\.jsx|\.js)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            }, {
                test: /\.(png|jpg|jpeg|gif)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 5000,
                            outputPath: 'images/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/template.html'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        inline: true,
        historyApiFallback: true,
        hot: true,
    }
}