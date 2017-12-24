const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    devtool: 'source-map',
    entry: [
        'babel-polyfill',
        'react-hot-loader/patch',
        path.resolve(__dirname, 'app/index.jsx')
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '/dist'),
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
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
                test: /(\.jsx|\.js)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:__dirname + '/template.html'
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