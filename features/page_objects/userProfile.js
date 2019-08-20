const cssLib = require('../selectors/cssLib')

module.exports = {
  elements: {},
  commands: [
    {
      personalDataFormCleaner: function () {
        this.clearValue(cssLib.userProfile.personalDataSection.emailField())
        this.clearValue(cssLib.userProfile.personalDataSection.skypeField())
        this.clearValue(cssLib.userProfile.personalDataSection.workPhone())
        this.clearValue(cssLib.userProfile.personalDataSection.personalPhone())
        this.clearValue(cssLib.userProfile.personalDataSection.carNumber())
      },
      personalDataFormFiller: function (email, skype, workPhone, personalPhone, carNumber) {
        this.setValue(cssLib.userProfile.personalDataSection.emailField(), email)
        this.setValue(cssLib.userProfile.personalDataSection.skypeField(), skype)
        this.setValue(cssLib.userProfile.personalDataSection.workPhone(), workPhone)
        this.setValue(cssLib.userProfile.personalDataSection.personalPhone(), personalPhone)
        return this.setValue(cssLib.userProfile.personalDataSection.carNumber(), carNumber)
      },

      childrenFormFiller: function (firstname, lastname, birthdate) {
        this.setValue(cssLib.userProfile.childrenSection.firstNameInputField(), firstname)
        this.setValue(cssLib.userProfile.childrenSection.lastNameInputField(), lastname)
        return this.setValue(cssLib.userProfile.childrenSection.birthdateInputField(), birthdate)
      },

      ageCalculator: function (birthdate) {
        const birthdateList = []
        birthdateList.push(birthdate.split('.'))
        const childsBirthYear = birthdateList[0][2]
        const currentYear = new Date().getFullYear()
        const childsAge = currentYear - childsBirthYear
        return childsAge
      }
    }
  ]

}
