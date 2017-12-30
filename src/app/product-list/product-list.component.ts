import { Component, OnInit, Output, EventEmitter } from '@angular/core';

export interface ProductCategory {
  id: number;
  title: string;
}

export interface Product {
  categoryId: number;
  image: string;
  title: string;
  price: number;
  description: string;
}


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  selectedProduct: Product = null;

  categories: ProductCategory[] = [
    {id: 1, title: 'first category'},
    {id: 2, title: 'second category'},
  ];

  itemList: Product[] = [
    { title: 'Item 1', price: 1000, categoryId: 1, image: '/assets/img1.jpg', description: 'item 1' },
    { title: 'Item 2', price: 1100, categoryId: 1, image: '/assets/img2.jpg', description: 'item 2' },
    { title: 'Item 3', price: 1200, categoryId: 2, image: '/assets/img3.jpg', description: 'item 3' },
    { title: 'Item 4', price: 1300, categoryId: 2, image: '/assets/img4.jpg', description: 'item 4' },
    { title: 'Item 5', price: 1400, categoryId: 2, image: '/assets/img5.jpg', description: 'item 5' },
    { title: 'Item 1', price: 1000, categoryId: 1, image: '/assets/img1.jpg', description: 'item 1' },
    { title: 'Item 2', price: 1100, categoryId: 1, image: '/assets/img2.jpg', description: 'item 2' },
    { title: 'Item 3', price: 1200, categoryId: 2, image: '/assets/img3.jpg', description: 'item 3' },
    { title: 'Item 4', price: 1300, categoryId: 2, image: '/assets/img4.jpg', description: 'item 4' },
    { title: 'Item 5', price: 1400, categoryId: 2, image: '/assets/img5.jpg', description: 'item 5' },
    { title: 'Item 1', price: 1000, categoryId: 1, image: '/assets/img1.jpg', description: 'item 1' },
    { title: 'Item 2', price: 1100, categoryId: 1, image: '/assets/img2.jpg', description: 'item 2' },
    { title: 'Item 3', price: 1200, categoryId: 2, image: '/assets/img3.jpg', description: 'item 3' },
    { title: 'Item 4', price: 1300, categoryId: 2, image: '/assets/img4.jpg', description: 'item 4' },
    { title: 'Item 5', price: 1400, categoryId: 2, image: '/assets/img5.jpg', description: 'item 5' },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}