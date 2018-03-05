# features/admin.feature

Feature: Admin Console

  Scenario: Login to the admin console

    Given I login to test admin
    Then I click on login button
    Then I login as operator

