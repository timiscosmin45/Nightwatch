#feature: titlu sugestiv
Feature: Login to the Timesheet application 
@LoginHappyFlow
   Scenario Outline: Login using valid credentials
      Given The user opens the timesheet login page
      Then the username field is visible
      And the password field is visible
      Then enters the username:<username> and the password:<password>
      Then clicks on the Login button
      Then he should be logged in

Examples:
| username|password|
| radu.pop| test   | 


    