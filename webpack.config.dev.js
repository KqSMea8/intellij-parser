const path = require('path');
const webpack = require('webpack');

// check node version
const semver = require('semver');
const chalk = require('chalk');
const nodeVersion = process.version;


if (semver.lt(nodeVersion, '8.1.0')) {
  console.log(chalk.red(`Please upgrade node to 8.1, your are using ${nodeVersion}.`));
  process.exit(0);
}

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, './client/index.ts'),

  output: {
    path: __dirname + './built',
    publicPath: '/built',
    filename: '[name].js',
    chunkFilename: '[name]-[chunkhash].js'
  },

  devtool: 'cheap-eval-module-source-map',
  cache: true,
  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    ignored: /node_modules/
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: [path.resolve(__dirname, './client'), path.resolve(__dirname, './service')],
        use: [
          {
            loader: 'ts-loader',
            options: {
              happyPackMode: true,
              transpileOnly: true ,
              configFile: path.resolve(__dirname, './tsconfig.json')
            },
          }
        ]
      },
      {
        test: /\.worker\.js$/,
        use: {
          loader: 'worker-loader'
        }
      }
    ]
  },

  devServer: {
    // https: true,
    contentBase: path.join(__dirname),
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    historyApiFallback: {
      disableDotRule: true,
      index: 'index.html'
    },
    stats: {
      assets: true,
      chunks: false,
      cached: false,
      cachedAssets: false,
      children: false,
      chunks: false,
      chunkModules: false,
      chunkOrigins: false,
      modules: false,
      timing: true
    },
    host: '0.0.0.0',
    port: 8000,
    inline: true,
    compress: true,
    // hot: true,
    // hotOnly: true,
    // disableHostCheck: true
  },

  externals: {},

  performance: {
    hints: false
  },

  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      },
      __DEV__: true
    }),
    new webpack.LoaderOptionsPlugin({
			options: {
				worker: {
					output: {
						filename: "common.worker.js",
						chunkFilename: "[id].hash.worker.js"
					}
				}
			}
		}),
    new webpack.WatchIgnorePlugin([/\.js$/]),
  ]
};
