import assert from 'node:assert/strict';
import { Given, When, Then } from '@cucumber/cucumber';
import { ShoppingCart } from '../src/shopping-cart.js';

let cart: ShoppingCart;

Given('a shopper has an empty cart', () => {
  cart = new ShoppingCart();
});

When('the shopper adds a {string} priced at ${int} to the cart', (_name: string, price: number) => {
  cart.addItem({ name: _name, price });
});

Then('the checkout total is ${int}', (expected: number) => {
  assert.equal(cart.checkoutTotal, expected);
});
