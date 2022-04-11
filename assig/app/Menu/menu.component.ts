import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
  <h3>
  Menu List
  </h3>
  <ul class="items">
  <li *ngFor="let Menu of MenuComponent">
  <span class="badge">{{Menu.id}}</span> {{Menu.name}}
  </li>
  </ul>
  `,
  styles: [
  ]
})

export class MenuComponent implements OnInit {
  getItems(): MenuComponent[] {
      throw new Error('Method not implemented.');
  }

  MenuComponent = [
    {"id": 1, "name": "Sambar"},
    {"id": 2, "name": "Idle"}, 
    {"id": 3, "name": "Dosa"},
    {"id": 4, "name": "Bajji"},
    {"id": 5, "name": "CUrd"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}