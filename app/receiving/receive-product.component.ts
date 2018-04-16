import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nw-receive-product',
  templateUrl: './receive-product.component.html',
  styleUrls: ['./receive-product.component.css'],
  styles: ['#orderContents img { height: 50px }']
})
export class ReceiveProductComponent implements OnInit {
  showForm;
  receivedProducts = [];
  productID;
  quantity;

  constructor() { }

  ngOnInit() {
  }

  saveTrackingNumber(tNum) {
    console.log("You clicked 'Save tracking number' Your number is: " + tNum);
    this.showForm = true;
  }

  receiveProduct(productID, quantity) {
    this.receivedProducts.push({productID, quantity});
    this.productID = undefined;
    this.quantity = undefined;
    console.log(this.receivedProducts);
  }

  finishedReceiving() {
    console.log("Finished receiving");
  }
}
