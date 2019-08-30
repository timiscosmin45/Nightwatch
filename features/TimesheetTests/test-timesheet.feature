@Timesheet

Feature: Timesheet Tests

   Scenario Outline: Add Wok Log-HappyFlow
      Given the user is logged-in
      Then clicks on the Timesheet section
      Then the user clicks on the current day from the date table
      Then a content box should open
      Then the user click on the `Work log` button from the top of the content box
      Then inserts the folowing data into the input fields, Start Date: <startDate>, End date: <endDate>, Start Time: <startTime>, Time Spent: <timeSpent>, Project: <project>, Module: <module>, Task: <task>, Description: <description>
      Then clicks on the Save button
      Then the following message should pop up: <message>
      Then the user logs out


      Examples:
         | startDate    | endDate      | startTime | timeSpent | project        | module                | task | description | message         |
         | current date | current date | 10:40 AM  | 2h        | :Training Time | Demanded by customer  | test | test        | Work log added! |
         | current date | current date | 03:00 PM  | 1h        | :Training Time | Learning Time         | test | test        | Work log added! |
         | current date | current date | 05:35 PM  | 1h        | :Bench         | No project allocation | test | test        | Work log added! |