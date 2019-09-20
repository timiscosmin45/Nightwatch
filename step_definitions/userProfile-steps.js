const { client } = require('nightwatch-cucumber')
const { Given, When, Then } = require('cucumber')
const cssLib = require('../selectors/cssLib')
const userProfile = client.page.userProfile()
const generics = client.page.genericFunctions()
const expect = require('chai').expect
const assert = require('chai').assert

Then(/^sets the language to english$/, () => {
  generics.languageToggle(cssLib.topNav.languages.english())
})

Then(/^clicks on the user icon$/, () => {
  return client.click(cssLib.leftNav.userIcon())
})

Then(/^the user is redirected to User's Profile page$/, () => {
  return client.waitForElementVisible(cssLib.userProfile.userImg(), 5000, false)
})

Then(/^clicks on the edit button$/, () => {
  return client.click(cssLib.userProfile.personalDataSection.editBtn())
})

Then(/^the the input fields are visible$/, async () => {
  await client.elements('css selector', cssLib.userProfile.personalDataSection.formInputFields(), result => {
    result.value.forEach(element => {
      client.elementIdDisplayed(element.ELEMENT, output => {
        expect(output.value).to.equal(true)
      })
    })
  })
})

Then(/^the user enters the email: (.*?), skype: (.*?), company phone: (.*?), personal phone: (.*?), car number: (.*?)$/, (email, skype, workPhone, personalPhone, carNumber) => {
  userProfile.personalDataFormCleaner()
  return userProfile.personalDataFormFiller(email, skype, workPhone, personalPhone, carNumber)
})

Then(/^clicks on the save button$/, () => {
  return client.click(cssLib.userProfile.personalDataSection.saveBtn())
})

Then(/^profile is updated as it follows, email: (.*?), skype: (.*?), company phone: (.*?), personal phone: (.*?), car number: (.*?)$/, async (email, skype, workPhone, personalPhone, carNumber) => {
  const list = []
  await client.elements('css selector', cssLib.userProfile.personalDataSection.displayerPData(), result => {
    result.value.forEach(element => {
      client.elementIdText(element.ELEMENT, output => {
        list.push(output.value)
      })
    })
  })
  expect(list).to.not.include.members([email])
  expect(list).to.include.members([skype, workPhone, personalPhone, carNumber])
})

Then(/^profile should not be updated as it follows, email: (.*?), skype: (.*?), company phone: (.*?), personal phone: (.*?), car number: (.*?)$/, async (email, skype, workPhone, personalPhone, carNumber) => {
  const array = [email, skype, workPhone, personalPhone, carNumber]
  await client.elements('css selector', cssLib.userProfile.personalDataSection.displayerPData(), result => {
    result.value.forEach(element => {
      client.elementIdText(element.ELEMENT, output => {
        expect(array).to.not.include.members([output.value])
      })
    })
  })
})

Then(/^clicks on the "Add" button from Children's section$/, () => {
  return client.click(cssLib.userProfile.childrenSection.addBtn())
})

Then(/^a dialog box should open$/, () => {
  return client.waitForElementVisible(cssLib.userProfile.childrenSection.formContainer(), 5000)
})

When(/^the input fields are shown$/, () => {
  return client.elements('css selector', cssLib.userProfile.childrenSection.formInputFields(), (result) => {
    result.value.forEach(element => {
      client.elementIdDisplayed(element.ELEMENT, output => {
        expect(output.value).to.equal(true)
      })
    })
  })
})

Then(/^the user enters the first name: (.*?), last name: (.*?), birthdate: (.*?)$/, (firstname, lastname, birthdate) => {
  return userProfile.childrenFormFiller(firstname, lastname, birthdate)
})

Then(/^opens the gender selector$/, () => {
  client.click(cssLib.userProfile.childrenSection.genderSelector())
})

When(/^genders are visible$/, () => {
  return client.assert.visible(cssLib.userProfile.childrenSection.genderMale())
    .assert.visible(cssLib.userProfile.childrenSection.genderFemale())
})

Then(/^the user selects the following gender: (.*?)$/, (gender) => {
  if (gender === 'Male') {
    return client.click(cssLib.userProfile.childrenSection.genderMale())
  } else {
    return client.click(cssLib.userProfile.childrenSection.genderFemale())
  }
})

Then(/^clicks on the Add button$/, () => {
  return client.click(cssLib.userProfile.childrenSection.submitBtn())
})

Then(/^the childe with the following data, firstname: (.*?), lastname: (.*?), birthdate: (.*?), gender: (.*?) is displayed$/, async (firstname, lastname, birthdate, gender) => {
  const list = []// extracted data from function below
  const age = userProfile.ageCalculator(birthdate)
  const ageString = age.toString()
  await client.elements('css selector', cssLib.userProfile.childrenSection.childrenSectionContent(), (result) => {
    result.value.forEach(element => {
      client.elementIdText(element.ELEMENT, (output) => {
        list.push(output.value)
      })
    })
  })
  expect(list).to.include.members([firstname, lastname, ageString])
})

Then(/^the childe with the following data, firstname: (.*?), lastname: (.*?), birthdate: (.*?), gender: (.*?) should not be displayed$/, async (firstname, lastname, birthdate, gender) => {
  const age = userProfile.ageCalculator(birthdate)
  const ageString = age.toString()
  const array = [firstname, lastname, ageString]
  await client.elements('css selector', cssLib.userProfile.childrenSection.childrenSectionContent(), (result) => {
    result.value.forEach(element => {
      client.elementIdText(element.ELEMENT, (output) => {
        expect(array).to.not.include.members([output.value])
      })
    })
  })
  return client.end()
})
