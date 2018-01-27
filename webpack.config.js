var path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');



const config = {
    entry: './src/main.js',

    output: {
        path: path.join(__dirname),
        filename: 'bundle.js',
    },

    devServer: {
        inline: true,
        port: 8080
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',

                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }


};

module.exports = config;