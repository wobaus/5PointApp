import { MENU_ITEMS } from './../../shared/mock-menu-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css']
})
export class LunchComponent implements OnInit {
  lunchItems = MENU_ITEMS.filter(item => item.type === 'lunch');

  constructor() { }

  ngOnInit() {
  }

}
