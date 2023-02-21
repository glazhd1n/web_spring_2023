export interface Product {
  id: number;
  name: string;
  rating: number;
  description: string;

  img: string;
}

export const products = [
  {
    id: 1,
    img: 'apple-iphone-11-128gb.jpg',
    name: 'iPhone 11',
    rating: 799,
    description: 'A large phone with one of the best screens'
  },
  {
    id: 2,
    img: 'apple-iphone-14-pro-max.jpg',
    name: 'iPhone 14 pro',
    rating: 699,
    description: 'A great phone with one of the best cameras'
  },
  {
    id: 3,
    img: 'apple-iphone-13-128gb.jpg',
    name: 'iPhone 13',
    rating: 299,
    description: ''
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/