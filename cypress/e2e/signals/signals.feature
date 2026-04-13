Feature: Signals Table
  As a user I want to manage my signals

  Scenario: Signals title and count badge are displayed
    Given I open the dashboard
    Then I should see the signals title "Signals"
    And I should see the signals count badge

  Scenario: Signal rows display contact information
    Given I open the dashboard
    Then I should see signal rows with person names and descriptions

  Scenario: Signal rows show tags
    Given I open the dashboard
    Then signal rows should display tags like "Role change" or "Website view"

  Scenario: Action button opens popover with Complete and Delete
    Given I open the dashboard
    When I click the "Action" button on a signal row
    Then I should see a popover with "Complete" and "Delete" options

  Scenario: Completing a signal removes it from the list
    Given I open the dashboard
    And I note the number of signal rows
    When I click the "Action" button on a signal row
    And I click "Complete" in the popover
    Then the signal should be removed from the list

  Scenario: Deleting a signal removes it from the list
    Given I open the dashboard
    And I note the number of signal rows
    When I click the "Action" button on a signal row
    And I click "Delete" in the popover
    Then the signal should be removed from the list
