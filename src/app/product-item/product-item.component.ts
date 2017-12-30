import { Component, OnInit, Input } from '@angular/core';

export interface SingleItem {
  name: string;
  cost: number;
  imageUrl: string;
}

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  @Input() item: SingleItem;

  constructor(
  ) {
  }


}
