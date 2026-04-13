Feature: Onboarding Card
  As a new user I want to see my onboarding steps

  Scenario: Onboarding title is displayed
    Given I open the dashboard
    Then I should see the onboarding title "Onboarding"

  Scenario: All onboarding steps are displayed
    Given I open the dashboard
    Then I should see 5 onboarding steps

  Scenario: Each step shows title and duration
    Given I open the dashboard
    Then I should see the following onboarding steps:
      | title                        | duration |
      | Integrations Setup           | 5 min    |
      | Add new Contact              | 5 min    |
      | Create your first sequence   | 10 min   |
      | Add contacts to sequence     | 5 min    |
      | Run your first task          | 10 min   |

  Scenario: Onboarding steps have hover effect
    Given I open the dashboard
    When I hover over an onboarding step
    Then the step should have a highlight background
