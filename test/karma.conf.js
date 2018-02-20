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
    browsers: ['Chrome'],
    frameworks: ['jasmine'],
    preprocessors: {
      './index.js': ['webpack', 'sourcemap']
    },
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    reporters: ['progress', 'kjhtml'],
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    files: ['./index.js'],
    webpack: webpackConfig, 
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: true,
    // Cobertura
  })
}
