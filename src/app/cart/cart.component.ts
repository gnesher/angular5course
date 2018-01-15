import { ProductsService, Product } from './../products.service';
import { CartService, UserCart } from './../cart.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Output() stateChanged: EventEmitter<string> = new EventEmitter<string>();

  private cartItems: UserCart;
  private products: Product[];

  constructor(private productsService: ProductsService,
    private cartService: CartService) { }

    // TODO: Angular ngFor does not itterate over dictionarys which requires a map here
    // should move to sets
    ngOnInit() {
    this.cartItems = _.map(this.cartService.getUserCart(), (value, key) => { return { id: key, count: value } });
  }

  removeItemFromCart(itemID) {
    this.cartService.removeItemFromCart(itemID);
    this.cartItems = _.map(this.cartService.getUserCart(), (value, key) => { return { id: key, count: value } });
  }

  public getProductNameByID(productID) {
    return _.find(this.productsService.itemList, { id: productID }).title;
  }
}
