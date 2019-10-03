// const { Before, After } = require('cucumber')
// const { client } = require('nightwatch-cucumber')

// Before(() => new Promise(resolve => {
//   console.log('Before start')
//   setTimeout(() => {
//     console.log('Before end')
//     resolve()
//   }, 1000)
// }))

// After(async () => {
//   await client.getLog('browser', function (logEntriesArray) {
//     console.log("Log" + logEntriesArray)
//     logEntriesArray.forEach(function (log) {
//       console.log('[' + log.level + '] ' + log.timestamp + ' : ' + log.message)
//     })
//   })
// })
