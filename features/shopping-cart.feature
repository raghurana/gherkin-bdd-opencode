Feature: Shopping cart checkout total
  As a shopper
  I want to see how much I need to pay at checkout
  So that I know the final amount before completing my purchase

  Background:
    Given a shopper has an empty cart

  Scenario Outline: Checkout total reflects cart items with discount rules applied
    When the shopper adds a "<item1>" priced at $<price1> to the cart
    And the shopper adds a "<item2>" priced at $<price2> to the cart
    Then the checkout total is $<total>

    Examples:
      | item1                | price1 | item2              | price2 | total |
      | Mechanical Keyboard  | 60     | Mouse Pad          | 25     | 85    |
      | Wireless Headphones  | 70     | USB Hub            | 30     | 100   |
      | Mechanical Keyboard  | 60     | Ergonomic Mouse    | 80     | 126   |
