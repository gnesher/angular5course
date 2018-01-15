import { Injectable } from '@angular/core';
import _ from 'lodash';

export interface ProductCategory {
  id: number;
  title: string;
}

export interface Product {
  id: string;
  categoryId: number;
  image: string;
  title: string;
  price: number;
  description?: string;
}

@Injectable()
export class ProductsService {

  categories: ProductCategory[];
  itemList: Product[];
  selectedCategory: number;

  constructor() {
    this.itemList = [
      { id: '1', title: 'Item 1', price: 1000, categoryId: 1, image: '/assets/img1.jpg', description: 'item 1' },
      { id: '2', title: 'Item 2', price: 1100, categoryId: 1, image: '/assets/img2.jpg', description: 'item 2' },
      { id: '3', title: 'Item 3', price: 1200, categoryId: 2, image: '/assets/img3.jpg', description: 'item 3' },
      { id: '4', title: 'Item 4', price: 1300, categoryId: 2, image: '/assets/img4.jpg', description: 'item 4' },
      { id: '5', title: 'Item 5', price: 1400, categoryId: 2, image: '/assets/img5.jpg', description: 'item 5' },
      { id: '6', title: 'Item 1', price: 1000, categoryId: 1, image: '/assets/img1.jpg', description: 'item 1' },
      { id: '7', title: 'Item 2', price: 1100, categoryId: 1, image: '/assets/img2.jpg', description: 'item 2' },
      { id: '8', title: 'Item 3', price: 1200, categoryId: 2, image: '/assets/img3.jpg', description: 'item 3' },
      { id: '9', title: 'Item 4', price: 1300, categoryId: 2, image: '/assets/img4.jpg', description: 'item 4' },
      { id: '10', title: 'Item 5', price: 1400, categoryId: 2, image: '/assets/img5.jpg', description: 'item 5' },
      { id: '11', title: 'Item 1', price: 1000, categoryId: 1, image: '/assets/img1.jpg', description: 'item 1' },
      { id: '12', title: 'Item 2', price: 1100, categoryId: 1, image: '/assets/img2.jpg', description: 'item 2' },
      { id: '13', title: 'Item 3', price: 1200, categoryId: 2, image: '/assets/img3.jpg', description: 'item 3' },
      { id: '14', title: 'Item 4', price: 1300, categoryId: 2, image: '/assets/img4.jpg', description: 'item 4' },
      { id: '15', title: 'Item 5', price: 1400, categoryId: 2, image: '/assets/img5.jpg', description: 'item 5' },
    ];

    this.categories = [
      { id: 1, title: 'first category' },
      { id: 2, title: 'second category' },
    ];

  }

  addProduct(newProduct: Product) {
    this.itemList.push(newProduct);
  }

  editProduct(updatedProduct: Product) {
    const prodPos = _.findIndex(this.itemList, {id: updatedProduct.id});
    console.log('pos', prodPos);
    this.itemList[prodPos] = updatedProduct;
    console.log(this.itemList);
  }

  setFilteredItems(categoryID: number): Product[] {
    return  _.filter(this.itemList, (item) => {
      if (categoryID === 0) {
        return item;
      }
      return item.categoryId === categoryID;
    });
  }

  getProductsBId(ID: number) {
    return _.find(this.itemList, {id: ID});
  }

}
