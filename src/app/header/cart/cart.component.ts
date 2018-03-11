import { Component, OnInit } from '@angular/core';
import { CartItems } from '../../cartItems.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts: {name: string, description: string, price: number}[] = [];
  constructor(private cartItems: CartItems) { }

  ngOnInit() {
    this.carts = this.cartItems.getItems();
  }

  // removeItem(CartItems: cartItem {
  //   this.carts = this.carts.removeFromCart(CartItems);
  // }
}
