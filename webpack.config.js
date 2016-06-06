var commonLoader = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    query:{
      presets: ['react', 'es2015']
    }
  },{
    test: /\.json$/,
    loader: 'json-loader',
  }
];

module.exports = [
  {
    name: 'client',
    entry: __dirname + "/app/src/js/index.js",
    output: {
      path: __dirname + '/app/dest/',
      filename: 'app.bundle.js'
    },
    module: {
      loaders: commonLoader
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
  },{
    name: 'server',
    entry: __dirname + "/app/src/js/server.js",
    target: 'node',
    output: {
      path: __dirname + '/app/dest/',
      filename: 'server.bundle.js',
      libraryTarget: 'commonjs2',
    },

    module: {
      loaders: commonLoader
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
  }
];
