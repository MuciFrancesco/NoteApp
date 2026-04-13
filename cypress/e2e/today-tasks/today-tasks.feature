Feature: Today's Tasks
  As a user I want to see my task summary for today

  Scenario: Today's tasks title is displayed
    Given I open the dashboard
    Then I should see "Today's tasks" as the tasks title

  Scenario: All task categories are displayed
    Given I open the dashboard
    Then I should see the following task cards:
      | label          | count |
      | Overdue        | 3     |
      | Pending Manual | 10    |
      | Pending Auto   | 20    |
      | Completed      | 8     |

  Scenario: Overdue tasks show error badge
    Given I open the dashboard
    Then the "Pending Auto" task card should show an error badge

  Scenario: Divider separates pending and completed tasks
    Given I open the dashboard
    Then I should see a divider between pending and completed tasks
