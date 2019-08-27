function extractor(startTime) {
  startTime = '05:08 PM'
  const time = {
    hour: () => startTime.slice(0, 2),
    minute: startTime.slice(3, 5),
    timeOfTheDay: startTime.slice(5, 8)
  }
  return time
}

function test() {
  console.log(typeof (extractor().minute))
  console.log(this.extractor().hour())
}
test()