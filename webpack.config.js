//require('babel-polyfill');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: [
        'babel-polyfill',
        'react-hot-loader/patch',
        path.resolve('src/index.js'),
    ],

    output: {
        filename: 'bundle.js',
        path: path.resolve('public'),
    },

    module: {
        rules: [
            {
                test: /.js$/,
                exclude:/(node_modules|bower_compontents)/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {}  
                  }
                ]
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 3000,
    },

    plugins: [
        // new HtmlWebpackPlugin({
        //   title: 'Hiossen'
        // }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
};
