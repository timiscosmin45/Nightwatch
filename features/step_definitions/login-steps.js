const { client } = require('nightwatch-cucumber')
const { Then, Given, When } = require('cucumber')
const loginPage = client.page.loginPage()
const generics = client.page.genericFunctions()
const cssLib = require('../selectors/cssLib')

Given(/^the user opens the timesheet login page$/, () => { // parametrii fixi /^\
  return loginPage.navigate().api.waitForElementVisible(cssLib.body(), 5000, false)
})

When(/^the username field is visible$/, () => {
  return client.assert.visible(cssLib.loginPage.usernameInputField())
})

Then(/^the password field is visible$/, () => {
  loginPage.assert.visible(cssLib.loginPage.passwordInputField())
})

Then(/^the user enters the username: (.*?) and the password: (.*?)$/, (username, password) => { // ([^"]*) same with (.*?)
  if (username === 'blank') loginPage.fillLoginCredentials(' ', password)
  else if (password === 'blank') loginPage.fillLoginCredentials(username, ' ')
  else if (username === 'blank' && password === 'blank') loginPage.fillLoginCredentials(username, password)
  else return loginPage.fillLoginCredentials(username, password)
})

Then(/^clicks on the Login button$/, () => {
  return client.click(cssLib.loginPage.loginBtn())
})

Then(/^the user should be logged-in$/, () => {
  return client.waitForElementVisible(cssLib.loginPage.logoutBtn(), 2000, false)
    .end()
})

Then(/^the following error message: (.*?) should appear$/, (message) => {
  return generics.checkErrorMessage(cssLib.loginPage.errorMessage(), message)
})
