import { MENU_ITEMS } from './../../shared/mock-menu-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {
  breakfastItems = MENU_ITEMS.filter(item => item.type === 'breakfast');

  constructor() { }

  ngOnInit() {
  }

}
