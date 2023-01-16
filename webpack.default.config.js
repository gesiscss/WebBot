const process = require("process");
const path = require("path");
const DIST_FOLDER = path.resolve('build', 'dist');
const DIST_DIR = path.resolve(__dirname, DIST_FOLDER);

const TerserPlugin = require("terser-webpack-plugin");

module.exports = env => {
  const FILENAME = env.NODE_ENV? env.NODE_ENV : 'default';

  let options = {
    entry: './src/'+FILENAME+'/index.js',
    //mode: 'production',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    output: {
      // pathinfo: false, //ability to generate path info in the output bundle
      path: DIST_DIR,
      filename: FILENAME+".js"
    },
    plugins: [],
    optimization : {
      runtimeChunk : false,
      minimizer: [
        // new UglifyJsPlugin({
        //   uglifyOptions: {
        //     mangle: {
        //       keep_fnames: true,
        //     },
        //   },
        // })
      ],
    },
    performance: {
      // ignore warnings for sizes if not minified
      maxAssetSize: 1000000,
      maxEntrypointSize: 1000000,
    }
  };


  if(process.env.npm_lifecycle_script.includes('production')){
    console.log('MODE: Production', process.env.npm_lifecycle_script);
    delete options.devtool;
    options.plugins.push(new TerserPlugin()); //enable to minify output
  }

  return options;

}//();
