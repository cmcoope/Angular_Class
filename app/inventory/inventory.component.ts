import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nw-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("We are in the Inventory!!!!!");

  }

}
