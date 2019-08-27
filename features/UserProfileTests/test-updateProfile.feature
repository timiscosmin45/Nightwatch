@UpdatePersonalData
Feature: Update Personal Data-Tests
  

@UpdatePersonalData-HappyFlow
  Scenario Outline: Update personal data-Happy Flow
    Given the user is logged-in
    Then clicks on the user icon
    Then the user is redirected to User's Profile page
    Then clicks on the edit button
    Then the the input fields are visible
    Then the user enters the email: <email>, skype: <skype>, company phone: <workPhone>, personal phone: <personalPhone>, car number: <carNumber> 
    Then clicks on the save button
    Then the following message should pop up: <message>
    Then profile is updated as it follows, email: <email>, skype: <skype>, company phone: <workPhone>, personal phone: <personalPhone>, car number: <carNumber> 

    Examples:
      |        email       |      skype      | workPhone  | personalPhone | carNumber |               message                 |
      | radu.pop@arobs.org | popraduvasile90 | 0749591785 |  0749591785   |  CJ12LIA  | Profile has been successfully updated |

  @UpdatePersonalData-NegativeFlow
  Scenario Outline: Update personal data-Negative Flow
    Given the user is logged-in
    Then clicks on the user icon
    Then the user is redirected to User's Profile page
    Then clicks on the edit button
    Then the the input fields are visible
    Then the user enters the email: <email>, skype: <skype>, company phone: <workPhone>, personal phone: <personalPhone>, car number: <carNumber> 
    Then clicks on the save button
    #Then the following message should pop up:"<message>"
    Then profile should not be updated as it follows, email: <email>, skype: <skype>, company phone: <workPhone>, personal phone: <personalPhone>, car number: <carNumber> 
    
    Examples:
      |        email          |       skype     | workPhone | personalPhone |  carNumber  |        message         |
      | testMail@!.ro.!!@:#][ | aaaaaaaa#!#$#$D | r3rfr4f@$ |  654trf43@%   | 111!@$E$##@ | Speficic error message |

  

  