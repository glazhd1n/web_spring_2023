export interface Category {
  id: number;
  name: string;
  rating: number;
  description: string;

  img: string;

  link: string;
}

export const products = [
  {
    id: 1,
    img: 'apple-iphone-11-128gb.jpg',
    name: 'iPhone 11',
    rating: 5,
    description: 'Размер оперативной памяти 4 ГБ\n' +
        'Процессор 6-ядерный Apple A13 Bionic\n' +
        'Частота процессора 2650 МГц\n' +
        'Объем встроенной памяти 128 ГБ\n' +
        'Слот карт памяти Нет',
    link: 'https://kaspi.kz/shop/p/apple-iphone-11-64gb-slim-box-chernyi-100692387/?c=750000000'
  },
  {
    id: 2,
    img: 'apple-iphone-14-pro-max.jpg',
    name: 'iPhone 14 pro',
    rating: 5,
    description: 'Размер оперативной памяти 6 ГБ\n' +
        'Процессор 6-ядерный Apple A16 Bionic\n' +
        'Объем встроенной памяти 256 ГБ\n' +
        'Слот карт памяти Нет',
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-128gb-fioletovyi-106363283/?c=750000000'
  },
  {
    id: 3,
    img: 'apple-iphone-13-128gb.jpg',
    name: 'iPhone 13',
    rating: 5,
    description: 'Размер оперативной памяти 4 ГБ\n' +
        'Процессор 6-ядерный Apple A15 Bionic\n' +
        'Частота процессора 3200 МГц\n' +
        'Объем встроенной памяти 256 ГБ\n' +
        'Слот карт памяти Нет',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-256gb-chernyi-102298409/?c=750000000'
  },
  {
    id: 4,
    img: 'Oppo.jpg',
    name: 'OPPO A57s 4 ГБ/128 ГБ',
    rating: 3,
    description: 'Размер оперативной памяти 4 ГБ\n' +
        'Процессор 8-ядерный Mediatek Helio G35\n' +
        'Частота процессора 2300 МГц\n' +
        'Объем встроенной памяти 128 ГБ',
    link: 'https://kaspi.kz/shop/p/oppo-a57s-4-gb-128-gb-chernyi-107622277/?c=750000000'
  },
  {
    id: 5,
    img: 'apple-watch-se.jpg',
    name: 'Apple Watch SE',
    rating: 5,
    description: 'Процессор Apple S8\n' +
        'Слот для карты памяти Нет\n' +
        'Объем встроенной памяти 32 Гб',
    link: 'https://kaspi.kz/shop/p/apple-watch-se-2nd-gen-44-mm-chernyi-106362757/?c=750000000#!/item'
  },
  {
    id: 6,
    img: 'smart-casy-xiaomi.jpg',
    name: 'Смарт-часы Xiaomi Redmi Watch 2',
    rating: 5,
    description: 'Процессор Ambiq Apollo 3.5\n' +
        'Слот для карты памяти Нет',
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-watch-2-lite-gl-chernyi-103246651/?c=750000000#!/item'
  },
  {
    id: 7,
    img: 'pocket-book.jpg',
    name: 'POCKET BOOK PB617-P-CIS черный',
    rating: 5,
    description: 'Цвет черный\n' +
        'Размеры (ШxДxT) 161.3 x 108 x 8 мм\n' +
        'Вес 155 г',
    link: 'https://kaspi.kz/shop/p/pocket-book-pb617-p-cis-chernyi-105268772/?c=750000000'
  },
  {
    id: 8,
    img: 'ritmix-rbk.jpg',
    name: 'Ritmix RBK-677FL черный',
    rating: 5,
    description: 'Частота процессора 600 МГц\n' +
        'Оперативная память 128 Мб\n' +
        'Встроенная память 4096 Мб\n' +
        'Карты памяти micro SD, micro SDHC',
    link: 'https://kaspi.kz/shop/p/ritmix-rbk-677fl-chernyi-100613289/?c=750000000'
  },
  {
    id: 9,
    img: 'yandeks-novaya-stantsiya.jpg',
    name: 'Умная колонка Яндекс Станция Мини 2 с часами черный',
    rating: 4,
    description: 'Диапазон воспроизводимых частот20 Гц - 20 кГц\n' +
        'Поддержка потоковых аудиосервисовДа\n' +
        'Суммарная мощность10 Вт\n' +
        'Поддержка потоковых видеосервисовНет\n' +
        'Управление умным домомДа\n' +
        'Голосовой помощникАлиса\n' +
        'Цветчерный',
    link: 'https://kaspi.kz/shop/p/jandeks-stantsija-mini-2-s-chasami-chernyi-102580021/?c=750000000#!/item'
  },
  {
    id: 10,
    img: 'yandeks-stantsiya.jpg',
    name: 'Умная колонка Яндекс Станция Лайт бирюзовый',
    rating: 2,
    description: 'Диапазон воспроизводимых частот50-60 Гц\n' +
        'Поддержка потоковых аудиосервисовДа\n' +
        'Суммарная мощность5 Вт\n' +
        'Широкополосные динамики40 мм\n' +
        'Поддержка потоковых видеосервисовНет\n' +
        'Управление умным домомДа\n' +
        'Голосовой помощникАлиса\n' +
        'Цветзеленый',
    link: 'https://kaspi.kz/shop/p/jandeks-stantsija-lait-birjuzovyi-101808994/?c=750000000#!/item'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/