import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss']
})
export class InfiniteScrollComponent implements OnInit {
  products: any[];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getNextProducts();
  }
  getNextProducts() {
    this.http.get('assets/products.json').subscribe((response: any[]) => {
      this.products = this.products? this.products.concat(response) : response;
    });
  }
  observeIntersecting(isIntersecting) {
    if (isIntersecting) {
      this.getNextProducts();
    }
  }

}
