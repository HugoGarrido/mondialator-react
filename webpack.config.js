var ExtractTextPlugin = require("extract-text-webpack-plugin");
var ExtractTextPluginConfig = new ExtractTextPlugin('style.css', {
    allChunks: true
});


//require("style!css!./file.css");

var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPlugConfig = new HTMLWebpackPlugin({
    template: __dirname + "/app/index.html",
    filename: "index.html",
    inject: 'body'
});


module.exports = {
    entry: [
        './app/index.js',
        './app/styles/app.scss'
    ],
    output : {
        path: __dirname + "/dist",
        filename: "index_bundle.js"
    },
    module : {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
            {test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader?minimize!autoprefixer-loader!sass-loader")}
        ]
    },
    plugins: [HTMLWebpackPlugConfig, new ExtractTextPlugin("main.min.css", {allChunks: false})]
};