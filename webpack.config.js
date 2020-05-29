const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true,
        port: 3000,
        hot: true,
        open: true
    },
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        filename: './main.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node-modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                    use: [
                        {
                            loader: 'html-loader',
                            options: { minimize: true }
                        }
                    ]
            },
            {
                test: /\.(ico|png|jpeg|webp|heic|heif|avif|svg|jpg|gif|eot|ttf|woff|woff2)$/,
                use: {
                    loader: 'file-loader'
                }
            },
            {
                test:/\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            filename: './index.html',
            favicon: path.join(__dirname, 'src', 'favicon.ico')
        }),
        /*
        // Used for copying files to dist folder
        new CopyPlugin({
            patterns: [
                { from: 'src/oneFile' },
                { from: 'src/anotherFile' }
            ]
        }) 
        */
    ]
}