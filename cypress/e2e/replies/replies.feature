Feature: Replies Card
  As a user I want to see my reply count and access the inbox

  Scenario: Replies count is displayed
    Given I open the dashboard
    Then the replies card should show the count "24"

  Scenario: Open inbox link is visible
    Given I open the dashboard
    Then I should see the "Open inbox" link in the replies card

  Scenario: Avatar group is displayed
    Given I open the dashboard
    Then I should see user avatars in the replies card
