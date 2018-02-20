// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

'use strict'

const { SpecReporter } = require('jasmine-spec-reporter')
const jasmineReporters = require('jasmine-reporters')
const HTMLReport = require('protractor-html-reporter-2')
const rimraf = require('rimraf')

exports.config = {
  allScriptsTimeout: 11000,
  specs: './spects/example.e2e.spec.js',
  capabilities: {
    browserName: 'chrome'
  },
  directConnect: true,
  baseUrl: 'http: //localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () {}
  },
  // custom config

  onPrepare () {
    require('ts-node').register({ project: './tsconfig.json' })
    jasmine
      .getEnv()
      .addReporter(new SpecReporter({ spec: { displayStacktrace: true } }))
    jasmine.getEnv().addReporter(
      new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: './',
        filePrefix: 'report'
      })
    )
  },
  onComplete () {
    const capsPromise = browser.getCapabilities()

    capsPromise.then(caps => {
      console.log('capsssss platform', caps.get('platform'))

      let testConfig = {
        reportTitle: 'Protractor Test Execution Report',
        outputPath: './protractorReport',
        outputFilename: 'index',
        screenshotPath: './screenshots',
        testBrowser: caps.get('browserName'),
        browserVersion: caps.get('version'),
        modifiedSuiteName: false,
        screenshotsOnlyOnFailure: true,
        testPlatform: caps.get('platform')
      }
      new HTMLReport().from('report.xml', testConfig)
    })
    rimraf('report.xml', () => {})
  }
}
