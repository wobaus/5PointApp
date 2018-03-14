import { MENU_ITEMS } from './shared/mock-menu-item';
import { Injectable , EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { MenuItem } from './shared/menu-item.model';

// import { EventEmitter } from 'protractor';

@Injectable()

export class CartItems {
    // cartItemAdded = new Subject<MenuItem[]>();
    // cartAddedItem = new EventEmitter<MenuItem>();
    //  cartItems = new Subject<MenuItem[]>();
    private cartItems = [
        {
            id: 1,
            name: 'Breakfast Burrito',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            price: 10,
            type: 'breakfast',
            imagepath: ''
        },
        {
            id: 2,
            name: 'Breakfast Burrito2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            price: 10,
            type: 'breakfast',
            imagepath: ''
        }
    ];


    getCartItems() {
        return this.cartItems;
    }

    addToCart(item) {
        this.cartItems.push(item);
    }

    removeFromCart(item) {
        this.cartItems.splice(this.cartItems.indexOf(item), 1);
    }

}
