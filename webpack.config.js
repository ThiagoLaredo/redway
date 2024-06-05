// const path = require('path');

// module.exports = {
//   entry: './js/script.js',
//   output: {
//     path: path.resolve(__dirname, './'),
//     filename: 'main.js',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env'],
//             plugins: ['@babel/plugin-transform-runtime'],
//           },
//         },
//       },
//       {
//         test: /\.css$/i,
//         use: ['style-loader', 'css-loader'],
//       },
//     ],
//   },
// };

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
        type: 'asset/resource',  // Webpack 5 maneira de lidar com recursos estáticos
        generator: {
          filename: 'assets/images/[hash][ext][query]'  // Local e nome do arquivo no output
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
      template: './src/index.html',  // Caminho para o seu arquivo HTML de origem
      filename: 'index.html'  // Nome do arquivo no diretório de saída
  }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/img', to: 'img' } // Copia tudo de src/img para dist/img
      ]
    }),
  ],
  resolve: {
    extensions: ['.js'],
  },
  mode: 'production',
};
