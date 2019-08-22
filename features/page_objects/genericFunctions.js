const cssLib = require('../selectors/cssLib')

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
          .waitForElementVisible(selector, 2000)
          .api.pause(1000)
          .assert.containsText(selector, message)
          .click(cssLib.loginPage.errorMessageCloseIcon())
      }
    }
  ]

}
