const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';

const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(nodeEnv)
    }
  }),
  new HtmlWebpackPlugin({
    template: 'index.html',
    inject: true,
    chunks: ['app'],
    filename: 'index.html'
  }),
  new HtmlWebpackPlugin({
      template: 'examples/stacks.html',
      inject: true,
      chunks: ['app'],
      filename: 'examples/stacks.html'
  }),
  new HtmlWebpackPlugin({
    template: 'examples/queues.html',
    inject: true,
    chunks: ['app'],
    filename: 'examples/queues.html'
  }),
  new HtmlWebpackPlugin({
    template: 'examples/linkedlists.html',
    inject: true,
    chunks: ['app'],
    filename: 'examples/linkedlists.html'
  }),
  new HtmlWebpackPlugin({
    template: 'examples/sets.html',
    inject: true,
    chunks: ['app'],
    filename: 'examples/sets.html'
  }),
  new HtmlWebpackPlugin({
    template: 'examples/maps.html',
    inject: true,
    chunks: ['app'],
    filename: 'examples/maps.html'
  }),
  new HtmlWebpackPlugin({
    template: 'examples/hashtables.html',
    inject: true,
    chunks: ['app'],
    filename: 'examples/hashtables.html'
  }),
  new HtmlWebpackPlugin({
    template: 'examples/trees.html',
    inject: true,
    chunks: ['app'],
    filename: 'examples/trees.html'
  }),
  new HtmlWebpackPlugin({
    template: 'examples/graphs.html',
    inject: true,
    chunks: ['app'],
    filename: 'examples/graphs.html'
  }),
  new HtmlWebpackPlugin({
    template: 'examples/quicksort.html',
    inject: true,
    chunks: ['app'],
    filename: 'examples/quicksort.html'
  }),
  new HtmlWebpackPlugin({
    template: 'examples/linearsearch.html',
    inject: true,
    chunks: ['app'],
    filename: 'examples/linearsearch.html'
  }),
  new HtmlWebpackPlugin({
    template: 'examples/binarysearch.html',
    inject: true,
    chunks: ['app'],
    filename: 'examples/binarysearch.html'
  }),
  new HtmlWebpackPlugin({
    template: 'examples/hackerrank/twostrings.html',
    inject: true,
    chunks: ['app'],
    filename: 'examples/hackerrank/twostrings.html'
  }),
  new webpack.LoaderOptionsPlugin({
    options: {
      tslint: {
        emitErrors: true,
        failOnHint: true
      }
    }
  })
];

var config = {
  devtool: isProd ? 'hidden-source-map' : 'source-map',
  context: path.resolve('./src'),
  entry: {
    app: './index.ts'
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i, 
        loader: "file-loader?name=/src/images/[name].[ext]"
      },
      {
        test: /\.(js|ts)$/,
        use: [
          {
            loader: `expose-loader`,
            options: 'Library'
          }
        ]
      },
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        exclude: [/\/node_modules\//],
        use: ['awesome-typescript-loader', 'source-map-loader']
      },
      !isProd
        ? {
            test: /\.(js|ts)$/,
            loader: 'istanbul-instrumenter-loader',
            exclude: [/\/node_modules\//],
            query: {
              esModules: true
            }
          }
        : null,
      { test: /\.html$/, loader: 'html-loader' },
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] }
    ].filter(Boolean)
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: plugins,
  devServer: {
    contentBase: path.join(__dirname, 'dist/'),
    compress: true,
    port: 3000,
    hot: true
  }
};

module.exports = config;
