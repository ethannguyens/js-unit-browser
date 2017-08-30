const path = require('path');
const webpack = require('webpack');

const localhost = 'localhost';
const port  = 3003;

//Default configuration for test
const configuration = {
  entry: 'mocha-loader!./tests/index.js',
  output: {
    filename: 'test.build.js',
    path: path.join(__dirname, 'tests/bundle'),
    publicPath: `http://localhost:${port}/tests/bundle`
  },
  module: {
    rules: [

      {
        test: /\.json$/,
        exclude: /node_modules/,
        use: {
          loader: 'json-loader'
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,

        use: {
          loader: 'babel-loader',
          options: {
            presets: ["es2015", 'react'],
            plugins: ["transform-object-rest-spread"]
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({ "global.GENTLY": false,
    })
  ],
  devServer: {
    host: localhost,
    port: 3003
  },
  externals:[{
    xmlhttprequest: '{XMLHttpRequest:XMLHttpRequest}',
    nodeModules: 'node_modules',
    'react/addons': true,
    "jsdom": "window",
    "cheerio": "window",
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true

  }],
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
};

module.exports = configuration;
