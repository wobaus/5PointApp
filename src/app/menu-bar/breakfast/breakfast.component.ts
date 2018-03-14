import { CartItems } from './../../cartItems.service';
import { MenuItem } from './../../shared/menu-item.model';
import { MENU_ITEMS } from './../../shared/mock-menu-item';
import { Component, OnInit, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css'],
  providers: [CartItems]
})
export class BreakfastComponent implements OnInit {
  // get breakfast menus from mock-menu-itmes and pass to temp to display
  breakfastItems = MENU_ITEMS.filter(item => item.type === 'breakfast');
  // carts: {name: string, description: string, price: number}[] = [];
  constructor(private cartItems: CartItems) {

    }
  ngOnInit() {
  }


  onAddItem(breakfastItem: MenuItem) {
    this.cartItems.addToCart(breakfastItem);
  }

}

