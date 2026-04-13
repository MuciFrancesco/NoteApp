Feature: Performance Card
  As a user I want to track my monthly KPIs

  Scenario: Performance title and edit link are visible
    Given I open the dashboard
    Then I should see "May's performance" as the performance title
    And I should see the "Edit KPIs" link

  Scenario: All 6 KPI cards are displayed
    Given I open the dashboard
    Then I should see 6 KPI cards in the performance section

  Scenario: KPI cards show current and target values
    Given I open the dashboard
    Then the "Activities" KPI should display "1000/2000"
    And the "Meetings" KPI should display "20/30"

  Scenario: KPI progress bars are visible
    Given I open the dashboard
    Then each KPI card should have a progress bar

  Scenario: Clicking info button opens KPI detail modal
    Given I open the dashboard
    When I hover over a KPI card
    And I click the info button
    Then the KPI detail modal should open
    And the modal should show a progress bar
    And the modal should show a breakdown section

  Scenario: KPI detail modal can be closed
    Given I open the dashboard
    When I hover over a KPI card
    And I click the info button
    Then the KPI detail modal should open
    When I close the KPI detail modal
    Then the KPI detail modal should not be visible
