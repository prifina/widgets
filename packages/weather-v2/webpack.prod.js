const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
module.exports = merge(common, {
  entry: "./src/index",
  mode: "production",
  output: {
    publicPath: "auto",
    clean: true,
  },
 
});
