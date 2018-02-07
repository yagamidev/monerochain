'use strict'
const path = require('path')

module.exports = {
  port: 8090,
  title: 'UltrapoinChain',
  publicPath:  '/',
  srcPath: path.join(__dirname, './../common'),
  // add these dependencies to a standalone vendor bundle
  vendor: [
    'react', 'react-dom', 'react-router', 'redux', 'react-router-redux', 'redux-thunk', 'whatwg-fetch',
  ],
  // enable babelrc
  babel: {
    babelrc: true
  },
  cssModules: false
}
