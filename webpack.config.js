
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: path.resolve(__dirname, 'app/index.jsx'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css']
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ['style', 'css']
            },
            {
                test: /\.js | .jsx$/,
                exclude: /node_modules/,
                loader: ['react-hot', 'babel']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + 'dist/index.html'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        })
    ],
    devServer: {
        colors: true,
        inline: true,
        historyApiFallback: true
    }
}