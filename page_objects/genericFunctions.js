const cssLib = require('../helpers/cssLib/cssLib')

module.exports = {

  elements: {
    body: cssLib.body()
  },
  commands: [
    {
      languageToggle: function (selector) {
        this.click(cssLib.topNav.languages.selector())
        return this.click(selector)
      },
      checkErrorMessage: function (selector, message) {
        return this
          .waitForElementVisible(selector, 5000)
          .api.pause(1000)
          .assert.containsText(selector, message)
          .click(cssLib.loginPage.errorMessageCloseIcon())
    },
    formInputCleaner: async function (selector) {
      await this.api.elements('css selector', selector, result => {
        result.value.forEach(element => {
          this.api.elementIdClear(element.ELEMENT)
        })
      })
    }
    }
  ]

}
