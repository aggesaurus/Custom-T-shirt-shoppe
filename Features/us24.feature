Feature: As a user I want to be able to use a discount code

   Scenario: 
   Given that I'm on the webshop page 
   And I have placed an order
   When I enter the discount code
   Then the total price should be updated after the discount 