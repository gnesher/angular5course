import { CartService } from './../cart.service';
import { ProductsService, Product } from './../products.service';
import { PermissionsService } from './../permissions.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  private product: Product;

  constructor(private permissionsService: PermissionsService,
              private productsService: ProductsService,
              private route: ActivatedRoute,
              private cartService: CartService) {
    this.route.paramMap.subscribe((p) => {
      this.product = this.productsService.getProductsBId(parseInt(p.get('id'), 10));
    });
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

  ngOnInit() {
  }

}
