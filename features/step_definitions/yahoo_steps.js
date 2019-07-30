const { client } = require('nightwatch-cucumber')
const { Given, Then } = require('cucumber')
const cssLib = require('../selectors/cssLib.js')

Given(/^I open Yahoo's search page$/, () => {
  return client

    .url('http://yahoo.com')

    .waitForElementVisible(cssLib.body(), 1000)
})

Then(/^the Yahoo search form exists$/, () => {
  return client.assert.visible(cssLib.yahooElements.yahooSearchForm())
})
