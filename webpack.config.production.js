const package_json = require('./package.json');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: {
        app: path.resolve(__dirname, 'app/index.jsx'),
        vendor: Object.keys(package_json.dependencies)
    },
    output: {
        filename: 'js/[name].[chunkhash:8].js',
        // 指定文件的发布目录
        path: __dirname + '/dist',
        // index.html中src的引用路径
        publicPath: '/'
    },
    resolve: { extensions: ['.js', '.jsx', '.css', '.less'] },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.less$/,
                // exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            },
            {
                test: /(\.jsx|\.js)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
                // options:{
                //     presets:[["react"],["env",{"modules":false}],["stage-0"]],
                //     plugins:["react-hot-loader/babel"]
                // }
            }, {
                test: /\.(png|jpg|jpeg|gif)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 5000,
                        outputPath: 'images/'
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/template.html'
        }),
        new ExtractTextPlugin('css/app.[chunkhash:8].css'),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new UglifyJsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'js/[name].[chunkhash:8].js'
        })
    ]
}