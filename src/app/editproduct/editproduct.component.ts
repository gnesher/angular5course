import { ActivatedRoute } from '@angular/router';
import { ProductsService, Product } from './../products.service';
import { Component, OnInit, Input } from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  @Input() editProductID: number;

  constructor(private productsService: ProductsService,
              private route: ActivatedRoute) {
    this.route.paramMap.subscribe((p) => {
      this.product = this.productsService.getProductsBId(parseInt(p.get('id'), 10));
    });
  }

  private message: string = null;

  private product: Product = {
    categoryId: 1,
    image: null,
    title: null,
    price: null,
    description: null,
    id: null
  };

  addProduct() {
    // if no id is provided (new product) we generate a unique id using lodash and add a new product
    // otherwise we just edit an existing product
    // we send a clone as we reset the form (object) afterwords
    if (!this.product.id) {
      this.product.id = _.uniqueId();
      this.productsService.addProduct(_.clone(this.product));
      this.message = 'Product was added successfully';
    } else {
      this.productsService.editProduct(_.clone(this.product));
      this.message = 'Product was edited successfully';
    }

  }

  logUserAnswer($event) {
    console.log('user answered: ', $event);
  }

  ngOnInit() {
  }

}
