const process = require("process");
const path = require("path");
const fs = require('fs');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DIST_FOLDER = path.resolve('build', 'dist', 'page');
const DIST_DIR = path.resolve(__dirname, DIST_FOLDER);

function resolvePath(dir) {
  return path.join(__dirname, dir);
}

function cleanDistFolder(directory) {
  try {
    let files = fs.readdirSync(directory)
    for (const file of files) {
      fs.unlinkSync(path.join(directory, file))
    }
  } catch (err) {
    console.error(err);
  }
}

module.exports = env => {
  cleanDistFolder(DIST_FOLDER);
  
  let options = {
    entry: ['babel-polyfill', './src/page/index.js'],
    //mode: 'production',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.js$/,
          include: [
            resolvePath('node_modules/framework7'),
            resolvePath('node_modules/framework7-react'),
            resolvePath('node_modules/template7'),
            resolvePath('node_modules/dom7'),
            resolvePath('node_modules/ssr-window')
          ],
          loader: 'babel-loader?cacheDirectory=true',
          options: {
              presets: ["@babel/preset-env"]
          }
        },
        {
  				test: /\.css$/,
  				use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../',
                minimize: true
              }
            },
            "css-loader"
  				]
  			},
        {
          test: /\.(pdf|jpg|png|gif|svg|ico)$/,
          use: [
              {
                  loader: 'url-loader'
              },
          ]
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    output: {
      path: DIST_DIR,
      publicPath: './dist/page/',
      filename: "[name].[contenthash].js"
    },
    plugins: [
      new MiniCssExtractPlugin({ filename: 'page-style.css' }),
      new HtmlWebpackPlugin({
        title: 'Extension App',
        template: 'src/index.html',
        meta: {
          'viewport': 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui, viewport-fit=cover',
          'theme-color': '#000000'
        },
        filename: path.resolve(__dirname, 'build', 'index.html')
      })
    ],
    optimization : {
      runtimeChunk : false,
      splitChunks: {
         chunks: 'all',
         maxInitialRequests: Infinity,
         minSize: 0
      }
    }
  };


  if(process.env.npm_lifecycle_script.includes('production')){
    console.log('MODE: Production', process.env.npm_lifecycle_script);
    delete options.devtool;
    options.plugins.push(new MinifyPlugin());
  }

  return options;

}
