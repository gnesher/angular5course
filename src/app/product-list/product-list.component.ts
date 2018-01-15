import { ProductsService } from './../products.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import _ from 'lodash';
import { Product, ProductCategory } from '../products.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Output() stateChanged: EventEmitter<string> = new EventEmitter<string>();

  selectedProduct: Product = null;
  selectedCategory = 0;

  categories: ProductCategory[];

  itemList: Product[];
  filteredItems: Product[];

  constructor(private productService: ProductsService,
              private cartService: CartService) {
  }

  ngOnInit() {
    this.filterList(0);
  }

  filterList(categoryID) {
    this.selectedCategory = categoryID;
    this.filteredItems = this.productService.setFilteredItems(categoryID);
  }

  addItemToCart(itemID) {
    this.cartService.addItemToCart(itemID);
  }

  removeItemFromCart(itemID) {
    this.cartService.removeItemFromCart(itemID);
  }

  getCartCount(itemID) {
    return this.cartService.getCartCount(itemID);
  }

}
