const seleniumServer = require('selenium-server');
const chromedriver = require('chromedriver');
const geckodriver = require('geckodriver');

require('nightwatch-cucumber')({
  cucumberArgs: [
    '--require',
    'helpers/hooks/hooks.js',
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
  test_workers: {
    enabled: false,
    workers: 'auto',
  },
  detailed_output: true,
  output_folder: 'reports',
  custom_assertions_path: '',
  live_output: false,
  disable_colors: false,
  page_objects_path: './page_objects',

  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    log_path: '',
    host: '127.0.0.1',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': chromedriver.path,
      'webdriver.gecko.driver': geckodriver.path,
    },
  },
  test_settings: {
    chrome: {
      launch_url: 'http://192.168.88.76.xip.io:8091/#/login',
      screenshots: {
        enabled: true,
        on_failure: true,
        path: 'screenshots/chrome',
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
      },
    },

    firefox: {
      launch_url: 'http://192.168.88.76.xip.io:8091/#/login',
      screenshots: {
        enabled: true,
        on_failure: true,
        path: 'screenshots/firexox',
      },
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true,
      },
    },

    firefox_headless: {
      launch_url: 'http://192.168.88.76.xip.io:8091/#/login',
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
      },
    },

    chrome_headless: {
      launch_url: 'http://192.168.88.76.xip.io:8091/#/login',
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
          args: ['--headless'],
        },
      },
    },
  },
};
