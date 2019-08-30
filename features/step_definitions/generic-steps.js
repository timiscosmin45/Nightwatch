const { client } = require('nightwatch-cucumber')
const { Given, Then } = require('cucumber')
const cssLib = require('../selectors/cssLib')
const loginPage = client.page.loginPage()
const generics = client.page.genericFunctions()

Then(/^the title is: (.*?)$/, (text) => {
  return client.assert.title(text)
})

Given(/^the user is logged-in$/, () => {
  return loginPage.loginFunction(cssLib.topNav.languages.english())
})

Then(/^the following message should pop up: (.*?)$/, (message) => {
  return generics.checkErrorMessage(cssLib.loginPage.errorMessage(), message)
})

Then(/^the user logs out$/, () => {
  return loginPage.logOutFunction()
})