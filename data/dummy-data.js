import Product from '../models/product';

const PRODUCTS = [
  new Product(
    'p1',
    'u1',
    'Macchiato',
    'https://www.latteartguide.com/wp-content/uploads/2016/01/short-macchiato.jpg',
    'Espresso shot with foam.',
    50
  ),
  new Product(
    'p2',
    'u1',
    'Americano',
    'https://www.latteartguide.com/wp-content/uploads/2016/01/long-black.jpg',
    'Espresso with hot water.',
    45
  ),
  new Product(
    'p3',
    'u1',
    'Espresso',
    'https://www.latteartguide.com/wp-content/uploads/2016/01/432856237_da68d53578_z.jpg',
    '1oz Espresso.',
    45
  ),
  new Product(
    'p4',
    'u1',
    'Latte',
    'https://www.latteartguide.com/wp-content/uploads/2016/01/cafe-latte.jpg',
    "Espresso with steamed milk.",
    50
  ),
  new Product(
    'p5',
    'u1',
    'Cappuccino',
    'https://www.latteartguide.com/wp-content/uploads/2016/01/Cappuccino.jpg',
    'Espresso, Steamed milk, and Foam.',
    50
  ),

];

export default PRODUCTS;

