// See more info: http://nightwatchjs.org
// Nightwatch cloud

require('babel-register')

const config = require('../config')

// http://nightwatchjs.org/gettingstarted#settings-file
module.exports = {
  src_folders: ['./e2e/specs'],
  output_folder: './e2e/reports',
  // Option
  // custom_assertions_path: ['./e2e/custom-assertions'],

  selenium: {
    start_process: true,
    server_path: require('selenium-server').path,
    host: '127.0.0.1',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': require('chromedriver').path
    }
  },

  test_settings: {
    default: {
      selenium_port: 4444,
      selenium_host: 'localhost',
      silent: true,
      globals: {
        devServerURL:
          'http://localhost:' + (process.env.PORT || config.dev.port)
      }
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    }
  }
}
