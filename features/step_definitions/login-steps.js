const { client } = require('nightwatch-cucumber')
const { Then, Given, When } = require('cucumber')
const loginPage = client.page.loginPage()

Given(/^The user opens the timesheet login page$/, () => { // parametrii fixi /^\
  return loginPage
    .navigate()
})

When(/^the username field is visible$/, () => {
  return loginPage.assert.visible.username
})

Then(/^the password field is visible$/, () => {
  return loginPage.assert.visible.password
})

Then(/^enters the username:([^"]*) and the password:(.*?)$/, (username, password) => { // ([^"]*) same with (.*?)
  return loginPage.login(username, password)
})

Then(/^clicks on the Login button$/, () => {
  return loginPage.click.submitButton
})

Then(/^he should be logged in$/, () => {
  return loginPage.assert.visible.logOutButton
})
