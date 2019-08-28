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
          firstElement: startTime.slice(0, 1).trim(),
          hour: null,
          minute: startTime.slice(3, 5).trim(),
          timeOfTheDay: startTime.slice(5, 8).trim()
        }
        if (time.firstElement === '0') {
          time.hour = startTime.slice(1, 2)
        } else {
          time.hour = startTime.slice(0, 2)
        }
        return time
      },
      timePicker: async function (startTime) {
        const time = this.timeSlicer(startTime)
        await this.click(cssLib.leftNav.subsections.timesheet.timeIcon(), () => {
          this.api.elements('css selector', cssLib.leftNav.subsections.timesheet.clock(), result => {
            result.value.forEach(element => {
              this.api.elementIdText(element.ELEMENT, output => {
                if (output.value === time.hour) {
                  this.api.moveTo(element.ELEMENT).mouseButtonClick('left', () => {
                    this.api.elements('css selector', cssLib.leftNav.subsections.timesheet.clock(), result => {
                      result.value.forEach(element => {
                        this.api.elementIdText(element.ELEMENT, output => {
                          if (output.value === time.minute) {
                            this.api.moveTo(element.ELEMENT).mouseButtonClick('left', () => {
                              this.api.elements('css selector', cssLib.leftNav.subsections.timesheet.timeOfTheDay(), result => {
                                result.value.forEach(element => {
                                  this.api.elementIdText(element.ELEMENT, output => {
                                    if (output.value === time.timeOfTheDay) {
                                      this.api.moveTo(element.ELEMENT).mouseButtonClick('left', () => {
                                        this.click(cssLib.leftNav.subsections.timesheet.okBtn()).api.pause(1000)
                                      })
                                    }
                                  })
                                })
                              })
                            })
                          }
                        })
                      })
                    })
                  })
                }
              })
            })
          })
        })
      },
      formInputFiller: function (startDate, endDate, timeSpent, project, _module, task, description) {
        const currentDate = this.currentDate()
        startDate = endDate = currentDate

        this.api.pause(500)
        this.setValue(cssLib.leftNav.subsections.timesheet.startDate(), startDate).api.pause(500)
        this.setValue(cssLib.leftNav.subsections.timesheet.endDate(), endDate).api.pause(500)
        this.setValue(cssLib.leftNav.subsections.timesheet.timeSpent(), timeSpent).api.pause(500)
        this.setValue(cssLib.leftNav.subsections.timesheet.project(), project).api.pause(500)
        this.setValue(cssLib.leftNav.subsections.timesheet.module(), _module).api.pause(500)
        this.setValue(cssLib.leftNav.subsections.timesheet.task(), task).api.pause(500)
        return this.setValue(cssLib.leftNav.subsections.timesheet.description(), description).api.pause(500)
      }
    }

  ]
}
