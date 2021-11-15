/* const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {

    mode: 'development',
    module: {
        rules: [
            
            {
                test: /\.html$/i,

                loader: 'html-loader',
                
                options: { minimize: false }                
            }   

        ]

    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
    ]
    

} */

const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");  
const { sources } = require('webpack');

module.exports = {

    mode: 'production',

    output: {
        clean: true,
        filename: 'main.[contenthash].js'
    },


    module: {
        rules: [
            
            {
                test: /\.html$/i,

                loader: 'html-loader',
                
                options: { 
                    
                    minimize: false,

                    //agrego sources --->

                    sources: false,

                
                }                
            },
            {
                test: /\.css$/i,
                exclude: /style.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /style.css$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader' ]

            },
            {
                test: /\.(png|jpe?|g|gif)$/,
                loader: 'file-loader'

            }
              

        ]

    },
    plugins: [
        new HtmlWebPackPlugin({

            title: 'Mi Web Pack',
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({

            filename: '[name].[fullhash].css',
            ignoreOrder: false

        }),
        new CopyPlugin({
            patterns: [
              { from: "src/assets/", to: "assets/" },
            ],
          })
    ]
    

}















