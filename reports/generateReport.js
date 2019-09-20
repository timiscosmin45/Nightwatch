const reporter = require('cucumber-html-reporter')

const options = {
  name: 'Internship',
  theme: 'bootstrap',
  jsonDir: 'reports',
  output: 'reports/cucumber_report.html',
  reportSuiteAsScenarios: true,
  launchReport: false,
  ignoreBadJsonFile: true,
  storeScreenShots: false,
  brandTitle: 'Nightwatch',
  metadata: {
    'App Version': '0.9.0',
    Browser: 'Chrome',
    Platform: 'Windows 10',
    Parallel: 'Scenarios',
    Executed: 'Remote'
  }
}

reporter.generate(options)
