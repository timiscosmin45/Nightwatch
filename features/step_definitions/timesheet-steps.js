const { client } = require('nightwatch-cucumber')
const { Given, When, Then } = require('cucumber')
const cssLib = require('../selectors/cssLib')
const loginPage = client.page.loginPage()
const timesheet = client.page.timesheet()

Then(/^clicks on the Timesheet section$/, () => {
  return client
    .click(cssLib.leftNav.subsections.timesheet.timesheetSelector())
    .waitForElementVisible(cssLib.leftNav.subsections.timesheet.validator(), 5000)
})

Then(/^chooses a day for adding the work log$/, () => {
  console.log(timesheet.month_yearPicker(new Date(2019, 0, 1), new Date()))
})