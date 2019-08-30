const MinifyPlugin = require('babel-minify-webpack-plugin');
var path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        "home":'./src/window_engine.js'
    },
    devServer: {
        contentBase:  '.',
        // contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }

            },

            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(html)$/,
                  use: ['file-loader?name=[name].[ext]', 'extract-loader', 'html-loader'],
            }
        ]
    },
    plugins: [
        new MinifyPlugin()
    ]
};
