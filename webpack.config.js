const path = require('path');

const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNoModulePlugin = require('webpack-nomodule-plugin').WebpackNoModulePlugin;
module.exports = (env, options) => {



  let outputCheck = () => {
    if (options.mode == 'production') {
      return {
        filename: "[name].[contentHash].bundle.js",
        path: path.resolve(__dirname, "build")
      }
    } else {
      return {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "build")
      }
    }
  }
  let isMinify = () => {
    if (options.min == 'true') {
      return [
        new OptimizeCssAssetsPlugin(),
        new TerserPlugin()

      ];
    } else {
      return []
    }
  }

  let checkModePlugins = () => {
    if (options.mode == 'production') {
      return [
        new MiniCssExtractPlugin({
          filename: "[name].[contentHash].css"
        }),
        new HtmlWebpackPlugin({
          template: "./src/index.html",
          filename: "../index.html",
          minify: {
            collapseWhitespace: true,
            removeComments: true
          }
        }),
        new WebpackNoModulePlugin({
          filePatterns: ['polyfill.**.js']
        }),
        new CleanWebpackPlugin()
      ]
    } else {
      return [
        new HtmlWebpackPlugin({
          template: "./src/index.html"
        }),
        new WebpackNoModulePlugin({
          filePatterns: ['polyfill.bundle.js']
        })
      ]
    }
  }

  return {
    entry: {
      polyfill: ['babel-polyfill', './src/polyfill.js'],
      app: './src/app.js'
    },
    output: outputCheck(),
    optimization: {
      minimizer: isMinify(),
    },
    plugins: checkModePlugins(),
    module: {
      rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.scss$/,
          use: [options.mode !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        },
        {
          test: /\.html$/,
          use: ["html-loader"]
        },
        {
          test: /\.(svg|png|jpg|gif)$/,
          use: {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: 'build'
            }
          }
        }
      ]
    }
  }
}