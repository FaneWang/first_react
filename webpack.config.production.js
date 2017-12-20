var package_json = require('./package.json');
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'app/index.jsx'),
        vendor: Object.keys(package_json.dependencies)
    },
    output: {
        filename: '[name].[chunkhash:8].js',
        path: __dirname + 'dist',
        publicPath: '/dist'
    },
    resolve: { extensions: ['', '.js', '.jsx', '.css'] },
    module: {
        loaders: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style', 'css')
            },
            {
                test: /\.js | .jsx$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + 'dist/index.[chunkhash:8].html'
        }),
        new ExtractTextPlugin('[name].[chunkhash:8].css'),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_DEV': JSON.stringify(process.env.NODE_DEV)
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: '[name].[chunkhash:8].js'
        })
    ]
}