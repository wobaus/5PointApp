import { MenuItem } from './../../shared/menu-item.model';
import { MENU_ITEMS } from './../../shared/mock-menu-item';
import { Component, OnInit, Input } from '@angular/core';
import { CartItems } from '../../cartItems.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() public carts: CartItems = [];
  constructor(private cartItems: CartItems) { }

  ngOnInit() {
    this.carts = this.cartItems.getCartItems();
  }

}
