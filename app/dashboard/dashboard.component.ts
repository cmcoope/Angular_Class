import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'nw-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  orders;
  constructor(private _http:Http) { }

  ngOnInit() {
    this.getOrdersReadyToShip();
  }

  getOrdersReadyToShip() {
    const url = "/api/orders/readyToShip";
    const orderPromise = this._http.get(url).toPromise();
    orderPromise.then(this.resp, this.error);
  }

  resp = (response) => {
    this.orders = response.json();
    console.log("Here's your order: " + this.orders)
  }

  error(e) {
    console.error("This program sucks!");
  }
}
