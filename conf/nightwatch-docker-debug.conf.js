const seleniumServer = require('selenium-server');
const chromeDriver = require('chromedriver');
const geckoDriver = require('geckodriver');

require('nightwatch-cucumber')({
  cucumberArgs: [
    '--require',
    'features/hooks/hooks.js',
    '--require',
    'step_definitions',
    '--format',
    'json:reports/cucumber.json',
    '--format',
    'node_modules/cucumber-pretty',
    'features',
  ],
});

module.exports = {
  output_folder: 'reports',
  custom_assertions_path: '',
  live_output: false,
  disable_colors: false,
  page_objects_path: './page_objects',

  selenium: {
    start_process: false,
    server_path: seleniumServer.path,
    log_path: '',
    host: '127.0.0.1',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': chromeDriver.path,
      'webdriver.gecko.driver': geckoDriver.path,
    },
  },
  test_settings: {
    chrome: {
      //launch_url: 'http://192.168.88.76.xip.io:8091/#/login',
      screenshots: {
        enabled: true,
        on_failure: true,
        path: 'screenshots/chrome',
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        loggingPrefs: {
          browser: 'ALL',
        },
      },
    },
    firefox: {
      // launch_url: 'http://192.168.88.76.xip.io:8091/#/login',
      selenium_port: 4444,
      selenium_host: '127.0.0.1',
      screenshots: {
        enabled: true,
        on_failure: true,
        path: 'screenshots/firefox',
      },
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true,
        loggingPrefs: {
          browser: 'ALL',
        },
      },
    },
    firefox_headless: {
      //launch_url: 'http://192.168.88.76.xip.io:8091/#/login',
      selenium_port: 4444,
      selenium_host: '127.0.0.1',
      screenshots: {
        enabled: true,
        on_failure: true,
        path: 'screenshots/firefox',
      },
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true,
        'moz:firefoxOptions': {
          args: ['--headless'],
        },
        loggingPrefs: {
          browser: 'ALL',
        },
      },
    },
    chrome_headless: {
      launch_url: 'http://192.168.88.76.xip.io:8091/#/login',
      selenium_port: 4444,
      selenium_host: '127.0.0.1',
      screenshots: {
        enabled: true,
        on_failure: true,
        path: 'screenshots/chrome',
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ['headless'],
        },
        loggingPrefs: {
          browser: 'ALL',
        },
      },
    },
  },
};
