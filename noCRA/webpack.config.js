import { fileURLToPath } from "url";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import TerserPlugin from "terser-webpack-plugin";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProduction = process.env.NODE_ENV === "production";

const stylesHandler = "style-loader";

const config = {
  devServer: {
    historyApiFallback: true,
    // inline: true,
    port: 3000,
    hot: true,
    // publicPath: "/",
  },
  entry: path.resolve(__dirname, "develop", "router.tsx"),
  mode: isProduction ? "production" : "development",
  devtool: isProduction ? "hidden-source-map" : "eval",
  output: {
    path: path.resolve(__dirname, "develop", "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "develop", "index.html"),
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(tsx?|js)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "ts-loader"],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, //콘솔로그 제거
          },
          output: {
            comments: true, //주석 제거
          },
        },
      }),
    ],
  },
};

export default config;
