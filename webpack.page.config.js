const process = require("process");
const path = require("path");
const fs = require('fs');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
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
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                presets: ["@babel/preset-env", "@babel/preset-react"],
              }
            }
          ]
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
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                presets: ["@babel/preset-env", "@babel/preset-react"],
              }
            }
          ]
        },
        {
  				test: /\.css$/,
  				use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../',
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
        template: 'src/page/index.html',
        meta: {
          'viewport': 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui, viewport-fit=cover',
          'theme-color': '#000000'
        },
        filename: path.resolve(__dirname, 'build', 'index.html')
      }),
      new HtmlWebpackPlugin({
        title: 'Next Round Page',
        template: 'src/nextround.html',
        meta: {
          'viewport': 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui, viewport-fit=cover',
          'theme-color': '#000000'
        },
        filename: path.resolve(__dirname, 'build', 'nextround.html'),
        chunks: [], // don't automatically add any js to the base page
      })
    ],
    optimization: {
      runtimeChunk : false,
      splitChunks: {
         chunks: 'all',
         maxInitialRequests: Infinity,
         minSize: 0
      },
      minimizer: [
        new CssMinimizerPlugin(),
      ],
    },
    performance: {
      // ignore warnings for sizes if not minified
      // maxAssetSize: 1000000,
      // maxEntrypointSize: 1000000,
    }
  };


  if(process.env.npm_lifecycle_script.includes('production')){
    console.log('MODE: Production', process.env.npm_lifecycle_script);
    delete options.devtool;
    options.plugins.push(new TerserPlugin()); //enable to minify output
  }

  return options;

}
