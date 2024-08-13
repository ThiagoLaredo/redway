const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/js/script.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[hash][ext][query]'
        }
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      minify: {
        removeRedundantAttributes: false,
      },
    }),
    new HtmlWebpackPlugin({
      template: './src/faleconosco.html',
      filename: 'faleconosco.html',
      minify: {
        removeRedundantAttributes: false,
      },
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/img', to: 'img' },
        { from: 'src/translations.json', to: 'translations.json' }
      ]
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  mode: 'production',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    historyApiFallback: true,
    compress: true,
    port: 9000,
    open: true,
    hot: true,
    proxy: [
      {
        context: ['/api'],
        target: 'http://localhost:5005',
        secure: false,
        changeOrigin: true,
        timeout: 120000
      }
    ]
  }
};
