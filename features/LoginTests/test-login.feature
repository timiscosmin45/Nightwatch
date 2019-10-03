@LoginSystem
Feature: Login to the Timesheet application

   Scenario Outline: Login using valid credentials
      Given the user opens the timesheet login page
      Then the title is: <title>
      Then the username field is visible
      And the password field is visible
      Then the user enters the username: <username> and the password: <password>
      Then clicks on the Login button
      Then the user should be logged-in
      Then the user logs out

      Examples:
         | title     | username       | password |
         | Timesheet | valentin.timis | test     |
         | Timesheet | VALENTIN.TIMIS | test     |

   Scenario Outline: Login using invalid credentials
      Given the user opens the timesheet login page
      Then the title is: <title>
      Then the username field is visible
      And the password field is visible
      Then the user enters the username: <username> and the password: <password>
      Then clicks on the Login button
      Then the following error message: <message> should appear

      Examples:
         | title     | username       | password | message                      |
         | Timesheet | valentin.timis | admin    | Invalid username or password |
         | Timesheet | valentin.timis | blank    | Password not provided        |
         | Timesheet | blank          | test     | User name not provided       |
         | Timesheet | blank          | blank    | User name not provided       |
         | Timesheet | root           | test     | User not found               |
         | Timesheet | root           | root     | User not found               |
         | Timesheet | root           | blank    | Password not provided        |
         | Timesheet | radu.pop       | TEST     | Invalid username or password |
         | Timesheet | radu.pop       | åäö#$    | Invalid username or password |
         | Timesheet | @#@@dq13       | test     | User not found               |




