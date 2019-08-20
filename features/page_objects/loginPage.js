const cssLib = require('../selectors/cssLib')

module.exports = {
  url: 'http://192.168.88.76.xip.io:8091/#/login',
  elements: {},
  commands: [
    {
      fillLoginCredentials: function (username, password) {
        this.setValue(cssLib.loginPage.usernameInputField(), username)
        return this.setValue(cssLib.loginPage.passwordInputField(), password)
      }

    }
  ]

}
