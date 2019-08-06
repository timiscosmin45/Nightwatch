const { client } = require('nightwatch-cucumber')
const { Then, Given, When, And } = require('cucumber')
 
Given(/^The user opens the timesheet login page$/, () => { // parametrii fixi /^
  return client
    .init()
    .waitForElementVisible('body', 1000)
})

When(/^the username field is visible$/, () => {
  return client.assert.visible('input[name="username"]')
})

Then(/^the password field is visible$/, () => {
  return client.assert.visible('input[name="password"]')
})

Then(/^enters the username:([^"]*) and the password:(.*?)$/, (username, password) => {// ([^"]*) same with (.*?)
  return client
    .setValue('input[name="username"]', username)
    .setValue('input[name="password"]', password)
})

Then(/^clicks on the Login button$/, () => {
  return client.click('button[type=submit]')
})

Then(/^he should be redirected to the dashboard$/, () => {
  return client.assert.visible('.ui.header')
})
