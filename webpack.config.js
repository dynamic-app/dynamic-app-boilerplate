const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

  entry: ['./src/app.js'],

  output: {
    path: path.resolve(__dirname, "src/dist"),
    filename: 'app.js'
  },

  module: {
    rules: [{
      test: /\.js?$/,
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-react"],
      }
    },
    {
      test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
      use: 'file-loader',
    }, {
      test: /\.css$/,
      use: [{
        loader: MiniCssExtractPlugin.loader,
        options: {
          hmr: process.env.NODE_ENV === 'development',
        },
      }, 'css-loader', {
        loader: 'postcss-loader',
        options: {
          plugins: function () {
            return [require('autoprefixer')];
          }
        }
      }],
    }],
  },

  plugins: [new MiniCssExtractPlugin({
    filename: 'app.css',
  }),],

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css'],
    modules: ['node_modules', 'src'],
  },

  devtool: "source-map",
};
