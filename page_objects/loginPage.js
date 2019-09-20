const cssLib = require('../helpers/cssLib/cssLib')

module.exports = {
  url: 'http://192.168.88.76.xip.io:8091/#/login',
  elements: {},
  commands: [
    {
      fillLoginCredentials: function (username, password) {
        return this
          .setValue(cssLib.loginPage.usernameInputField(), username)
          .setValue(cssLib.loginPage.passwordInputField(), password)
      },
      loginFunction: function (languageSelector) {
        return this
          .navigate()
          .waitForElementVisible(cssLib.body(), 5000, false)
          .waitForElementVisible(cssLib.loginPage.usernameInputField(), 5000, false)
          .waitForElementVisible(cssLib.loginPage.passwordInputField(), 5000, false)
          .fillLoginCredentials('valentin.timis', 'test')
          .click(cssLib.loginPage.loginBtn())
          .waitForElementVisible(cssLib.topNav.languages.selector(), 5000, false)
          .click(cssLib.topNav.languages.selector())
          .click(languageSelector)
      },
      logOutFunction: function () {
        return this
          .waitForElementVisible(cssLib.loginPage.logoutBtn(), 5000)
          .click(cssLib.loginPage.logoutBtn())
      }
    }
  ]

}
