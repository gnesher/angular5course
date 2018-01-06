import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FactoryOrValue } from 'rxjs/interfaces';

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
export class ProductItemComponent implements OnInit {

  @Input() item: SingleItem;
  @Output() addItemToCart: EventEmitter<String> = new EventEmitter<String>();
  @Output() removeItemFromCart: EventEmitter<String> = new EventEmitter<String>();
  @Output() selectItem: EventEmitter<String> = new EventEmitter<String>();
  @Input() cartItemCount: number;

  constructor(
  ) {
  }

  ngOnInit() {
  }

}
