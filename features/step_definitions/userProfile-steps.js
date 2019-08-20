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

Then(/^he clicks on the user icon$/, () => {
  return client.click(cssLib.leftNav.userIcon())
})

Then(/^he is redirected to User Profile page$/, () => {
  return client.waitForElementVisible(cssLib.userProfile.validator(), 5000)
})

Then(/^clicks on the edit button$/, () => {
  return client.click(cssLib.userProfile.personalDataSection.editBtn())
})

Then(/^the input fields are visible$/, async () => {
  await client.elements('css selector', cssLib.userProfile.personalDataSection.formInputFields(), result => {
    result.value.forEach(element => {
      client.elementIdDisplayed(element.ELEMENT, output => {
        expect(output.value).to.equal(true)
      })
    })
  })
})

Then(/^he inserts personal valid data into the input fields:"(.*?)","(.*?)","(.*?)","(.*?)","(.*?)"$/, (email, skype, workPhone, personalPhone, carNumber) => {
  userProfile.personalDataFormCleaner()
  return userProfile.personalDataFormFiller(email, skype, workPhone, personalPhone, carNumber)
})

Then(/^click on the save button$/, () => {
  return client.click(cssLib.userProfile.personalDataSection.saveBtn())
})

Then(/^the following message should pop up:"(.*?)"$/, (message) => {
  return generics.checkErrorMessage(cssLib.loginPage.errorMessage(), message)
})

Then(/^profile should be updated, besides email adress with the folowing data:"(.*?)","(.*?)","(.*?)","(.*?)","(.*?)"$/, async (email, skype, workPhone, personalPhone, carNumber) => {
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

Then(/^profile should not be updated with the folowing data:"(.*?)","(.*?)","(.*?)","(.*?)","(.*?)"$/, async (email, skype, workPhone, personalPhone, carNumber) => {
  const list = [] // extracted data from function below
  const array = [email, skype, workPhone, personalPhone, carNumber]
  await client.elements('css selector', cssLib.userProfile.personalDataSection.displayerPData(), result => {
    result.value.forEach(element => {
      client.elementIdText(element.ELEMENT, output => {
        list.push(output.value)
      })
    })
  })
  array.forEach(element => {
    assert.notInclude(list, element)
  })
})

Then(/^clicks on the "Add" button from Children's section$/, () => {
  client.click(cssLib.userProfile.childrenSection.addBtn())
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

Then(/^he inserts valid data into the input fields: "(.*?)","(.*?)","(.*?)"$/, (firstname, lastname, birthdate) => {
  return userProfile.childrenFormFiller(firstname, lastname, birthdate)
})

Then(/^opens the gender selector$/, () => {
  client.click(cssLib.userProfile.childrenSection.genderSelector())
})

When(/^genders are visible$/, () => {
  return client.assert.visible(cssLib.userProfile.childrenSection.genderMale())
    .assert.visible(cssLib.userProfile.childrenSection.genderFemale())
})

Then(/^he chooses: "(.*?)" gender$/, (gender) => {
  if (gender === 'Male') {
    return client.click(cssLib.userProfile.childrenSection.genderMale())
  } else {
    return client.click(cssLib.userProfile.childrenSection.genderFemale())
  }
})

Then(/^click on the "Add" button$/, () => {
  client.click(cssLib.userProfile.childrenSection.submitBtn())
})

Then(/^he following message should pop up:"(.*?)"$/, (message) => {
  generics.checkErrorMessage(cssLib.userProfile.checkErrorMessage(), message)
})

Then(/^the childe should appear in Children's section with the folowing data:"(.*?)","(.*?)","(.*?)","(.*?)"$/, async (firstname, lastname, birthdate, gender) => {
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

