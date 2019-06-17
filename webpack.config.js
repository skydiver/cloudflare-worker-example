module.exports = {
  entry: './index.js',
  mode: 'development',
  optimization: {
    minimize: false,
  },
  performance: {
    hints: false,
  },
  output: {
    path: `${__dirname}/dist`,
    publicPath: 'dist',
    filename: 'worker.js',
  },
  devtool: 'cheap-module-source-map',
};
