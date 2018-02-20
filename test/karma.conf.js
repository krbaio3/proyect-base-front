// This is a karma config file. For more details see
//   http://karma-runner.github.io/0.13/config/configuration-file.html
// we are also using it with karma-webpack
//   https://github.com/webpack/karma-webpack

const path = require('path');

let webpackConfig = require('../build/webpack.test.conf')

// console.log('variable entorno', process.argv);

module.exports = function(config) {
  config.set({
    // anything named karma-* is normally auto included so you probably dont need this
    // plugins:
    frameworks: ['jasmine', 'mocha', 'sinon-chai'],
    files: [
      'index.js',
    ],
    reporters: ['coverage-istanbul'],
    preprocessors: {
      './index.js': ['webpack', 'sourcemap'],
    },
    webpackMiddleware: {
      noInfo: true,
       stats: 'errors-only',
    },
    webpack: webpackConfig, 
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity,
    reporters: ['coverage-istanbul'],
    // any of these options are valid: https://github.com/istanbuljs/istanbuljs/blob/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-api/lib/config.js#L33-L39
    coverageIstanbulReporter: {
      // reports can be any that are listed here: https://github.com/istanbuljs/istanbuljs/tree/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-reports/lib
      reports: ['html', 'lcovonly', 'text-summary'],
      // base output directory. If you include %browser% in the path it will be replaced with the karma browser name
      dir: path.join(__dirname, 'coverage'),
      // Combines coverage information from multiple browsers into one report rather than outputting a report
      // for each browser.
      combineBrowserReports: true,
      // if using webpack and pre-loaders, work around webpack breaking the source path
      fixWebpackSourcePaths: true,
      // stop istanbul outputting messages like `File [${filename}] ignored, nothing could be mapped`
      skipFilesWithNoCoverage: true,
      // Most reporters accept additional config options. You can pass these through the `report-config` option
      // 'report-config': {
      //   // all options available at: https://github.com/istanbuljs/istanbuljs/blob/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-reports/lib/html/index.js#L135-L137
      //   html: {
      //     // outputs the report in ./coverage/html
      //     subdir: 'html'
      //   }
      // },
      // enforce percentage thresholds
      // anything under these percentages will cause karma to fail with an exit code of 1 if not running in watch mode
      thresholds: {
        emitWarning: true, // set to `true` to not fail the test command when thresholds are not met
        global: { // thresholds for all files
          statements: 100,
          lines: 100,
          branches: 100,
          functions: 100
        },
        // each: { // thresholds per file
        //   statements: 100,
        //   lines: 100,
        //   branches: 100,
        //   functions: 100,
        //   overrides: {
        //     'baz/component/**/*.js': {
        //       statements: 98
        //     }
        //   }
        // }
      }
    }
  })
}
