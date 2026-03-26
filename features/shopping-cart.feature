Feature: Shopping cart checkout total
  As a shopper
  I want to see how much I need to pay at checkout
  So that I know the final amount before completing my purchase

  Scenario: Checkout total reflects the sum of all items in the cart
    Given a shopper has an empty cart
    When the shopper adds a "Mechanical Keyboard" priced at $60 to the cart
    And the shopper adds a "Mouse Pad" priced at $25 to the cart
    Then the checkout total is $85

  Scenario: A 10% discount is applied when the cart total exceeds $100
    Given a shopper has an empty cart
    When the shopper adds a "Mechanical Keyboard" priced at $60 to the cart
    And the shopper adds a "Ergonomic Mouse" priced at $80 to the cart
    Then the checkout total is $126
