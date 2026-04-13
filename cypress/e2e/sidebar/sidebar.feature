Feature: Sidebar Navigation
  As a user I want to navigate using the sidebar

  Scenario: Sidebar is visible with all menu items
    Given I open the dashboard
    Then I should see the sidebar with the crono logo
    And I should see the following menu items:
      | item       |
      | Dashboard  |
      | Find New   |
      | Lists      |
      | Templates  |
      | Sequences  |
      | Tasks      |
      | Inbox      |
      | Deals      |
      | Analytics  |

  Scenario: Dashboard menu item is active by default
    Given I open the dashboard
    Then the "Dashboard" menu item should be active

  Scenario: Inbox badge shows notification count
    Given I open the dashboard
    Then the inbox menu item should show a badge with "24"

  Scenario: Trial banner is displayed
    Given I open the dashboard
    Then I should see the trial banner with upgrade button

  Scenario: User info is displayed at the bottom
    Given I open the dashboard
    Then I should see the user name "William Robertson"

  Scenario: Sidebar can be collapsed and expanded
    Given I open the dashboard
    When I click the sidebar toggle button
    Then the sidebar should be hidden
    When I click the floating menu button
    Then the sidebar should be visible
