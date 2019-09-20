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
      Then the work log with the following following data, Start Date: <startDate>, End date: <endDate>, Start Time: <startTime>, Time Spent: <timeSpent>, Project: <project>, Module: <module>, Task: <task>, Description: <description> should be added

      Examples:
         | startDate    | endDate      | startTime | timeSpent | project              | module                            | task | description | message         |
         | current date | current date | 10:40 AM  | 1h        | :Training Time       | Demanded by customer              | test | test        | Work log added! |
         | current date | current date | 11:40 AM  | 2h        | :Training Time       | Learning Time                     | test | test        | Work log added! |
         | current date | current date | 14:40 PM  | 3h        | :Training Time       | Teaching Time                     | test | test        | Work log added! |
         | current date | current date | 14:40 PM  | 4h        | :Training Time       | Arobs - Technology Group Meetings | test | test        | Work log added! |
         | current date | current date | 11:40 AM  | 5h        | :Training Time       | Arobs - Team Building             | test | test        | Work log added! |
         | current date | current date | 11:40 AM  | 6h        | :Presales/Sales Time | Estimates - Ro customers          | test | test        | Work log added! |
         | current date | current date | 11:40 AM  | 7h        | :Presales/Sales Time | Estimates - Outsourcing           | test | test        | Work log added! |
         | current date | current date | 11:40 AM  | 8h        | :Presales/Sales Time | Meetings & presentations          | test | test        | Work log added! |
         | current date | current date | 05:35 PM  | 1h        | :Bench               | No project allocation             | test | test        | Work log added! |
         | current date | current date | 03:45 PM  | 6h        | :Management Time     | Project Management                | test | test        | Work log added! |
         | current date | current date | 03:35 PM  | 5h        | :Management Time     | Technical supervising             | test | test        | Work log added! |
         | current date | current date | 05:35 PM  | 4h        | :Management Time     | Division/Department Management    | test | test        | Work log added! |
         | current date | current date | 05:35 PM  | 3h        | :Management Time     | Location Management               | test | test        | Work log added! |
         | current date | current date | 05:35 PM  | 2h        | :Management Time     | 1:1 / one-on-one meetings         | test | test        | Work log added! |
