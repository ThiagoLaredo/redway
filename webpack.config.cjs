// 
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
      // Regra para processar JavaScript
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
      // Regra para processar CSS e imagens de fundo
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: true, // Habilita o processamento de URLs no CSS
              importLoaders: 1,
            },
          },
        ],
      },
      // Regra para processar imagens
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext][query]', // Salva as imagens na pasta 'img'
        }
      },
      // Regra para processar fontes
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]', // Salva as fontes na pasta 'fonts'
        },
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
    new HtmlWebpackPlugin({
      template: './src/servicos.html',
      filename: 'servicos.html',
      minify: {
        removeRedundantAttributes: false,
      },
    }),
    new HtmlWebpackPlugin({
      template: './src/servico.html',
      filename: 'servico.html',
      minify: {
        removeRedundantAttributes: false,
      },
    }),
    new HtmlWebpackPlugin({
      template: './src/fique-alerta.html',
      filename: 'fique-alerta.html',
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
