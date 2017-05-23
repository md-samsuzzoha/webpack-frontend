const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({ // define where to save the file
      filename: 'css/bundle.css',
      allChunks: true,
    });


module.exports = [{
    entry:  [__dirname+'/app/index.js', __dirname+'/style/style.scss'] ,
    output: {
        path: path.resolve(__dirname+'/builds/'),
        publicPath: "/assets/",
        filename: 'js/bundle.js',
    },
    module: {

        rules: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader?importLoaders=1',
        }),
      },
     {
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
     },
     {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        loader: 'file-loader?name=[name].[ext]&outputPath=fonts/'
     }
     ]
  },
 plugins: [
        extractSass,

    ]
}];