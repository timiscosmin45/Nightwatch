const { client } = require('nightwatch-cucumber')
const { Given, Then } = require('cucumber')
const cssLib = require('../selectors/cssLib')
const loginPage = client.page.loginPage()

Then(/^the title is: (.*?)$/, (text) => {
  return client.assert.title(text)
})

Given(/^the user is logged-in$/, () => {
  return loginPage.loginFunction(cssLib.topNav.languages.english())
}) 
