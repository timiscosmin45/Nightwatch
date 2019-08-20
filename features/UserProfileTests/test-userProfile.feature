@UserProfile
Feature: User Profile Tests

  Background: User is logged in
    Given the user opens the timesheet login page
    Then the title is:"Timesheet"
    Then the username field is visible
    And the password field is visible
    Then enters the username:"radu.pop" and the password:"test"
    Then clicks on the Login button
    Then sets the language to english
#I set a specific language to test the error messages text displayed

  @UpdatePersonalData-HappyFlow
  Scenario Outline: Update personal data- Happy Flow
    Given  the user is logged in
    Then he clicks on the user icon
    Then he is redirected to User Profile page
    Then clicks on the edit button
    Then the input fields are visible
    Then he inserts personal valid data into the input fields:"<email>","<skype>","<workPhone>","<personalPhone>","<carNumber>"
    Then click on the save button
    Then the following message should pop up:"<message>"
    And profile should be updated, besides email adress with the folowing data:"<email>","<skype>","<workPhone>","<personalPhone>","<carNumber>"

    Examples:
    | email             | skype            | workPhone  |personalPhone|carNumber|               message               |
    |radu.pop@arobs.org | popraduvasile90  | 0749591785 |0749591785   |CJ12LIA  |Profile has been successfully updated|

@UpdatePersonalData-NegativeFlow
    Scenario Outline: Update personal data- Negative Flow
    Given  the user is logged in
    Then he clicks on the user icon in the top-left section
    Then he is redirected to User Profile page
    Then clicks on the edit button
    Then the input fields are visible
    Then he inserts personal valid data into the input fields:"<email>","<skype>","<workPhone>","<personalPhone>","<carNumber>"
    Then click on the save button
    #Then the following message should pop up:"<message>"
    And profile should not be updated with the folowing data:"<email>","<skype>","<workPhone>","<personalPhone>","<carNumber>"

    Examples:
    | email                | skype            | workPhone  |personalPhone|carNumber   |       message        |
    |testMail@!.ro.!!@:#][ | aaaaaaaa#!#$#$D  | r3rfr4f@$ |654trf43@%   |111!@$E$##@  |Speficic error message|

@CreateChildren-HappyFlow
    Scenario Outline: Add children - Happy Flow
    Given the user is logged in
    Then he clicks on the user icon
    Then he is redirected to User Profile page
    Then clicks on the "Add" button from Children's section
    Then a dialog box should open 
    When the input fields are shown
    Then he inserts valid data into the input fields: "<firstname>","<lastname>","<birthdate>"
    Then opens the gender selector
    When genders are visible
    Then he chooses: "<gender>" gender
    Then click on the "Add" button
    Then the following message should pop up:"<message>"
    And the childe should appear in Children's section with the folowing data:"<firstname>","<lastname>","<birthdate>","<gender>"

    Examples:
    | firstname | lastname| gender  |birthdate  |    message    |
    |Raducu     | Pop     | Male    |18.08.2018 | Child create  |