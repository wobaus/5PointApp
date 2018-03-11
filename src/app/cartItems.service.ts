import { Injectable } from '@angular/core';

@Injectable()

export class CartItems {
    cartItems = [
        {name: 'braekfast_test_Item', description: 'cartItemService test menu' , price: 25},
        {name: 'lunch_test_Item', description: 'cartItemService test menu' , price: 13}
    ];
    addToCart(name: string, description: string, price: number) {
        this.cartItems.push({name: name, description: description, price: price});
    }

    removeFromCart(id: number) {
    }

    getItems() {
        return this.cartItems;
    }
}
