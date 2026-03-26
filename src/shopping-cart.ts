import { type CartItem } from './types.js';

const DISCOUNT_THRESHOLD = 100;
const DISCOUNT_RATE = 0.1;

export class ShoppingCart {
  private readonly items: CartItem[] = [];

  addItem(item: CartItem): void {
    this.items.push(item);
  }

  get checkoutTotal(): number {
    const sum = this.items.reduce((total, item) => total + item.price, 0);
    return sum > DISCOUNT_THRESHOLD ? sum * (1 - DISCOUNT_RATE) : sum;
  }
}
