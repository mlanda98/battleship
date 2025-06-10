const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/, // CSS files
        use: ['style-loader', 'css-loader'], // inject CSS into DOM & load CSS
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // copy this HTML to dist with script tags injected
    }),
  ],
  mode: 'development', // or 'production' when building for deployment
  devtool: 'inline-source-map', // helpful for debugging in dev mode
  devServer: {
    static: './dist',
    hot: true,
    open: true,
  },
};
