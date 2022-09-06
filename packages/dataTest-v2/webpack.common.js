const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
//const webpack = require("webpack");

const deps = require('./package.json').dependencies;
require('dotenv').config()

module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: process.env.REACT_APP_ID,
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App",
      },
      shared: 
        {
          react:{singleton: true,requiredVersion: deps.react},
          "react-dom":{singleton: true,requiredVersion: deps["react-dom"]},
          '@prifina/hooks-v2': {
              import: '@prifina/hooks-v2'
            }  
            
          //react: {},
          //"react-dom": {},
          //"react-dom/client": {}

        }
      
      /*

      shared: [
        'react',
        'react-dom',
        {
          '@shared-context/shared-library': {
            import: '@shared-context/shared-library',
            requiredVersion: require('../shared-library/package.json').version,
          },
        },
      ],
      shared: [
        
        {
          react: { singleton: true, requiredVersion: deps['react'] },
          "react-dom/client": { singleton: true,requiredVersion: deps['react-dom'] },
        },
        
      ],
      */
    }),
    new HtmlWebpackPlugin({
      title: process.env.REACT_APP_ID,
      template: './public/index.html',
    }),
    /*
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1,
        }),*/
  ],
};
