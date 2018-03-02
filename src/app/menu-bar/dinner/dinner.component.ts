import { MENU_ITEMS } from './../../shared/mock-menu-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dinner',
  templateUrl: './dinner.component.html',
  styleUrls: ['./dinner.component.css']
})
export class DinnerComponent implements OnInit {
  dinnerItems = MENU_ITEMS.filter(item => item.type === 'dinner');
  constructor() { }

  ngOnInit() {
  }

}
