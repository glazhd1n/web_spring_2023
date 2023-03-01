import { Component } from '@angular/core';
import { Category } from '../products';
import { CategoryList } from '../category'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = Category;
  share(value: string) {
    const url = `tg://msg_url?url=${encodeURIComponent(value)}`;
    window.location.href = url;
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
