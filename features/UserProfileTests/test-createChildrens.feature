@TEST_TIMESHEET
Feature: Create Children-Tests

  Scenario Outline: Add children - NegativeFlow
    Given the user is logged-in
    Then clicks on the user icon
    Then the user is redirected to User's Profile page
    Then clicks on the "Add" button from Children's section
    Then a dialog box should open
    When the input fields are shown
    Then the user enters the first name: <firstname>, last name: <lastname>, birthdate: <birthdate>
    Then opens the gender selector
    When genders are visible
    Then the user selects the following gender: <gender>
    Then clicks on the Add button
    #Then the following error message shoul pop up: <message>
    Then the childe with the following data, firstname: <firstname>, lastname: <lastname>, birthdate: <birthdate>, gender: <gender> should not be displayed
    #Then the user logs out

    Examples:
      | firstname  | lastname   | gender | birthdate  | message                |
      | a!:_.3432a | 4343#E><:+ | Male   | 24.08.2060 | Specific error message |

  Scenario Outline: Add children-Happy Flow
    Given the user is logged-in
    Then clicks on the user icon
    Then the user is redirected to User's Profile page
    Then clicks on the "Add" button from Children's section
    Then a dialog box should open
    When the input fields are shown
    Then the user enters the first name: <firstname>, last name: <lastname>, birthdate: <birthdate>
    Then opens the gender selector
    When genders are visible
    Then the user selects the following gender: <gender>
    Then clicks on the Add button
    Then the following message should pop up: <message>
    Then the childe with the following data, firstname: <firstname>, lastname: <lastname>, birthdate: <birthdate>, gender: <gender> is displayed
    #Then the user logs out

    Examples:
      | firstname | lastname | gender | birthdate  | message      |
      | Raducu    | Pop      | Male   | 18.08.2018 | Child create |


