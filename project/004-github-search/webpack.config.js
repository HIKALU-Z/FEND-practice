module.exports = {
  entry:'./js/index.js',
  output:{
    path: __dirname+'/dist',
    filename:'bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      }
    ]
  }
}