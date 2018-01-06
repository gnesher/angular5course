import { UserCart } from './cart.service';
import { Injectable } from '@angular/core';
import _ from 'lodash';

export interface UserCart {
  [index: number]:  number;
}

@Injectable()
export class CartService {

  private userCart: UserCart;

  constructor() {
    this.userCart = {};
  }

  addItemToCart(itemID) {
    if (this.userCart[itemID]) {
      this.userCart[itemID]++;
    } else {
      this.userCart[itemID] = 1;
    }
  }

  removeItemFromCart(itemID) {
    if (this.userCart[itemID] && this.userCart[itemID] > 0) {
      this.userCart[itemID]--;
    }
  }

  getUserCart() {
    return this.userCart;
  }

  getCartCount(itemID) {
    // console.log( this.userCart[itemID] ? this.userCart[itemID] : 0 );
    return this.userCart[itemID] ? this.userCart[itemID] : 0;
  }

  getTotalCount() {
    return _.reduce(this.userCart, (counter: number, cartItem) => {
      return counter += cartItem;
    }, 0);
  }

}
