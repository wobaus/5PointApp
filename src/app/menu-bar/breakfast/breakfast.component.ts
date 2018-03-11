import { MenuItem } from './../../shared/menu-item.model';
import { MENU_ITEMS } from './../../shared/mock-menu-item';
import { Component, OnInit } from '@angular/core';
import { CartItems } from '../../cartItems.service';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css'],
  providers: [CartItems]
})
export class BreakfastComponent implements OnInit {
  breakfastItems = MENU_ITEMS.filter(item => item.type === 'breakfast');
  carts: {name: string, description: string, price: number}[] = [];
  constructor(private cartItems: CartItems) { }


  ngOnInit() {
    this.carts = this.cartItems.getItems();
  }


  onAddItem(name: string, description: string,  price: number) {
    this.cartItems.addToCart(name, description, price);
  }

}
