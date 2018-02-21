const HtmlReporter = require('nightwatch-html-reporter')
const path = require('path')
/* Same options as when using the built in nightwatch reporter option */
const reporter = new HtmlReporter({
  openBrowser: true,
  reportsDirectory: path.join(__dirname, '/reports/')
})

module.exports = {
  write: function (results, options, done) {
    reporter.fn(results, done)
  }
}

/**
 * OPCIONES+info : https://github.com/jls/nightwatch-html-reporter
 */
// {
// 	/* True or False.  If true the generated html will be opened
// 		in your browser after the test run. */
// 	openBrowser: true,

// 	/* The directory you've set nightwatch to store your reports.
// 		On the CLI this determines where we read reports from, but on this
// 		interface it determines where the generated report will be saved. */
// 	reportsDirectory: __dirname + '/reports',

// 	/* The filename that the html report will be saved as. */
// 	reportFilename: 'generatedReport.html',

// 	/* Boolean.  If true we ensure the generated report filename
// 		is unique by appending a timestamp to the end. */
// 	uniqueFilename: false,

// 	/* Boolean.  If true we append the last suite name to
// 		the report filename. */
// 	separateReportPerSuite: false,

// 	/* The theme that will be used to generate the html report.
// 		This should match a directory under the lib/themes directory. */
// 	themeName: 'default',

// 	/* Relative path to custom theme. When this is given,
// 	`themeName` will be ignored. */
// 	customTheme: 'relative/path/to/theme.pug',

// 	/* If true then only errors will be shown in the report. */
// 	hideSuccess: false,

// 	/* If true we append a timestamp to the end of the generated report filename */
// 	uniqueFilename: false,

// 	/* If true we convert screenshot paths from absolute paths to relative to output file. */
// 	relativeScreenshots: false
// }
