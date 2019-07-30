const { client } = require('nightwatch-cucumber')
const { Then } = require('cucumber')

Then(/^the title is "(.*?)"$/, (text) => {
  return client.assert.title(text)
})
