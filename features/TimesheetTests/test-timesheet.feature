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
      And the work log with the following data, Start Date: <startDate>, End date: <endDate> Start Time: <startTime>, Time Spent: <timeSpent>, Project: <project>, Module: <module>, Task: <task>, Description: <description> is added

      Examples:
         | startDate    | endDate      |startTime| timeSpent | project        | module               | task | description | Message         |
         | current date | current date |09:00 AM | 8h        | :Training Time | Demanded by customer | test | test        | Work log added! |