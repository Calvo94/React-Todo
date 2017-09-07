var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: ['script-loader!jquery/dist/jquery.min.js',
  'script-loader!foundation-sites/dist/js/foundation.min.js',
  './app/app.jsx',
],
externals: {
  jquery:'jQuery'
},
plugins: [
  new webpack.ProvidePlugin({
    '$':'jquery',
    'jQuery':'jquery'
  })
],

  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    modules: [__dirname, 'node_modules','./app/components'],
    alias: {
      Main:'app/components/Main.jsx',
      applicationStyles: 'app/styles/app.scss',
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_module|bower_components)/
      },
      {
        loader:['style-loader','css-loader'],
        test: /\.css?$/
      },
      {
        loader:['style-loader','css-loader'],
        test: /\.scss?$/
      },
      {
        loader:'sass-loader',
        test: /\.scss?$/,
        options: {
          includePaths: [
            path.resolve(__dirname, './node_modules/foundation-sites/scss')
          ]
        }
      }

    ],
  },
  devtool: 'inline-source-map'
};
