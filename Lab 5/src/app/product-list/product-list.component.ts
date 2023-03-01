import { Component, Input } from '@angular/core';
import { Category } from '../products';
import {CategoryList} from "../category";
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  categoryOfProduct = '';
  category = CategoryList;
  newProducts = [];
  products = Category;
  // if()
  // for()
  changeCategory(value: string) {
    this.categoryOfProduct = value;
    console.log(this.categoryOfProduct)
    this.changeItems()
  }
  share(value: string) {
    const url = `tg://msg_url?url=${encodeURIComponent(value)}`;
    window.location.href = url;
  }

  changeItems() {
    this.products = Category;
    if(this.categoryOfProduct === 'all') {
      return;
    }
    for(let item of this.products) {
      if (this.categoryOfProduct != item.category) {
        continue;
      }
      // @ts-ignore
      this.newProducts.push(item)
    }
    this.products = this.newProducts;
    this.newProducts = [];
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
