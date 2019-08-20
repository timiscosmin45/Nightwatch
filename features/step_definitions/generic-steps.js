const { client } = require('nightwatch-cucumber')
const { Given, Then } = require('cucumber')
const cssLib = require('../selectors/cssLib')

Given(/^the user is logged in$/, () => {
  return client.waitForElementVisible(cssLib.loginPage.logoutBtn(), 5000, false)
})

Then(/^the title is:"(.*?)"$/, (text) => {
  return client.assert.title(text)
})
