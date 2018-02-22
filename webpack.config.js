const webpack = require('webpack')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  cache: true,
  devtool: 'cheap-module-source-map',
  entry: {
    app: __dirname + '/src/App.js',
  },
  output: {
    path: __dirname + '/public/js',
    filename: 'bundle.js',
    publicPath: 'public'
  },
  plugins: [
    // PRODUCTION
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: JSON.stringify('production')
    //   }
    // }),
    // new webpack.optimize.UglifyJsPlugin(),
    // END PRODUCTION
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 8080,
      proxy: 'http://localhost:3000/',
      notify: true,
      open: false,
      files: ['./public/js/*.js', './public/css/*.css']
    }),
    new ExtractTextPlugin({
      filename: '../../public/css/main.css',
      allChunks: true,
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react']
        }
      },
      {const webpack = require('webpack')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')


const config = (env) => {
  let ret = {
    cache: true,
    entry: {
      app: __dirname + '/src/App.js',
    },
    output: {
      path: __dirname + '/public/js',
      filename: 'bundle.js',
      publicPath: 'public'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify(`${env.NODE_ENV}`)
        },
        URL: JSON.stringify(`${env.url}`)
      }),
      new ExtractTextPlugin({
        filename: '../../public/css/main.css',
        allChunks: true,
      })
    ],
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            cacheDirectory: true,
            presets: ['es2015', 'react']
          }
        }
      ]
    }
  }

  // PRODUCCIÓN
  if(env.NODE_ENV == 'production') {
    // Javascript Minificado
    ret.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true
        }
      })
    )
    
    // SASS => CSS Minificado
    ret.module.loaders.push({
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: [
        {loader: 'css-loader', options: {minimize: true}},
        {loader: 'resolve-url-loader'},
        {loader: 'sass-loader'}
      ]
    })
  })
}

// DESARROLLO
if(env.NODE_ENV == 'development') {
  ret.devtool = 'cheap-module-source-map'
  
  // SASS => CSS Sin minificar
  ret.module.loaders.push({
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        {loader: 'css-loader', options: {minimize: false}},
        {loader: 'resolve-url-loader'},
        {loader: 'sass-loader'}
      ]
    })
  })

  // BrowserSync
  ret.plugins.push(
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 8080,
      proxy: 'http://localhost:3000/',
      notify: true,
      open: false,
      files: ['./public/js/*.js', './public/css/*.css']
    })
  )
}

  return ret
}

module.exports = config

        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: [
            // Minify CSS
            {loader: 'css-loader', options: {minimize: false}},
            {loader: 'resolve-url-loader'},
            {loader: 'sass-loader'}
          ]
        })
      }
    ]
  }
}
