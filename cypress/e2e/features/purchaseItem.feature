Feature: Purchase an item

    As a client
    I want to select a product and proceed all the way to checkout
    So I can make use of it

    Scenario: Purchase from homepage hot sellers
        Given I scroll to hot sellers products on the home page
        When I see a hot seller product
        And Add to the cart from homepage
        #TODO: Then cart item counter is increase


    Scenario: Purchase from product detail page
        
        Given I scroll to hot sellers products on the home page
        When I select a hot seller product
        And I set order detail
        And Add to cart from product detail page
        #TODO: Add checkout steps