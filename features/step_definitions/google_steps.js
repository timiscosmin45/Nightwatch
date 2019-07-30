const { client } = require('nightwatch-cucumber')
const { Given, Then } = require('cucumber')
const cssLib = require('../selectors/cssLib.js')

Given(/^I open Google's search page$/, () => {
  return client

    .url('http://google.com')

    .waitForElementVisible(cssLib.body(), 1000)
})

Then(/^the Google search form exists$/, () => {
  return client.assert.visible(cssLib.googleElements.googleSearchForm())
})
