Feature: Welcome Card
  As a user I want to see a personalized welcome message

  Scenario: Welcome greeting is displayed
    Given I open the dashboard
    Then I should see the greeting "Welcome William Robertson,"

  Scenario: Welcome description is displayed
    Given I open the dashboard
    Then I should see the welcome description text
