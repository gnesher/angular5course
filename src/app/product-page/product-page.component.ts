import { PermissionsService } from './../permissions.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  @Input() product;
  @Input() cartItemCount: number;

  @Output() closeProduct = new EventEmitter<void>();
  @Output() addItemToCart: EventEmitter<String> = new EventEmitter<String>();
  @Output() removeItemFromCart: EventEmitter<String> = new EventEmitter<String>();


  constructor(private permissionsService: PermissionsService) { }

  ngOnInit() {
  }

}
