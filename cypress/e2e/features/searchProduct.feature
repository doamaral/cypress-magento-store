Feature: Feature name

    Feature Description

    Scenario: Search for existing Products
        Given I want to search a product
        When I enter the search term
        Then an autocomplete list is displayed
        And I can pick the first sugestion from the list

    Scenario: Search for non existing Products
        Given I want to search a product
        When I enter the search term for non existing product
        Then page results says there is no match for this term