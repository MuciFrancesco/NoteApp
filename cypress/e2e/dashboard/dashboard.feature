Feature: Dashboard Layout
  As a user I want to see the CRM dashboard fully loaded with all sections

  Scenario: All dashboard cards are visible after loading
    Given I open the dashboard
    Then I should see the welcome card
    And I should see the replies card
    And I should see the performance card
    And I should see the today tasks card
    And I should see the signals card
    And I should see the onboarding card

  Scenario: Skeleton loaders appear before content loads
    Given I open the dashboard
    Then I should see skeleton loaders initially
