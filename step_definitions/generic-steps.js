const { client } = require('nightwatch-cucumber')
const { Given, Then } = require('cucumber')
const cssLib = require('../helpers/cssLib/cssLib')
const loginPage = client.page.loginPage()
const generics = client.page.genericFunctions()

Then(/^the title is: (.*?)$/, (text) => {
  return client.assert.title(text)
})

Given(/^the user is logged-in$/, () => {
  client.element('css selector', cssLib.loginPage.logoutBtn(), ({ status }) => {
    if (status === -1) {
      return loginPage.loginFunction(cssLib.topNav.languages.english())
    }
  })
})

Then(/^the user logs out$/, () => {
  return loginPage.logOutFunction()
})

Then(/^the following message should pop up: (.*?)$/, (message) => {
  return generics.checkErrorMessage(cssLib.loginPage.errorMessage(), message)
})
