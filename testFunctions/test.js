

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