var webpack = require('webpack');
var path = require('path');

var config = {
  entry: './app/index.js',
  output: {
    filename: 'public/bundle.js'
  },
   module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : /app/,
        loader : 'babel',
        query: {
          presets: ["react", "es2015"]
        }
      }
    ]
  },
};

module.exports = config;
