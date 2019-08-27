const cssLib = require('../selectors/cssLib')

module.exports = {
  elements: {},
  commands: [
    {
      currentDay: function () {
        const date = new Date()
        const day = date.getDate()
        let dayStr = day.toString()
        if (dayStr.length == 1) {
          dayStr = ('0' + dayStr)
          return dayStr
        } else {
          return dayStr
        }
      },
      currentDate: function () {
        const date = new Date()
        var month = (1 + date.getMonth()).toString()
        month = month.length > 1 ? month : '0' + month
        var day = date.getDate().toString()
        day = day.length > 1 ? day : '0' + day
        const myDate = day + '.' + month + '.' + date.getFullYear().toString()
        return myDate
      },
      timeSlicer: function (startTime) {
        const time = {
          hour: () => startTime.slice(0, 2),
          minute: () => startTime.slice(3, 5),
          timeOfTheDay: () => startTime.slice(5, 8)
        }
        return time
      },
      timePicker: function (startTime) {
        const time = this.timeSlicer(startTime)
        this.click(cssLib.leftNav.subsections.timesheet.timeIcon()).api.pause(1000)
        this.api.elements('css selector', cssLib.leftNav.subsections.timesheet.clock(), result => {
          result.value.forEach(element => {
            this.elementIdText(element.ELEMENT, result => {
              console.log(result.value)
              console.log(time.hour())
              if (result.value === time.hour()) {
                //this.api.elementIdClick(element.ELEMENT).api.pause(5000)
                console.log(result.value)
                console.log(result.value + '--' + time.hour())
              }
            })
          })
        })
      },

      formInputFiller: function (startDate, endDate, startTime, timeSpent, project, _module, task, description) {
        this.api.pause(500)
        this.setValue(cssLib.leftNav.subsections.timesheet.startDate(), startDate).api.pause(500)
        this.setValue(cssLib.leftNav.subsections.timesheet.endDate(), endDate).api.pause(500)
        this.setValue(cssLib.leftNav.subsections.timesheet.startTime(), startTime).api.pause(5000)
        this.setValue(cssLib.leftNav.subsections.timesheet.timeSpent(), timeSpent).api.pause(500)
        this.setValue(cssLib.leftNav.subsections.timesheet.project(), project).api.pause(500)
        this.setValue(cssLib.leftNav.subsections.timesheet.module(), _module).api.pause(500)
        this.setValue(cssLib.leftNav.subsections.timesheet.task(), task).api.pause(500)
        return this.setValue(cssLib.leftNav.subsections.timesheet.description(), description).api.pause(500)
      }
    }

  ]
}
