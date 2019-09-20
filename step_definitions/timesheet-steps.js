const { client } = require('nightwatch-cucumber')
const { Then } = require('cucumber')
const cssLib = require('../helpers/cssLib/cssLib')
const timesheet = client.page.timesheet()
const generics = client.page.genericFunctions()

Then(/^clicks on the Timesheet section$/, () => {
  return client
    .click(cssLib.leftNav.subsections.timesheet.timesheetSelector())
    .waitForElementVisible(cssLib.leftNav.subsections.timesheet.validator(), 5000, false)
})

Then(/^the user clicks on the current day from the date table$/, async () => {
  const currentDay = timesheet.currentDay()
  await client.elements('css selector', cssLib.leftNav.subsections.timesheet.dayTime(), result => {
    result.value.forEach(element => {
      client.elementIdText(element.ELEMENT, output => {
        if (output.value === currentDay) {
          client.elementIdClick(element.ELEMENT)
        }
      })
    })
  })
})

Then(/^a content box should open$/, () => {
  return client.waitForElementVisible(cssLib.leftNav.subsections.timesheet.dialogBox(), 5000, false)
})

Then(/^the user click on the `Work log` button from the top of the content box$/, () => {
  return client.click(cssLib.leftNav.subsections.timesheet.logWork())
})

Then(/^inserts the folowing data into the input fields, Start Date: (.*?), End date: (.*?), Start Time: (.*?), Time Spent: (.*?), Project: (.*?), Module: (.*?), Task: (.*?), Description: (.*?)$/, (startDate, endDate, startTime, timeSpent, project, module, task, description) => {
  generics.formInputCleaner(cssLib.leftNav.subsections.timesheet.formInputFields())
  timesheet.formInputsFiller(startDate, endDate, timeSpent, project, module, task, description)
  return timesheet.timePicker(startTime)
})

Then(/^clicks on the Save button$/, async () => {
  return client.click(cssLib.leftNav.subsections.timesheet.saveBtn())
})

Then(/^the work log with the following following data, Start Date: (.*?), End date: (.*?), Start Time: (.*?), Time Spent: (.*?), Project: (.*?), Module: (.*?), Task: (.*?), Description: (.*?) should be added$/, async (startDate, endDate, startTime, timeSpent, project, _module, task, description) => {
   client.elements('css selector', cssLib.leftNav.subsections.timesheet.workLogRecord(), result => {
    result.value.forEach(element => {
      client.elementIdText(element.ELEMENT, output => {
        if (output.value.includes(project)) {
          client.elementIdClick(element.ELEMENT)
        }
      })
    })
  })
  timesheet.formInputsChecker(startDate, endDate, startTime, timeSpent, project, _module, task, description)
  return client.click('.red')
})
