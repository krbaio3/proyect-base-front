// This is a karma config file. For more details see
//   http://karma-runner.github.io/0.13/config/configuration-file.html
// we are also using it with karma-webpack
//   https://github.com/webpack/karma-webpack

const mocha = require('karma-mocha-reporter')

let webpackConfig = require('../build/webpack.test.conf')

// console.log('variable entorno', process.argv);

module.exports = function(config) {
  config.set({
     basePath: '',
    frameworks: ['jasmine', 'mocha', 'sinon-chai'],
    files: [
      'index.js',
    ],
    reporters: ['spec'],
    preprocessors: {
      './index.js': ['webpack', 'sourcemap'],
    },
    webpackMiddleware: {
      noInfo: true,
    },
    webpack: webpackConfig, 
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity
  })
}
