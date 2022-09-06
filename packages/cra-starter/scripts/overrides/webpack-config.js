const { ModuleFederationPlugin } = require("webpack").container;

const webpackConfigPath = "react-scripts/config/webpack.config";
const webpackConfig = require(webpackConfigPath);
const path = require('path');

let override=undefined;
if (process.env.NODE_ENV!=='production') {

override = config => {
  config.entry.main= path.resolve(__dirname, "./src") + "/index-dev.js";

config.mode= "development";
//config.devServer.static.directory=path.join(__dirname, "build");
//config.devServer.port=3003;
config.output.publicPath = "auto";
config.output.clean=true;
return config;

}  
}


if (process.env.NODE_ENV==='production') {
  override = config => {
    config.plugins.push(new ModuleFederationPlugin(require("../../modulefederation.config.js")));
    config.output.publicPath = "auto";
    config.output.uniqueName= process.env.REACT_APP_ID+"_";
    config.output.clean=true;
    return config;
  };
}

require.cache[require.resolve(webpackConfigPath)].exports = env => override(webpackConfig(env));

module.exports = require(webpackConfigPath);
