const baseConfig = require('./nightwatch.conf.js')
require('dotenv').config()

const config = {
  ...baseConfig,
  selenium: {
    start_process: false,
    host: 'hub-cloud.browserstack.com',
    port: 80
  },
  test_setting: {
    browserstack: {
      screenshots: {
        enabled: true,
        on_failure: true,
        path: 'screenshots/browserstack'
      },
      desiredCapabilities: {
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    }
  }
}

config.test_settings.browserstack = {
  desiredCapabilities: {
    os: 'Windows',
    os_version: '10',
    browserName: 'Chrome',
    browser_version: '47.0',
    'browserstack.local': false,
    'browserstack.video': true,
    'browserstack.user': process.env.BROWSERSTACK_USER,
    'browserstack.key': process.env.BROWSERSTACK_KEY

  }
}

// Code to copy seleniumhost/port into test settings
for (var i in config.test_settings) {
  var test_setting = config.test_settings[i]
  test_setting['selenium_host'] = config.selenium.host
  test_setting['selenium_port'] = config.selenium.port
}

module.exports = config
