#feature: titlu sugestiv
Feature: Log in to the Timesheet application 

   Scenario Outline: Login using valid credentials
   #given partea executata
   Given The user opens the timesheet login page
   When the username field is visible
   And the password field is visible
   Then enters the username:<username> and the password:<password>
   Then clicks on the Login button
   Then he should be redirected to the dashboard

Examples:
| username    |password|
| radu.pop    | test   | 
    
    