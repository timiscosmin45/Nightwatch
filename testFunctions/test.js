

function timeSlicer(startTime) {
  const time = {
    firstElement: startTime.slice(0, 1),
    hour: null,
    minute: startTime.slice(3, 5),
    timeOfTheDay: startTime.slice(5, 8).trim()
  }

  if (time.firstElement === '0') {
    time.hour = startTime.slice(1, 2)
  } else {
    time.hour = startTime.slice(0, 2)
  }
  return time
}

function test() {
  const time = timeSlicer('12:50 AM')
  console.log(time.timeOfTheDay)
  console.log(time.hour)
  console.log(time.minute)
  if ('AM' == time.timeOfTheDay) {
    console.log(time.timeOfTheDay)
  }
}
test()


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