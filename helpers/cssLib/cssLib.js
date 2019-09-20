module.exports = {

  body: () => 'body',

  loginPage: {
    usernameInputField: () => 'input[name="username"]',
    passwordInputField: () => 'input[name="password"]',
    loginBtn: () => 'button[type=submit]',
    logoutBtn: () => '.log.out.icon',
    errorMessageCloseIcon: () => '.grey.close.icon.mSFyz',
    errorMessage: () => '._2s8_B'
  },
  topNav: {
    languages: {
      selector: () => 'div.CH3x3:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > i',
      romanian: () => '.ro.flag',
      english: () => '.us.flag'
    }
  },
  leftNav: {
    menu: () => '.menu._1gq2q',
    userIcon: () => '.ui.circular.image._2sqcj',
    subsections: {
      timesheet: {
        validator: () => '.header',
        timesheetSelector: () => '.calendar.alternate.icon.A7YMy',
        month_yearDisplayer: () => '.col-md-5._1VlBl',
        dayTime: () => '._1A__5 span',
        dialogBox: () => '.page',
        logWork: () => '.clock.outline.icon',
        absenceRequest: () => '.calendar.times.outline.icon',
        formInputFields: () => '.bottom > form:nth-child(1) input, textarea',
        startDate: () => '[name="start"]',
        endDate: () => '[name="end"]',
        startTime: () => '[name="startTime"]',
        timeSpent: () => '[name="workedHoursAsText"]',
        project: () => 'div._3WAcV:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > input',
        module: () => 'div._3WAcV:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > input',
        task: () => 'div._3WAcV:nth-child(5) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > input',
        description: () => 'div._3WAcV:nth-child(6) > div:nth-child(1) > div:nth-child(2) > textarea',
        saveBtn: () => '.form-button',
        timeIcon: () => '.grey.clock.outline.small.icon',
        clock: () => 'span[style*="transform"]',
        timeOfTheDay: () => 'h3',
        okBtn: () => '[aria-label=OK]',
        workLogRecord: () => '.col-xs-8.col-sm-10.col-xl-11.F3TPf'
      }
    }
  },
  userProfile: {
    // specific page element used to validate the user persence
    userImg: () => '.ui.circular.image._1O5o7',
    personalDataSection: {
      formInputFields: () => '.form.ui:nth-child(3) input',
      emailField: () => 'input[name="emailAddress"]',
      skypeField: () => 'input[name="skypeAddress"]',
      personalPhone: () => 'input[name="personalPhone"]',
      workPhone: () => 'input[name="companyPhone"]',
      carNumber: () => 'input[name="carNumber"]',
      editBtn: () => '.ui.blue.icon.button.SUnZC',
      saveBtn: () => '.ui.blue.fluid.button',
      displayerPData: () => '.col-xs-9'
    },
    childrenSection: {
      addBtn: () => '.ui.left.pointing.basic.label',
      formContainer: () => '.content form',
      formInputFields: () => '.modal > div:nth-child(2) > form:nth-child(1) input',
      submitBtn: () => '.form-button',
      firstNameInputField: () => 'input[name="firstName"]',
      lastNameInputField: () => 'input[name="lastName"]',
      birthdateInputField: () => 'input[name="birthdate"]',
      genderSelector: () => '.default',
      genderMale: () => 'div.visible:nth-child(4) > div:nth-child(2) > span',
      genderFemale: () => 'div.visible:nth-child(4) > div:nth-child(3) > span:nth-child(2)',
      childrenSectionContent: () => 'div.container-fluid:nth-child(3) .row div '
    }
  }
}
