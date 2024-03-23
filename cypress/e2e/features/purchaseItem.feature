Feature: Purchase an item

    As a client
    I want to select a product and proceed all the way to checkout
    So I can make use of it

    Scenario: Purchase from homepage hot sellers
        Given I am on the home page
        When I select a hot seller product
        And select size and color
        And Add to the cart

    Scenario: Purchase from product detail page