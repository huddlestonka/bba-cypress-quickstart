Feature: Logging In
  I need to be able to log in

  Scenario: Login as an admin
    Given I am on the login page
    When I login as an "admin"
    Then I should be on the home page
